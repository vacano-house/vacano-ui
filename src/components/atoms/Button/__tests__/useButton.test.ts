import { createElement } from 'react'

import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useButton } from '../useButton'

describe('useButton', () => {
  it('detects animated icon', () => {
    const { result } = renderHook(() =>
      useButton('animated-settings', undefined, 'Text', undefined, false, false, undefined),
    )

    expect(result.current.isAnimatedIcon).toBe(true)
    expect(result.current.isLucideIcon).toBe(false)
  })

  it('detects Lucide icon (ReactElement)', () => {
    const mockElement = createElement('svg')

    const { result } = renderHook(() =>
      useButton(mockElement as never, undefined, 'Text', undefined, false, false, undefined),
    )

    expect(result.current.isAnimatedIcon).toBe(false)
    expect(result.current.isLucideIcon).toBe(true)
  })

  it('detects icon-only mode', () => {
    const mockElement = createElement('svg')

    const { result } = renderHook(() =>
      useButton(mockElement as never, undefined, undefined, undefined, false, false, undefined),
    )

    expect(result.current.iconOnly).toBe(true)
  })

  it('does not detect icon-only when children are provided', () => {
    const mockElement = createElement('svg')

    const { result } = renderHook(() =>
      useButton(mockElement as never, undefined, 'Text', undefined, false, false, undefined),
    )

    expect(result.current.iconOnly).toBe(false)
  })

  it('does not detect icon-only when char is provided', () => {
    const mockElement = createElement('svg')

    const { result } = renderHook(() =>
      useButton(mockElement as never, undefined, undefined, 'K', false, false, undefined),
    )

    expect(result.current.iconOnly).toBe(false)
  })

  it('shows spinner when loading and icon-only', () => {
    const mockElement = createElement('svg')

    const { result } = renderHook(() =>
      useButton(mockElement as never, undefined, undefined, undefined, true, false, undefined),
    )

    expect(result.current.showSpinner).toBe(true)
    expect(result.current.showDots).toBe(false)
  })

  it('shows dots when loading with children', () => {
    const { result } = renderHook(() =>
      useButton(undefined, undefined, 'Text', undefined, true, false, undefined),
    )

    expect(result.current.showSpinner).toBe(false)
    expect(result.current.showDots).toBe(true)
  })

  it('shows dots when loading with char', () => {
    const { result } = renderHook(() =>
      useButton(undefined, undefined, undefined, 'K', true, false, undefined),
    )

    expect(result.current.showSpinner).toBe(false)
    expect(result.current.showDots).toBe(true)
  })
})
