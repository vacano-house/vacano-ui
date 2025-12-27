import { useRef } from 'react'
import { createPortal } from 'react-dom'

import { FloatingFocusManager } from '@floating-ui/react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { Check, ChevronDown } from '../../../icons/Lucide'
import { classNameGetter } from '../../../lib/utils'
import {
  DEFAULT_SELECT_OPTION_HEIGHT,
  DEFAULT_SELECT_PROP_EMPTY_MESSAGE,
  DEFAULT_SELECT_PROP_MAX_HEIGHT,
  DEFAULT_SELECT_PROP_PLACEHOLDER,
  DEFAULT_SELECT_PROP_PLACEMENT,
  DEFAULT_SELECT_PROP_SEARCH_PLACEHOLDER,
} from './constants'
import {
  StyledSelectChevron,
  StyledSelectContainer,
  StyledSelectContent,
  StyledSelectEmpty,
  StyledSelectIcon,
  StyledSelectLabel,
  StyledSelectList,
  StyledSelectOption,
  StyledSelectOptionCheck,
  StyledSelectOptionLabel,
  StyledSelectSearch,
  StyledSelectSearchInput,
  StyledSelectTrigger,
  StyledSelectValue,
} from './styled'
import type { SelectProps } from './types'
import { useSelect } from './useSelect'

const css = classNameGetter('select')

export const Select = ({
  options,
  value,
  onChange,
  placeholder = DEFAULT_SELECT_PROP_PLACEHOLDER,
  searchPlaceholder = DEFAULT_SELECT_PROP_SEARCH_PLACEHOLDER,
  emptyMessage = DEFAULT_SELECT_PROP_EMPTY_MESSAGE,
  label,
  icon,
  state,
  disabled,
  fullWidth,
  placement = DEFAULT_SELECT_PROP_PLACEMENT,
  maxHeight = DEFAULT_SELECT_PROP_MAX_HEIGHT,
  virtualized,
  searchable,
  portalRenderNode,
  className,
  classnames,
  ...rest
}: SelectProps) => {
  const listRef = useRef<HTMLDivElement>(null)

  const {
    isOpen,
    selectedOption,
    filteredOptions,
    searchQuery,
    context,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    listRef: itemsRef,
    handleSearchChange,
    handleSearchKeyDown,
    searchInputRef,
    highlightedIndex,
  } = useSelect({
    options,
    value,
    onChange,
    placement,
    searchable,
    disabled,
  })

  const searchHeight = searchable ? 56 : 0
  const listMaxHeight = maxHeight - searchHeight - 8

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => DEFAULT_SELECT_OPTION_HEIGHT,
    overscan: 5,
    enabled: virtualized,
  })

  const renderOptions = () => {
    if (filteredOptions.length === 0) {
      return (
        <StyledSelectEmpty className={css('empty', classnames?.empty)}>
          {emptyMessage}
        </StyledSelectEmpty>
      )
    }

    if (virtualized) {
      return (
        <StyledSelectList
          ref={listRef}
          className={css('list', classnames?.list)}
          style={{ maxHeight: listMaxHeight, overflow: 'auto' }}
        >
          <div
            style={{
              height: virtualizer.getTotalSize(),
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const option = filteredOptions[virtualItem.index]

              if (!option) {
                return null
              }

              const isSelected = option.value === value

              return (
                <StyledSelectOption
                  key={option.value}
                  ref={(node) => {
                    itemsRef.current[virtualItem.index] = node
                  }}
                  className={css('option', classnames?.option)}
                  $isSelected={isSelected}
                  $isHighlighted={highlightedIndex === virtualItem.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: virtualItem.size,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                  {...getItemProps(virtualItem.index)}
                >
                  <StyledSelectOptionLabel>{option.label}</StyledSelectOptionLabel>
                  {isSelected && (
                    <StyledSelectOptionCheck>
                      <Check size={16} />
                    </StyledSelectOptionCheck>
                  )}
                </StyledSelectOption>
              )
            })}
          </div>
        </StyledSelectList>
      )
    }

    return (
      <StyledSelectList
        ref={listRef}
        className={css('list', classnames?.list)}
        style={{ maxHeight: listMaxHeight }}
      >
        {filteredOptions.map((option, index) => {
          const isSelected = option.value === value

          return (
            <StyledSelectOption
              key={option.value}
              ref={(node) => {
                itemsRef.current[index] = node
              }}
              className={css('option', classnames?.option)}
              $isSelected={isSelected}
              $isHighlighted={highlightedIndex === index}
              {...getItemProps(index)}
            >
              <StyledSelectOptionLabel>{option.label}</StyledSelectOptionLabel>
              {isSelected && (
                <StyledSelectOptionCheck>
                  <Check size={16} />
                </StyledSelectOptionCheck>
              )}
            </StyledSelectOption>
          )
        })}
      </StyledSelectList>
    )
  }

  const renderContent = () => {
    if (!isOpen) {
      return null
    }

    const content = (
      <FloatingFocusManager
        context={context}
        initialFocus={searchable ? searchInputRef : undefined}
        modal={false}
      >
        <StyledSelectContent
          ref={refs.setFloating}
          className={css('content', classnames?.content)}
          style={floatingStyles}
          $isOpen={isOpen}
          $maxHeight={maxHeight}
          {...getFloatingProps()}
        >
          {searchable && (
            <StyledSelectSearch className={css('search', classnames?.search)}>
              <StyledSelectSearchInput
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                onClick={(e) => e.stopPropagation()}
              />
            </StyledSelectSearch>
          )}
          {renderOptions()}
        </StyledSelectContent>
      </FloatingFocusManager>
    )

    if (portalRenderNode) {
      return createPortal(content, portalRenderNode)
    }

    return content
  }

  return (
    <StyledSelectContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
    >
      {label && (
        <StyledSelectLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledSelectLabel>
      )}
      <StyledSelectTrigger
        ref={refs.setReference}
        type="button"
        className={css('trigger', classnames?.trigger)}
        $state={state}
        $disabled={disabled}
        $isOpen={isOpen}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...getReferenceProps()}
      >
        {icon && (
          <StyledSelectIcon $state={state} $disabled={disabled}>
            {icon}
          </StyledSelectIcon>
        )}
        <StyledSelectValue $isPlaceholder={!selectedOption} $state={state} $disabled={disabled}>
          {selectedOption ? selectedOption.label : placeholder}
        </StyledSelectValue>
        <StyledSelectChevron $state={state} $disabled={disabled} $isOpen={isOpen}>
          <ChevronDown size={16} />
        </StyledSelectChevron>
      </StyledSelectTrigger>
      {renderContent()}
    </StyledSelectContainer>
  )
}
