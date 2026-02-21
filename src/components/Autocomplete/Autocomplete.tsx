import { useCallback, useEffect, useRef, useState } from 'react'

import {
  StyledContainer,
  StyledDropdown,
  StyledEmpty,
  StyledInput,
  StyledInputWrapper,
  StyledItem,
  StyledItemImage,
  StyledItemText,
  StyledLabel,
  StyledMessage,
  StyledSpinnerWrapper,
} from './styled'
import type { AutocompleteProps, AutocompleteSuggestion } from './types'
import { Spinner } from '../Spinner'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('autocomplete')

export const Autocomplete = ({
  className,
  classnames,
  disabled,
  fullWidth,
  label,
  ref,
  message,
  size = 'default',
  variant = 'normal',
  value,
  onChange,
  onSearch,
  debounceMs = 300,
  minChars = 1,
  noResultsMessage = 'No results found',
  ...rest
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState(value?.value ?? '')
  const [suggestions, setSuggestions] = useState<AutocompleteSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (value?.value !== undefined) {
      setInputValue(value.value)
    }
  }, [value?.value])

  const handleSearch = useCallback(
    async (query: string) => {
      if (query.length < minChars) {
        setSuggestions([])
        setHasSearched(false)
        return
      }

      setIsLoading(true)
      setHasSearched(true)

      try {
        const results = await onSearch(query)
        setSuggestions(results)
        setIsOpen(true)
      } catch {
        setSuggestions([])
      } finally {
        setIsLoading(false)
      }
    },
    [onSearch, minChars],
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)

      onChange?.({ value: newValue, image_url: null })

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(() => {
        handleSearch(newValue)
      }, debounceMs)
    },
    [onChange, handleSearch, debounceMs],
  )

  const handleSelect = useCallback(
    (suggestion: AutocompleteSuggestion) => {
      setInputValue(suggestion.value)
      setSuggestions([])
      setIsOpen(false)
      setHasSearched(false)

      onChange?.({ value: suggestion.value, image_url: suggestion.image_url })
    },
    [onChange],
  )

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }, [])

  const handleFocus = useCallback(() => {
    if (suggestions.length > 0) {
      setIsOpen(true)
    }
  }, [suggestions.length])

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  return (
    <StyledContainer
      ref={containerRef}
      className={css('container', className)}
      $fullWidth={Boolean(fullWidth)}
    >
      {label && (
        <StyledLabel variant={variant} className={css('label', classnames?.label)}>
          {label}
        </StyledLabel>
      )}
      <StyledInputWrapper>
        <StyledInput
          {...rest}
          ref={ref}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          $size={size}
          $variant={variant}
          className={css('input', classnames?.input)}
        />
        {isLoading && (
          <StyledSpinnerWrapper>
            <Spinner size="xs" />
          </StyledSpinnerWrapper>
        )}
      </StyledInputWrapper>
      {message && <StyledMessage variant={variant}>{message}</StyledMessage>}
      <StyledDropdown
        $open={isOpen && hasSearched && !isLoading}
        className={css('dropdown', classnames?.dropdown)}
      >
        {suggestions.length > 0
          ? suggestions.map((suggestion) => (
              <StyledItem
                key={suggestion.id}
                onClick={() => handleSelect(suggestion)}
                className={css('item', classnames?.item)}
              >
                {suggestion.image_url && (
                  <StyledItemImage src={suggestion.image_url} alt={suggestion.value} />
                )}
                <StyledItemText>{suggestion.value}</StyledItemText>
              </StyledItem>
            ))
          : !isLoading && <StyledEmpty>{noResultsMessage}</StyledEmpty>}
      </StyledDropdown>
    </StyledContainer>
  )
}
