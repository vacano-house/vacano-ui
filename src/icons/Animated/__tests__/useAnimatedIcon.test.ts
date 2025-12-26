import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { icons } from '../icons'
import { useAnimatedIcon } from '../useAnimatedIcon'

vi.mock('@lordicon/react', () => ({
  Player: vi.fn(),
}))

describe('useAnimatedIcon', () => {
  it('returns icon for given name', () => {
    const { result } = renderHook(() => useAnimatedIcon('animated-bookmark', false))

    expect(result.current.icon).toBe(icons['animated-bookmark'])
  })

  it('returns playerRef', () => {
    const { result } = renderHook(() => useAnimatedIcon('animated-bookmark', false))

    expect(result.current.playerRef).toBeDefined()
    expect(result.current.playerRef.current).toBeNull()
  })

  it('returns handleMouseEnter function', () => {
    const { result } = renderHook(() => useAnimatedIcon('animated-bookmark', false))

    expect(typeof result.current.handleMouseEnter).toBe('function')
  })

  it('handleMouseEnter does not throw when disableOnHover is false', () => {
    const { result } = renderHook(() => useAnimatedIcon('animated-bookmark', false))

    expect(() => result.current.handleMouseEnter()).not.toThrow()
  })

  it('handleMouseEnter does not throw when disableOnHover is true', () => {
    const { result } = renderHook(() => useAnimatedIcon('animated-bookmark', true))

    expect(() => result.current.handleMouseEnter()).not.toThrow()
  })

  it('works with different icon names', () => {
    const { result: result1 } = renderHook(() => useAnimatedIcon('animated-heart', false))
    const { result: result2 } = renderHook(() => useAnimatedIcon('animated-settings', false))

    expect(result1.current.icon).toBe(icons['animated-heart'])
    expect(result2.current.icon).toBe(icons['animated-settings'])
  })
})
