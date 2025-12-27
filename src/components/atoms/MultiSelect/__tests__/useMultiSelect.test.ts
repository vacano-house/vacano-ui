import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { MultiSelectOption } from '../types'
import { useMultiSelect } from '../useMultiSelect'

const sampleOptions: MultiSelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

describe('useMultiSelect', () => {
  describe('initial state', () => {
    it('starts with isOpen false', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(result.current.isOpen).toBe(false)
    })

    it('starts with no selected options when value is empty', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(result.current.selectedOptions).toEqual([])
    })

    it('has selected options when values are provided', () => {
      const { result } = renderHook(() =>
        useMultiSelect({
          options: sampleOptions,
          value: ['banana', 'cherry'],
          onChange: vi.fn(),
        }),
      )

      expect(result.current.selectedOptions).toEqual([
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
      ])
    })

    it('starts with empty search query', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

      expect(result.current.searchQuery).toBe('')
    })

    it('returns all options when not searching', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(result.current.filteredOptions).toEqual(sampleOptions)
    })
  })

  describe('setIsOpen', () => {
    it('opens dropdown', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(result.current.isOpen).toBe(true)
    })

    it('closes dropdown', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setIsOpen(false)
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('clears search query when closing', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

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
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), disabled: true }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(result.current.isOpen).toBe(false)
    })
  })

  describe('filtering', () => {
    it('filters options by search query', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('ban')
      })

      expect(result.current.filteredOptions).toEqual([{ label: 'Banana', value: 'banana' }])
    })

    it('is case insensitive', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('BAN')
      })

      expect(result.current.filteredOptions).toEqual([{ label: 'Banana', value: 'banana' }])
    })

    it('returns empty array when no matches', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setSearchQuery('xyz')
      })

      expect(result.current.filteredOptions).toEqual([])
    })

    it('does not filter when not searchable', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: false }),
      )

      expect(result.current.filteredOptions).toEqual(sampleOptions)
    })
  })

  describe('handleToggle', () => {
    it('adds value when not selected', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.handleToggle({ label: 'Banana', value: 'banana' })
      })

      expect(onChange).toHaveBeenCalledWith(['banana'])
    })

    it('removes value when already selected', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['banana'], onChange }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.handleToggle({ label: 'Banana', value: 'banana' })
      })

      expect(onChange).toHaveBeenCalledWith([])
    })

    it('preserves other selected values when adding', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['apple'], onChange }),
      )

      act(() => {
        result.current.handleToggle({ label: 'Banana', value: 'banana' })
      })

      expect(onChange).toHaveBeenCalledWith(['apple', 'banana'])
    })

    it('preserves other selected values when removing', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['apple', 'banana', 'cherry'], onChange }),
      )

      act(() => {
        result.current.handleToggle({ label: 'Banana', value: 'banana' })
      })

      expect(onChange).toHaveBeenCalledWith(['apple', 'cherry'])
    })

    it('does NOT close dropdown after selection', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.handleToggle({ label: 'Banana', value: 'banana' })
      })

      expect(result.current.isOpen).toBe(true)
    })
  })

  describe('handleRemove', () => {
    it('removes value from selection', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['apple', 'banana'], onChange }),
      )

      const mockEvent = { stopPropagation: vi.fn() } as unknown as React.MouseEvent

      act(() => {
        result.current.handleRemove('banana', mockEvent)
      })

      expect(onChange).toHaveBeenCalledWith(['apple'])
    })

    it('calls stopPropagation on event', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['banana'], onChange }),
      )

      const mockEvent = { stopPropagation: vi.fn() } as unknown as React.MouseEvent

      act(() => {
        result.current.handleRemove('banana', mockEvent)
      })

      expect(mockEvent.stopPropagation).toHaveBeenCalled()
    })
  })

  describe('isSelected', () => {
    it('returns true for selected value', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['banana'], onChange: vi.fn() }),
      )

      expect(result.current.isSelected('banana')).toBe(true)
    })

    it('returns false for unselected value', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: ['banana'], onChange: vi.fn() }),
      )

      expect(result.current.isSelected('apple')).toBe(false)
    })
  })

  describe('handleSearchChange', () => {
    it('updates search query', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

      act(() => {
        result.current.handleSearchChange({
          target: { value: 'apple' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.searchQuery).toBe('apple')
    })

    it('resets highlighted index to 0', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn(), searchable: true }),
      )

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
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(typeof result.current.refs.setReference).toBe('function')
    })

    it('provides setFloating function', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(typeof result.current.refs.setFloating).toBe('function')
    })
  })

  describe('interaction props', () => {
    it('provides getReferenceProps function', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(typeof result.current.getReferenceProps).toBe('function')
    })

    it('provides getFloatingProps function', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(typeof result.current.getFloatingProps).toBe('function')
    })

    it('provides getItemProps function', () => {
      const { result } = renderHook(() =>
        useMultiSelect({ options: sampleOptions, value: [], onChange: vi.fn() }),
      )

      expect(typeof result.current.getItemProps).toBe('function')
    })
  })
})
