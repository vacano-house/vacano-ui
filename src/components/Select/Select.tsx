import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  StyledCheckmark,
  StyledChevron,
  StyledContainer,
  StyledDropdown,
  StyledLabel,
  StyledOption,
  StyledTrigger,
  StyledTriggerText,
} from './styled'
import { SelectProps } from './types'
import { Check, ChevronDown } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('select')

const OPTION_HEIGHT = 40
const DROPDOWN_PADDING = 4

export const Select = ({
  className,
  classnames,
  disabled = false,
  fullWidth = false,
  label,
  onChange,
  options,
  placeholder = 'Select...',
  ref,
  size = 'default',
  value,
  variant = 'normal',
  ...rest
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const selectedOption = useMemo(() => {
    return options.find((opt) => opt.value === value)
  }, [options, value])

  const selectedIndex = useMemo(() => {
    const idx = options.findIndex((opt) => opt.value === value)
    return idx >= 0 ? idx : 0
  }, [options, value])

  const dropdownTop = useMemo(() => {
    return -(selectedIndex * OPTION_HEIGHT + DROPDOWN_PADDING)
  }, [selectedIndex])

  const handleToggle = useCallback(() => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }, [disabled])

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange?.(optionValue)
      setIsOpen(false)
      triggerRef.current?.focus()
    },
    [onChange],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleToggle()
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        setIsOpen(false)
      } else if (e.key === 'ArrowDown' && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
      }
    },
    [disabled, handleToggle, isOpen],
  )

  const handleOptionKeyDown = useCallback(
    (e: React.KeyboardEvent, optionValue: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleSelect(optionValue)
      }
    },
    [handleSelect],
  )

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <StyledContainer
      {...rest}
      ref={(node) => {
        ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      $fullWidth={fullWidth}
      className={css('container', className)}
    >
      {label && <StyledLabel className={css('label', classnames?.label)}>{label}</StyledLabel>}

      <StyledTrigger
        ref={triggerRef}
        type="button"
        $size={size}
        $variant={variant}
        $disabled={disabled}
        $hasValue={Boolean(selectedOption)}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={css('trigger', classnames?.trigger)}
      >
        <StyledTriggerText>{selectedOption?.label ?? placeholder}</StyledTriggerText>
        <StyledChevron $open={isOpen}>
          <ChevronDown size={16} />
        </StyledChevron>
      </StyledTrigger>

      {isOpen && (
        <StyledDropdown
          role="listbox"
          style={{ top: dropdownTop }}
          className={css('dropdown', classnames?.dropdown)}
        >
          {options.map((option) => (
            <StyledOption
              key={option.value}
              type="button"
              role="option"
              $selected={option.value === value}
              $disabled={option.disabled ?? false}
              disabled={option.disabled}
              aria-selected={option.value === value}
              onClick={() => handleSelect(option.value)}
              onKeyDown={(e) => handleOptionKeyDown(e, option.value)}
              className={css('option', classnames?.option)}
            >
              <span>{option.label}</span>
              {option.value === value && (
                <StyledCheckmark>
                  <Check size={16} />
                </StyledCheckmark>
              )}
            </StyledOption>
          ))}
        </StyledDropdown>
      )}
    </StyledContainer>
  )
}
