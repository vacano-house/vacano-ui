import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import {
  StyledContainer,
  StyledDropdown,
  StyledEmpty,
  StyledInput,
  StyledLabel,
  StyledOption,
  StyledPortalDropdown,
  StyledTrigger,
} from './styled'
import { TagsProps } from './types'
import { Chip } from '../Chip'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('tags')

const DROPDOWN_GAP = 4

type PortalPosition = {
  top: number
  left: number
  width: number
}

export const Tags = ({
  className,
  classnames,
  createKey = 'Tab',
  disabled = false,
  emptyMessage = 'No options',
  freeSolo = true,
  label,
  onChange,
  options = [],
  placeholder = 'Add tag...',
  portalRenderNode,
  ref,
  value,
  variant = 'normal',
  ...rest
}: TagsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom')
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({
    top: 0,
    left: 0,
    width: 0,
  })

  const filteredOptions = useMemo(() => {
    const available = options.filter((opt) => !value.includes(opt.value))
    if (!inputValue.trim()) return available
    const query = inputValue.toLowerCase().trim()
    return available.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, value, inputValue])

  const showDropdown = isFocused && options.length > 0

  const updateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) return

    const rect = triggerRef.current.getBoundingClientRect()
    const dropdownHeight = dropdownRef.current?.offsetHeight ?? 200
    const spaceBelow = window.innerHeight - rect.bottom - DROPDOWN_GAP
    const spaceAbove = rect.top - DROPDOWN_GAP

    const newPosition: 'bottom' | 'top' =
      spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'top' : 'bottom'
    setDropdownPosition(newPosition)

    if (portalRenderNode) {
      const top =
        newPosition === 'bottom'
          ? rect.bottom + DROPDOWN_GAP
          : rect.top - dropdownHeight - DROPDOWN_GAP

      setPortalPosition({
        top,
        left: rect.left,
        width: rect.width,
      })
    }
  }, [portalRenderNode])

  useEffect(() => {
    if (isFocused) {
      updateDropdownPosition()
      window.addEventListener('scroll', updateDropdownPosition, true)
      window.addEventListener('resize', updateDropdownPosition)
      return () => {
        window.removeEventListener('scroll', updateDropdownPosition, true)
        window.removeEventListener('resize', updateDropdownPosition)
      }
    }
  }, [isFocused, updateDropdownPosition])

  const addTag = useCallback(
    (tagValue: string) => {
      const trimmed = tagValue.trim()
      if (!trimmed || value.includes(trimmed)) return false
      onChange([...value, trimmed])
      setInputValue('')
      return true
    },
    [value, onChange],
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === createKey && inputValue.trim()) {
      e.preventDefault()
      if (freeSolo) {
        addTag(inputValue)
      } else {
        const matchingOption = filteredOptions.find(
          (opt) => opt.label.toLowerCase() === inputValue.toLowerCase().trim(),
        )
        if (matchingOption) {
          addTag(matchingOption.value)
        }
      }
    } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      onChange(value.slice(0, -1))
    }
  }

  const handleOptionClick = (optionValue: string) => {
    addTag(optionValue)
    inputRef.current?.focus()
  }

  const handleRemove = (tagValue: string) => {
    onChange(value.filter((v) => v !== tagValue))
  }

  const handleContainerClick = () => {
    if (!disabled) {
      inputRef.current?.focus()
    }
  }

  const getTagLabel = (tagValue: string) => {
    const option = options.find((opt) => opt.value === tagValue)
    return option?.label ?? tagValue
  }

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <StyledLabel $variant={variant} className={css('label')}>
          {label}
        </StyledLabel>
      )}
      <div ref={containerRef} style={{ position: 'relative' }}>
        <StyledTrigger
          ref={triggerRef}
          $variant={variant}
          $disabled={disabled}
          $focused={isFocused}
          onClick={handleContainerClick}
          className={css('trigger', classnames?.trigger)}
        >
          {value.map((tag) => (
            <Chip
              key={tag}
              deletable={!disabled}
              onDelete={() => handleRemove(tag)}
              className={css('chip', classnames?.chip)}
            >
              {getTagLabel(tag)}
            </Chip>
          ))}
          <StyledInput
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
            onKeyDown={handleKeyDown}
            placeholder={value.length === 0 ? placeholder : ''}
            disabled={disabled}
            $disabled={disabled}
            className={css('input', classnames?.input)}
          />
        </StyledTrigger>

        {options.length > 0 &&
          (portalRenderNode ? (
            createPortal(
              <StyledPortalDropdown
                ref={dropdownRef}
                $open={showDropdown}
                $position={dropdownPosition}
                style={{
                  top: portalPosition.top,
                  left: portalPosition.left,
                  width: portalPosition.width,
                }}
                className={css('dropdown', classnames?.dropdown)}
              >
                {filteredOptions.length === 0 ? (
                  <StyledEmpty className={css('empty', classnames?.empty)}>
                    {emptyMessage}
                  </StyledEmpty>
                ) : (
                  filteredOptions.map((opt) => (
                    <StyledOption
                      key={opt.value}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleOptionClick(opt.value)}
                      className={css('option', classnames?.option)}
                    >
                      {opt.label}
                    </StyledOption>
                  ))
                )}
              </StyledPortalDropdown>,
              portalRenderNode,
            )
          ) : (
            <StyledDropdown
              ref={dropdownRef}
              $open={showDropdown}
              $position={dropdownPosition}
              className={css('dropdown', classnames?.dropdown)}
            >
              {filteredOptions.length === 0 ? (
                <StyledEmpty className={css('empty', classnames?.empty)}>
                  {emptyMessage}
                </StyledEmpty>
              ) : (
                filteredOptions.map((opt) => (
                  <StyledOption
                    key={opt.value}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleOptionClick(opt.value)}
                    className={css('option', classnames?.option)}
                  >
                    {opt.label}
                  </StyledOption>
                ))
              )}
            </StyledDropdown>
          ))}
      </div>
    </StyledContainer>
  )
}
