import { useEffect, useMemo, useRef, useState } from 'react'

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { MULTI_SELECT_OPTION_HEIGHT } from './constants'
import { StyledContainer, StyledDropdown, StyledTrigger } from './styled'
import { MultiSelectProps } from './types'
import { MultiValue } from '../../molecules'
import {
  StyledCheck,
  StyledList,
  StyledOption,
  StyledSearch,
  StyledSearchInput,
} from '../../molecules/ValueSelector/styled'
import { Check } from '../../../icons/Lucide'
import { newClassNameGetter, VacanoValueItem } from '../../../lib'

const css = newClassNameGetter('multi-select')

export const MultiSelect = ({
  className,
  classnames,
  closeOnSelect = false,
  count = Infinity,
  disabled = false,
  height = 300,
  label,
  onChange,
  options,
  placeholder,
  placement = 'bottom',
  ref,
  searchable = false,
  value,
  variant = 'normal',
  virtualized = false,
  ...rest
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [triggerWidth, setTriggerWidth] = useState(0)

  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement === 'top' ? 'top-start' : 'bottom-start',
    middleware: [offset(4), flip()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  const filteredOptions = useMemo(() => {
    if (!search) return options
    const query = search.toLowerCase()
    return options.filter((option) => option.label.toLowerCase().includes(query))
  }, [options, search])

  const selectedValues = useMemo(() => new Set(value.map((v) => v.value)), [value])

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => MULTI_SELECT_OPTION_HEIGHT,
    enabled: virtualized,
  })

  useEffect(() => {
    if (!isOpen) {
      setSearch('')
      setFocusedIndex(-1)
    }
  }, [isOpen])

  useEffect(() => {
    setFocusedIndex(-1)
  }, [search])

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth)
    }
  }, [isOpen])

  const handleOptionClick = (option: VacanoValueItem) => {
    if (option.disabled) return

    if (selectedValues.has(option.value)) {
      onChange(value.filter((v) => v.value !== option.value))
    } else {
      onChange([...value, option])
    }

    if (closeOnSelect) {
      setIsOpen(false)
    }
  }

  const handleTriggerClick = (e: React.MouseEvent) => {
    // Don't open if clicking on chip delete button
    const target = e.target as HTMLElement
    if (target.closest('.vacano_chip_delete')) {
      e.stopPropagation()
      return
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredOptions.length === 0) return

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
    if (virtualized) {
      virtualizer.scrollToIndex(index, { align: 'auto' })
    } else {
      const list = listRef.current
      if (!list) return
      const option = list.children[index] as HTMLElement
      if (option) {
        option.scrollIntoView({ block: 'nearest' })
      }
    }
  }

  const handleMultiValueChange = (items: VacanoValueItem[]) => {
    onChange(items)
  }

  const heightValue = typeof height === 'number' ? `${height}px` : height

  const renderOptions = () => {
    if (virtualized) {
      return (
        <StyledList
          ref={listRef}
          className={css('list', classnames?.list)}
          style={{ height: heightValue, overflow: 'auto' }}
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const option = filteredOptions[virtualItem.index]
              if (!option) return null
              return (
                <StyledOption
                  key={option.value}
                  className={css('option', classnames?.option)}
                  $selected={selectedValues.has(option.value)}
                  $disabled={Boolean(option.disabled)}
                  $focused={virtualItem.index === focusedIndex}
                  onClick={() => handleOptionClick(option)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  <StyledCheck $selected={selectedValues.has(option.value)}>
                    <Check />
                  </StyledCheck>
                  {option.label}
                </StyledOption>
              )
            })}
          </div>
        </StyledList>
      )
    }

    return (
      <StyledList
        ref={listRef}
        className={css('list', classnames?.list)}
        style={{ maxHeight: heightValue, overflow: 'auto' }}
      >
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
    )
  }

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      <StyledTrigger
        ref={(node) => {
          triggerRef.current = node
          refs.setReference(node)
        }}
        $disabled={disabled}
        onClick={handleTriggerClick}
        {...(disabled ? {} : getReferenceProps())}
      >
        <MultiValue
          classnames={{
            label: classnames?.label,
            chips: classnames?.chips,
            chip: classnames?.chip,
            more: classnames?.more,
            placeholder: classnames?.placeholder,
          }}
          count={count}
          disabled={disabled}
          items={value}
          label={label}
          onChange={handleMultiValueChange}
          placeholder={placeholder}
          variant={variant}
        />
      </StyledTrigger>

      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <StyledDropdown
              ref={refs.setFloating}
              className={css('dropdown', classnames?.dropdown)}
              style={floatingStyles}
              $width={triggerWidth}
              onKeyDown={handleKeyDown}
              {...getFloatingProps()}
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
              {renderOptions()}
            </StyledDropdown>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </StyledContainer>
  )
}
