import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { SelectOption } from '../types'
import { useSelect } from '../useSelect'

const sampleOptions: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

describe('useSelect', () => {
  describe('initial state', () => {
    it('starts with isOpen false', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(result.current.isOpen).toBe(false)
    })

    it('starts with no selected option when value is undefined', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(result.current.selectedOption).toBeUndefined()
    })

    it('has selected option when value is provided', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, value: 'banana' }))

      expect(result.current.selectedOption).toEqual({ label: 'Banana', value: 'banana' })
    })

    it('starts with empty search query', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      expect(result.current.searchQuery).toBe('')
    })

    it('returns all options when not searching', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(result.current.filteredOptions).toEqual(sampleOptions)
    })
  })

  describe('setIsOpen', () => {
    it('opens dropdown', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(result.current.isOpen).toBe(true)
    })

    it('closes dropdown', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setIsOpen(false)
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('clears search query when closing', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('apple')
      })

      act(() => {
        result.current.setIsOpen(false)
      })

      expect(result.current.searchQuery).toBe('')
    })

    it('does not open when disabled', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, disabled: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(result.current.isOpen).toBe(false)
    })
  })

  describe('filtering', () => {
    it('filters options by search query', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('ban')
      })

      expect(result.current.filteredOptions).toEqual([{ label: 'Banana', value: 'banana' }])
    })

    it('is case insensitive', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('BAN')
      })

      expect(result.current.filteredOptions).toEqual([{ label: 'Banana', value: 'banana' }])
    })

    it('returns empty array when no matches', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('xyz')
      })

      expect(result.current.filteredOptions).toEqual([])
    })

    it('does not filter when not searchable', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: false }))

      expect(result.current.filteredOptions).toEqual(sampleOptions)
    })
  })

  describe('handleSelect', () => {
    it('calls onChange with selected value', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() => useSelect({ options: sampleOptions, onChange }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.handleSelect({ label: 'Banana', value: 'banana' })
      })

      expect(onChange).toHaveBeenCalledWith('banana')
    })

    it('closes dropdown after selection', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.handleSelect({ label: 'Banana', value: 'banana' })
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('clears search query after selection', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('ban')
      })

      act(() => {
        result.current.handleSelect({ label: 'Banana', value: 'banana' })
      })

      expect(result.current.searchQuery).toBe('')
    })
  })

  describe('handleSearchChange', () => {
    it('updates search query', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.handleSearchChange({
          target: { value: 'apple' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.searchQuery).toBe('apple')
    })

    it('resets highlighted index to 0', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions, searchable: true }))

      act(() => {
        result.current.handleSearchChange({
          target: { value: 'a' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.highlightedIndex).toBe(0)
    })
  })

  describe('refs', () => {
    it('provides setReference function', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(typeof result.current.refs.setReference).toBe('function')
    })

    it('provides setFloating function', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(typeof result.current.refs.setFloating).toBe('function')
    })
  })

  describe('interaction props', () => {
    it('provides getReferenceProps function', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(typeof result.current.getReferenceProps).toBe('function')
    })

    it('provides getFloatingProps function', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(typeof result.current.getFloatingProps).toBe('function')
    })

    it('provides getItemProps function', () => {
      const { result } = renderHook(() => useSelect({ options: sampleOptions }))

      expect(typeof result.current.getItemProps).toBe('function')
    })
  })
})
