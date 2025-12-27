import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDropdown } from '../useDropdown'

describe('useDropdown', () => {
  describe('uncontrolled mode', () => {
    it('starts closed by default', () => {
      const { result } = renderHook(() => useDropdown())

      expect(result.current.isOpen).toBe(false)
    })

    it('can open via setIsOpen', () => {
      const { result } = renderHook(() => useDropdown())

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(result.current.isOpen).toBe(true)
    })

    it('can close via setIsOpen', () => {
      const { result } = renderHook(() => useDropdown())

      act(() => {
        result.current.setIsOpen(true)
      })

      act(() => {
        result.current.setIsOpen(false)
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('calls onOpenChange callback when state changes', () => {
      const handleOpenChange = vi.fn()
      const { result } = renderHook(() =>
        useDropdown('bottom', 'start', 4, undefined, handleOpenChange),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })
  })

  describe('controlled mode', () => {
    it('uses controlled open value', () => {
      const { result } = renderHook(() => useDropdown('bottom', 'start', 4, true))

      expect(result.current.isOpen).toBe(true)
    })

    it('calls onOpenChange in controlled mode', () => {
      const handleOpenChange = vi.fn()
      const { result } = renderHook(() =>
        useDropdown('bottom', 'start', 4, false, handleOpenChange),
      )

      act(() => {
        result.current.setIsOpen(true)
      })

      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })
  })

  describe('refs', () => {
    it('provides setReference function', () => {
      const { result } = renderHook(() => useDropdown())

      expect(typeof result.current.refs.setReference).toBe('function')
    })

    it('provides setFloating function', () => {
      const { result } = renderHook(() => useDropdown())

      expect(typeof result.current.refs.setFloating).toBe('function')
    })
  })

  describe('interaction props', () => {
    it('provides getReferenceProps function', () => {
      const { result } = renderHook(() => useDropdown())

      expect(typeof result.current.getReferenceProps).toBe('function')
    })

    it('provides getFloatingProps function', () => {
      const { result } = renderHook(() => useDropdown())

      expect(typeof result.current.getFloatingProps).toBe('function')
    })
  })

  describe('floatingStyles', () => {
    it('provides floatingStyles object', () => {
      const { result } = renderHook(() => useDropdown())

      expect(result.current.floatingStyles).toBeDefined()
      expect(typeof result.current.floatingStyles).toBe('object')
    })
  })
})
