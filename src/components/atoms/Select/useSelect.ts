import { useCallback, useMemo, useRef, useState } from 'react'

import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
  type Placement,
} from '@floating-ui/react'

import { DEFAULT_SELECT_OFFSET, DEFAULT_SELECT_PROP_PLACEMENT } from './constants'
import type { SelectOption, SelectPlacement } from './types'

export type UseSelectProps = {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placement?: SelectPlacement
  searchable?: boolean
  disabled?: boolean
}

export type UseSelectReturn = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  selectedOption: SelectOption | undefined
  filteredOptions: SelectOption[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  highlightedIndex: number | null
  refs: {
    setReference: (node: HTMLElement | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
  floatingStyles: React.CSSProperties
  getReferenceProps: () => Record<string, unknown>
  getFloatingProps: () => Record<string, unknown>
  getItemProps: (index: number) => Record<string, unknown>
  listRef: React.MutableRefObject<(HTMLElement | null)[]>
  handleSelect: (option: SelectOption) => void
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  searchInputRef: React.RefObject<HTMLInputElement | null>
}

const getFloatingPlacement = (placement: SelectPlacement): Placement => {
  return `${placement}-start`
}

export const useSelect = ({
  options,
  value,
  onChange,
  placement = DEFAULT_SELECT_PROP_PLACEMENT,
  searchable = false,
  disabled = false,
}: UseSelectProps): UseSelectReturn => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const listRef = useRef<(HTMLElement | null)[]>([])
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const selectedOption = useMemo(() => options.find((opt) => opt.value === value), [options, value])

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery) {
      return options
    }

    const query = searchQuery.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, searchQuery, searchable])

  const labelsRef = useRef(options.map((opt) => opt.label))
  labelsRef.current = filteredOptions.map((opt) => opt.label)

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (disabled) {
        return
      }

      setIsOpen(open)

      if (!open) {
        setSearchQuery('')
        setHighlightedIndex(null)
      } else if (searchable) {
        setTimeout(() => {
          searchInputRef.current?.focus()
        }, 0)
      }
    },
    [disabled, searchable],
  )

  const floatingPlacement = useMemo(() => getFloatingPlacement(placement), [placement])

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: handleOpenChange,
    placement: floatingPlacement,
    middleware: [
      offset(DEFAULT_SELECT_OFFSET),
      flip(),
      shift({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context, { enabled: !disabled })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex: highlightedIndex,
    onNavigate: setHighlightedIndex,
    virtual: true,
    loop: true,
  })

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex: highlightedIndex,
    onMatch: searchable ? undefined : setHighlightedIndex,
    enabled: !searchable,
  })

  const handleSelect = useCallback(
    (option: SelectOption) => {
      onChange?.(option.value)
      setIsOpen(false)
      setSearchQuery('')
      setHighlightedIndex(null)
    },
    [onChange],
  )

  const {
    getReferenceProps: getBaseReferenceProps,
    getFloatingProps,
    getItemProps,
  } = useInteractions([click, dismiss, role, listNavigation, typeahead])

  const getReferenceProps = useCallback(() => {
    const baseProps = getBaseReferenceProps()
    const baseOnKeyDown = baseProps.onKeyDown as ((e: React.KeyboardEvent) => void) | undefined

    return {
      ...baseProps,
      onKeyDown: (e: React.KeyboardEvent) => {
        // Call the original handler first (handles arrow navigation)
        baseOnKeyDown?.(e)

        // Then handle Enter for selection
        if (e.key === 'Enter' && isOpen && highlightedIndex !== null) {
          e.preventDefault()
          const option = filteredOptions[highlightedIndex]
          if (option) {
            handleSelect(option)
          }
        }
      },
    }
  }, [getBaseReferenceProps, isOpen, highlightedIndex, filteredOptions, handleSelect])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setHighlightedIndex(0)
  }, [])

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && highlightedIndex !== null) {
        e.preventDefault()
        const option = filteredOptions[highlightedIndex]
        if (option) {
          handleSelect(option)
        }
      }
    },
    [highlightedIndex, filteredOptions, handleSelect],
  )

  return {
    isOpen,
    setIsOpen: handleOpenChange,
    selectedOption,
    filteredOptions,
    searchQuery,
    setSearchQuery,
    highlightedIndex,
    refs: {
      setReference: refs.setReference,
      setFloating: refs.setFloating,
    },
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    getItemProps: (index: number) =>
      getItemProps({
        onClick: () => {
          const option = filteredOptions[index]
          if (option) {
            handleSelect(option)
          }
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            const option = filteredOptions[index]
            if (option) {
              handleSelect(option)
            }
          }
        },
      }),
    listRef,
    handleSelect,
    handleSearchChange,
    handleSearchKeyDown,
    searchInputRef,
  }
}
