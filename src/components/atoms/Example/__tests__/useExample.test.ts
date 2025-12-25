import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useExample } from '../useExample'

describe('useExample', () => {
  describe('fontSize', () => {
    it('returns 10px for size "sm"', () => {
      const { result } = renderHook(() => useExample('sm', 'one'))

      expect(result.current.fontSize).toBe('10px')
    })

    it('returns 14px for size "md"', () => {
      const { result } = renderHook(() => useExample('md', 'one'))

      expect(result.current.fontSize).toBe('14px')
    })

    it('returns 16px for size "lg"', () => {
      const { result } = renderHook(() => useExample('lg', 'one'))

      expect(result.current.fontSize).toBe('16px')
    })
  })

  describe('handleClick', () => {
    it('calls alert with variant "one"', () => {
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
      const { result } = renderHook(() => useExample('md', 'one'))

      result.current.handleClick()

      expect(alertSpy).toHaveBeenCalledWith('one')
      alertSpy.mockRestore()
    })

    it('calls alert with variant "two"', () => {
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
      const { result } = renderHook(() => useExample('md', 'two'))

      result.current.handleClick()

      expect(alertSpy).toHaveBeenCalledWith('two')
      alertSpy.mockRestore()
    })
  })
})
