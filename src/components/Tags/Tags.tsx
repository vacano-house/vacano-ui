import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  StyledContainer,
  StyledDropdown,
  StyledEmpty,
  StyledInput,
  StyledLabel,
  StyledOption,
  StyledTrigger,
} from './styled'
import { TagsProps } from './types'
import { Chip } from '../Chip'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('tags')

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
  ref,
  value,
  variant = 'normal',
  ...rest
}: TagsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom')

  const filteredOptions = useMemo(() => {
    const available = options.filter((opt) => !value.includes(opt.value))
    if (!inputValue.trim()) return available
    const query = inputValue.toLowerCase().trim()
    return available.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, value, inputValue])

  const showDropdown = isFocused && options.length > 0

  const updateDropdownPosition = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    setDropdownPosition(spaceBelow < 220 && spaceAbove > spaceBelow ? 'top' : 'bottom')
  }, [])

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

        {options.length > 0 && (
          <StyledDropdown
            $open={showDropdown}
            $position={dropdownPosition}
            className={css('dropdown', classnames?.dropdown)}
          >
            {filteredOptions.length === 0 ? (
              <StyledEmpty className={css('empty', classnames?.empty)}>{emptyMessage}</StyledEmpty>
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
        )}
      </div>
    </StyledContainer>
  )
}
