import { useRef } from 'react'
import { createPortal } from 'react-dom'

import { FloatingFocusManager } from '@floating-ui/react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { Check, ChevronDown, X } from '../../../icons/Lucide'
import { classNameGetter } from '../../../lib/utils'
import {
  DEFAULT_MULTISELECT_OPTION_HEIGHT,
  DEFAULT_MULTISELECT_PROP_EMPTY_MESSAGE,
  DEFAULT_MULTISELECT_PROP_MAX_HEIGHT,
  DEFAULT_MULTISELECT_PROP_PLACEHOLDER,
  DEFAULT_MULTISELECT_PROP_PLACEMENT,
  DEFAULT_MULTISELECT_PROP_SEARCH_PLACEHOLDER,
} from './constants'
import {
  StyledMultiSelectChevron,
  StyledMultiSelectChip,
  StyledMultiSelectChipLabel,
  StyledMultiSelectChipRemove,
  StyledMultiSelectChipsContainer,
  StyledMultiSelectContainer,
  StyledMultiSelectContent,
  StyledMultiSelectEmpty,
  StyledMultiSelectIcon,
  StyledMultiSelectLabel,
  StyledMultiSelectList,
  StyledMultiSelectOption,
  StyledMultiSelectOptionCheck,
  StyledMultiSelectOptionLabel,
  StyledMultiSelectPlaceholder,
  StyledMultiSelectSearch,
  StyledMultiSelectSearchInput,
  StyledMultiSelectTrigger,
} from './styled'
import type { MultiSelectProps } from './types'
import { useMultiSelect } from './useMultiSelect'

const css = classNameGetter('multiselect')

export const MultiSelect = ({
  options,
  value,
  onChange,
  placeholder = DEFAULT_MULTISELECT_PROP_PLACEHOLDER,
  searchPlaceholder = DEFAULT_MULTISELECT_PROP_SEARCH_PLACEHOLDER,
  emptyMessage = DEFAULT_MULTISELECT_PROP_EMPTY_MESSAGE,
  label,
  icon,
  state,
  disabled,
  fullWidth,
  placement = DEFAULT_MULTISELECT_PROP_PLACEMENT,
  maxHeight = DEFAULT_MULTISELECT_PROP_MAX_HEIGHT,
  virtualized,
  searchable,
  portalRenderNode,
  className,
  classnames,
  ...rest
}: MultiSelectProps) => {
  const listRef = useRef<HTMLDivElement>(null)

  const {
    isOpen,
    selectedOptions,
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
    handleRemove,
    searchInputRef,
    highlightedIndex,
    isSelected,
  } = useMultiSelect({
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
    estimateSize: () => DEFAULT_MULTISELECT_OPTION_HEIGHT,
    overscan: 5,
    enabled: virtualized,
  })

  const renderOptions = () => {
    if (filteredOptions.length === 0) {
      return (
        <StyledMultiSelectEmpty className={css('empty', classnames?.empty)}>
          {emptyMessage}
        </StyledMultiSelectEmpty>
      )
    }

    if (virtualized) {
      return (
        <StyledMultiSelectList
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

              const selected = isSelected(option.value)

              return (
                <StyledMultiSelectOption
                  key={option.value}
                  ref={(node) => {
                    itemsRef.current[virtualItem.index] = node
                  }}
                  className={css('option', classnames?.option)}
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
                  <StyledMultiSelectOptionCheck $isSelected={selected}>
                    <Check size={16} />
                  </StyledMultiSelectOptionCheck>
                  <StyledMultiSelectOptionLabel>{option.label}</StyledMultiSelectOptionLabel>
                </StyledMultiSelectOption>
              )
            })}
          </div>
        </StyledMultiSelectList>
      )
    }

    return (
      <StyledMultiSelectList
        ref={listRef}
        className={css('list', classnames?.list)}
        style={{ maxHeight: listMaxHeight }}
      >
        {filteredOptions.map((option, index) => {
          const selected = isSelected(option.value)

          return (
            <StyledMultiSelectOption
              key={option.value}
              ref={(node) => {
                itemsRef.current[index] = node
              }}
              className={css('option', classnames?.option)}
              $isHighlighted={highlightedIndex === index}
              {...getItemProps(index)}
            >
              <StyledMultiSelectOptionCheck $isSelected={selected}>
                <Check size={16} />
              </StyledMultiSelectOptionCheck>
              <StyledMultiSelectOptionLabel>{option.label}</StyledMultiSelectOptionLabel>
            </StyledMultiSelectOption>
          )
        })}
      </StyledMultiSelectList>
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
        <StyledMultiSelectContent
          ref={refs.setFloating}
          className={css('content', classnames?.content)}
          style={floatingStyles}
          $isOpen={isOpen}
          $maxHeight={maxHeight}
          {...getFloatingProps()}
        >
          {searchable && (
            <StyledMultiSelectSearch className={css('search', classnames?.search)}>
              <StyledMultiSelectSearchInput
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                onClick={(e) => e.stopPropagation()}
              />
            </StyledMultiSelectSearch>
          )}
          {renderOptions()}
        </StyledMultiSelectContent>
      </FloatingFocusManager>
    )

    if (portalRenderNode) {
      return createPortal(content, portalRenderNode)
    }

    return content
  }

  const renderChips = () => {
    if (selectedOptions.length === 0) {
      return (
        <StyledMultiSelectPlaceholder $disabled={disabled}>
          {placeholder}
        </StyledMultiSelectPlaceholder>
      )
    }

    return selectedOptions.map((option) => (
      <StyledMultiSelectChip
        key={option.value}
        className={css('chip', classnames?.chip)}
        $state={state}
        $disabled={disabled}
      >
        <StyledMultiSelectChipLabel>{option.label}</StyledMultiSelectChipLabel>
        <StyledMultiSelectChipRemove
          role="button"
          tabIndex={disabled ? -1 : 0}
          className={css('chip-remove', classnames?.chipRemove)}
          $state={state}
          $disabled={disabled}
          onClick={(e) => !disabled && handleRemove(option.value, e)}
          onKeyDown={(e) => {
            if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault()
              handleRemove(option.value, e as unknown as React.MouseEvent)
            }
          }}
          aria-label={`Remove ${option.label}`}
        >
          <X size={12} />
        </StyledMultiSelectChipRemove>
      </StyledMultiSelectChip>
    ))
  }

  return (
    <StyledMultiSelectContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
    >
      {label && (
        <StyledMultiSelectLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledMultiSelectLabel>
      )}
      <StyledMultiSelectTrigger
        ref={refs.setReference}
        type="button"
        className={css('trigger', classnames?.trigger)}
        $state={state}
        $disabled={disabled}
        $isOpen={isOpen}
        $hasValue={selectedOptions.length > 0}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...getReferenceProps()}
      >
        {icon && (
          <StyledMultiSelectIcon $state={state} $disabled={disabled}>
            {icon}
          </StyledMultiSelectIcon>
        )}
        <StyledMultiSelectChipsContainer className={css('chips', classnames?.chips)}>
          {renderChips()}
        </StyledMultiSelectChipsContainer>
        <StyledMultiSelectChevron $state={state} $disabled={disabled} $isOpen={isOpen}>
          <ChevronDown size={16} />
        </StyledMultiSelectChevron>
      </StyledMultiSelectTrigger>
      {renderContent()}
    </StyledMultiSelectContainer>
  )
}
