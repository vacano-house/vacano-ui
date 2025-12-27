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
  type FloatingContext,
  type Placement,
} from '@floating-ui/react'

import { DEFAULT_MULTISELECT_OFFSET, DEFAULT_MULTISELECT_PROP_PLACEMENT } from './constants'
import type { MultiSelectOption, MultiSelectPlacement } from './types'

export type UseMultiSelectProps = {
  options: MultiSelectOption[]
  value: string[]
  onChange: (values: string[]) => void
  placement?: MultiSelectPlacement
  searchable?: boolean
  disabled?: boolean
}

export type UseMultiSelectReturn = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  selectedOptions: MultiSelectOption[]
  filteredOptions: MultiSelectOption[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  highlightedIndex: number | null
  context: FloatingContext
  refs: {
    setReference: (node: HTMLElement | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
  floatingStyles: React.CSSProperties
  getReferenceProps: () => Record<string, unknown>
  getFloatingProps: () => Record<string, unknown>
  getItemProps: (index: number) => Record<string, unknown>
  listRef: React.MutableRefObject<(HTMLElement | null)[]>
  handleToggle: (option: MultiSelectOption) => void
  handleRemove: (value: string, e: React.MouseEvent) => void
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  searchInputRef: React.RefObject<HTMLInputElement | null>
  isSelected: (value: string) => boolean
}

const getFloatingPlacement = (placement: MultiSelectPlacement): Placement => {
  return `${placement}-start`
}

export const useMultiSelect = ({
  options,
  value,
  onChange,
  placement = DEFAULT_MULTISELECT_PROP_PLACEMENT,
  searchable = false,
  disabled = false,
}: UseMultiSelectProps): UseMultiSelectReturn => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const listRef = useRef<(HTMLElement | null)[]>([])
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const selectedOptions = useMemo(
    () => options.filter((opt) => value.includes(opt.value)),
    [options, value],
  )

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery) {
      return options
    }

    const query = searchQuery.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, searchQuery, searchable])

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (disabled) {
        return
      }

      setIsOpen(open)

      if (!open) {
        setSearchQuery('')
        setHighlightedIndex(null)
      }
    },
    [disabled],
  )

  const floatingPlacement = useMemo(() => getFloatingPlacement(placement), [placement])

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: handleOpenChange,
    placement: floatingPlacement,
    middleware: [
      offset(DEFAULT_MULTISELECT_OFFSET),
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

  const isSelected = useCallback((optValue: string) => value.includes(optValue), [value])

  const handleToggle = useCallback(
    (option: MultiSelectOption) => {
      const isCurrentlySelected = value.includes(option.value)

      if (isCurrentlySelected) {
        onChange(value.filter((v) => v !== option.value))
      } else {
        onChange([...value, option.value])
      }
      // Do NOT close dropdown after selection (unlike single Select)
    },
    [value, onChange],
  )

  const handleRemove = useCallback(
    (valueToRemove: string, e: React.MouseEvent) => {
      e.stopPropagation() // prevent trigger click
      onChange(value.filter((v) => v !== valueToRemove))
    },
    [value, onChange],
  )

  const {
    getReferenceProps: getBaseReferenceProps,
    getFloatingProps,
    getItemProps,
  } = useInteractions([click, dismiss, role, listNavigation])

  const getReferenceProps = useCallback(() => {
    const baseProps = getBaseReferenceProps()
    const baseOnKeyDown = baseProps.onKeyDown as ((e: React.KeyboardEvent) => void) | undefined

    return {
      ...baseProps,
      onKeyDown: (e: React.KeyboardEvent) => {
        // Call the original handler first (handles arrow navigation)
        baseOnKeyDown?.(e)

        // Handle Enter for selection toggle
        if (e.key === 'Enter' && isOpen && highlightedIndex !== null) {
          e.preventDefault()
          const option = filteredOptions[highlightedIndex]

          if (option) {
            handleToggle(option)
          }
        }

        // Handle Backspace to remove last chip
        if (e.key === 'Backspace' && !searchable && value.length > 0) {
          e.preventDefault()
          onChange(value.slice(0, -1))
        }
      },
    }
  }, [
    getBaseReferenceProps,
    isOpen,
    highlightedIndex,
    filteredOptions,
    handleToggle,
    searchable,
    value,
    onChange,
  ])

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
          handleToggle(option)
        }
      }

      // Handle Backspace to remove last chip when search is empty
      if (e.key === 'Backspace' && searchQuery === '' && value.length > 0) {
        e.preventDefault()
        onChange(value.slice(0, -1))
      }
    },
    [highlightedIndex, filteredOptions, handleToggle, searchQuery, value, onChange],
  )

  return {
    isOpen,
    setIsOpen: handleOpenChange,
    selectedOptions,
    filteredOptions,
    searchQuery,
    setSearchQuery,
    highlightedIndex,
    context,
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
            handleToggle(option)
          }
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            const option = filteredOptions[index]

            if (option) {
              handleToggle(option)
            }
          }
        },
      }),
    listRef,
    handleToggle,
    handleRemove,
    handleSearchChange,
    handleSearchKeyDown,
    searchInputRef,
    isSelected,
  }
}
