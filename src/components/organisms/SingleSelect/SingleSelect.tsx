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

import { SINGLE_SELECT_OPTION_HEIGHT } from './constants'
import {
  StyledChevron,
  StyledContainer,
  StyledDropdown,
  StyledPlaceholder,
  StyledTrigger,
  StyledValue,
} from './styled'
import { SingleSelectProps } from './types'
import { FieldLabel } from '../../atoms'
import {
  StyledCheck,
  StyledList,
  StyledOption,
  StyledSearch,
  StyledSearchInput,
} from '../../molecules/ValueSelector/styled'
import { Check, ChevronDown } from '../../../icons/Lucide'
import { newClassNameGetter, VacanoValueItem } from '../../../lib'

const css = newClassNameGetter('single-select')

export const SingleSelect = ({
  className,
  classnames,
  closeOnSelect = true,
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
}: SingleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
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

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => SINGLE_SELECT_OPTION_HEIGHT,
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

    if (value?.value === option.value) {
      onChange(null)
    } else {
      onChange(option)
    }

    if (closeOnSelect) {
      setIsOpen(false)
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
              const isSelected = value?.value === option.value
              return (
                <StyledOption
                  key={option.value}
                  className={css('option', classnames?.option)}
                  $selected={isSelected}
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
                  <StyledCheck $selected={isSelected}>
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
        {filteredOptions.map((option, index) => {
          const isSelected = value?.value === option.value
          return (
            <StyledOption
              key={option.value}
              className={css('option', classnames?.option)}
              $selected={isSelected}
              $disabled={Boolean(option.disabled)}
              $focused={index === focusedIndex}
              onClick={() => handleOptionClick(option)}
            >
              <StyledCheck $selected={isSelected}>
                <Check />
              </StyledCheck>
              {option.label}
            </StyledOption>
          )
        })}
      </StyledList>
    )
  }

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <FieldLabel variant={variant} className={css('label', classnames?.trigger)}>
          {label}
        </FieldLabel>
      )}
      <StyledTrigger
        ref={(node) => {
          triggerRef.current = node
          refs.setReference(node)
        }}
        className={css('trigger', classnames?.trigger)}
        tabIndex={disabled ? -1 : 0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $variant={variant}
        $disabled={disabled}
        $focused={isOpen || isFocused}
        {...(disabled ? {} : getReferenceProps())}
      >
        {value ? (
          <StyledValue className={css('value', classnames?.value)} $variant={variant}>
            {value.label}
          </StyledValue>
        ) : (
          <StyledPlaceholder
            className={css('placeholder', classnames?.placeholder)}
            $variant={variant}
          >
            {placeholder}
          </StyledPlaceholder>
        )}
        <StyledChevron $open={isOpen}>
          <ChevronDown />
        </StyledChevron>
      </StyledTrigger>

      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <StyledDropdown
              ref={refs.setFloating}
              className={css('dropdown', classnames?.dropdown)}
              style={floatingStyles}
              $width={triggerWidth}
              tabIndex={searchable ? undefined : 0}
              onKeyDown={searchable ? undefined : handleKeyDown}
              {...getFloatingProps()}
            >
              {searchable && (
                <StyledSearch className={css('search', classnames?.search)}>
                  <StyledSearchInput
                    autoFocus
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
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
