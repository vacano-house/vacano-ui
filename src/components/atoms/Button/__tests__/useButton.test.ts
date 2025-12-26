import { createElement } from 'react'

import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useButton } from '../useButton'

// Mock icon element for testing
const mockIcon = createElement('svg')

describe('useButton', () => {
  it('detects icon-only mode with icon', () => {
    const { result } = renderHook(() => useButton(mockIcon, undefined, undefined, false, undefined))

    expect(result.current.iconOnly).toBe(true)
  })

  it('does not detect icon-only when children are provided', () => {
    const { result } = renderHook(() => useButton(mockIcon, 'Text', undefined, false, undefined))

    expect(result.current.iconOnly).toBe(false)
  })

  it('does not detect icon-only when char is provided', () => {
    const { result } = renderHook(() => useButton(mockIcon, undefined, 'K', false, undefined))

    expect(result.current.iconOnly).toBe(false)
  })

  it('shows spinner when loading and icon-only', () => {
    const { result } = renderHook(() => useButton(mockIcon, undefined, undefined, true, undefined))

    expect(result.current.showSpinner).toBe(true)
    expect(result.current.showDots).toBe(false)
  })

  it('shows dots when loading with children', () => {
    const { result } = renderHook(() => useButton(undefined, 'Text', undefined, true, undefined))

    expect(result.current.showSpinner).toBe(false)
    expect(result.current.showDots).toBe(true)
  })

  it('shows dots when loading with char', () => {
    const { result } = renderHook(() => useButton(undefined, undefined, 'K', true, undefined))

    expect(result.current.showSpinner).toBe(false)
    expect(result.current.showDots).toBe(true)
  })
})
