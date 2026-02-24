import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

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
  StyledPortalDropdown,
  StyledSpinnerWrapper,
} from './styled'
import type { AutocompleteProps, AutocompleteSuggestion } from './types'
import { Spinner } from '../Spinner'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('autocomplete')

const DROPDOWN_GAP = 4

type PortalPosition = {
  top: number
  left: number
  width: number
}

export const Autocomplete = ({
  className,
  classnames,
  disabled,
  fullWidth,
  label,
  ref,
  message,
  portalRenderNode,
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
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({
    top: 0,
    left: 0,
    width: 0,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
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

  const updatePortalPosition = useCallback(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    setPortalPosition({
      top: rect.bottom + DROPDOWN_GAP,
      left: rect.left,
      width: rect.width,
    })
  }, [])

  useLayoutEffect(() => {
    if (isOpen && portalRenderNode) {
      updatePortalPosition()
    }
  }, [isOpen, portalRenderNode, updatePortalPosition])

  useEffect(() => {
    if (!isOpen || !portalRenderNode) return

    const handleScroll = () => updatePortalPosition()
    const handleResize = () => updatePortalPosition()

    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, portalRenderNode, updatePortalPosition])

  useEffect(() => {
    if (!isOpen || !portalRenderNode) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
      const isOutsideDropdown = dropdownRef.current && !dropdownRef.current.contains(target)

      if (isOutsideContainer && isOutsideDropdown) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, portalRenderNode])

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const dropdownOpen = isOpen && hasSearched && !isLoading

  const dropdownContent = (
    <>
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
    </>
  )

  const dropdown = portalRenderNode ? (
    createPortal(
      <StyledPortalDropdown
        ref={dropdownRef}
        $open={dropdownOpen}
        className={css('dropdown', classnames?.dropdown)}
        style={{
          top: portalPosition.top,
          left: portalPosition.left,
          width: portalPosition.width,
        }}
      >
        {dropdownContent}
      </StyledPortalDropdown>,
      portalRenderNode,
    )
  ) : (
    <StyledDropdown
      ref={dropdownRef}
      $open={dropdownOpen}
      className={css('dropdown', classnames?.dropdown)}
    >
      {dropdownContent}
    </StyledDropdown>
  )

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
      {dropdown}
    </StyledContainer>
  )
}
