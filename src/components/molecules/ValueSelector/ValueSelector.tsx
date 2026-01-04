import { useEffect, useMemo, useRef, useState } from 'react'

import {
  StyledCheck,
  StyledContainer,
  StyledList,
  StyledOption,
  StyledSearch,
  StyledSearchInput,
} from './styled'
import { ValueSelectorProps } from './types'
import { Check } from '../../../icons/Lucide'
import { newClassNameGetter, VacanoValueItem } from '../../../lib'

const css = newClassNameGetter('value-selector')

export const ValueSelector = ({
  className,
  classnames,
  height,
  multiple = false,
  onChange,
  options,
  ref,
  searchable,
  value,
  ...rest
}: ValueSelectorProps) => {
  const [search, setSearch] = useState('')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const listRef = useRef<HTMLDivElement>(null)

  const filteredOptions = useMemo(() => {
    if (!search) return options
    const query = search.toLowerCase()
    return options.filter((option) => option.label.toLowerCase().includes(query))
  }, [options, search])

  const selectedValues = useMemo(() => new Set(value.map((v) => v.value)), [value])

  useEffect(() => {
    setFocusedIndex(-1)
  }, [search])

  const handleOptionClick = (option: VacanoValueItem) => {
    if (option.disabled) return

    if (multiple) {
      if (selectedValues.has(option.value)) {
        onChange(value.filter((v) => v.value !== option.value))
      } else {
        onChange([...value, option])
      }
    } else {
      onChange(selectedValues.has(option.value) ? [] : [option])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredOptions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex((prev) => {
          const next = prev < filteredOptions.length - 1 ? prev + 1 : 0
          scrollToOption(next)
          return next
        })
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : filteredOptions.length - 1
          scrollToOption(next)
          return next
        })
        break
      case 'Enter': {
        e.preventDefault()
        const focusedOption = filteredOptions[focusedIndex]
        if (focusedOption) {
          handleOptionClick(focusedOption)
        }
        break
      }
    }
  }

  const scrollToOption = (index: number) => {
    const list = listRef.current
    if (!list) return
    const option = list.children[index] as HTMLElement
    if (option) {
      option.scrollIntoView({ block: 'nearest' })
    }
  }

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $height={height}
      onKeyDown={handleKeyDown}
      tabIndex={searchable ? undefined : 0}
    >
      {searchable && (
        <StyledSearch className={css('search', classnames?.search)}>
          <StyledSearchInput
            autoFocus
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </StyledSearch>
      )}
      <StyledList ref={listRef} className={css('list', classnames?.list)}>
        {filteredOptions.map((option, index) => (
          <StyledOption
            key={option.value}
            className={css('option', classnames?.option)}
            $selected={selectedValues.has(option.value)}
            $disabled={Boolean(option.disabled)}
            $focused={index === focusedIndex}
            onClick={() => handleOptionClick(option)}
          >
            <StyledCheck $selected={selectedValues.has(option.value)}>
              <Check />
            </StyledCheck>
            {option.label}
          </StyledOption>
        ))}
      </StyledList>
    </StyledContainer>
  )
}
