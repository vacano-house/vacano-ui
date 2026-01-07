import { useEffect, useRef, useState } from 'react'

import { DROPDOWN_PADDING, OPTION_HEIGHT } from './constants'
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

  const selectedOption = options.find((opt) => opt.value === value)
  const selectedIndex = Math.max(
    0,
    options.findIndex((opt) => opt.value === value),
  )
  const dropdownTop = -(selectedIndex * OPTION_HEIGHT + DROPDOWN_PADDING)

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault()
      setIsOpen(false)
    } else if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
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
