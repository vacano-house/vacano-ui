import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { IconLucideActivity, IconLucideCheck, IconLucideX } from '../components'
import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'

describe('IconLucide', () => {
  describe('rendering', () => {
    it('renders SVG element', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon.tagName.toLowerCase()).toBe('svg')
    })

    it('renders different icons', () => {
      const { rerender } = render(<IconLucideCheck data-testid="icon" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()

      rerender(<IconLucideX data-testid="icon" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
  })

  describe('size prop', () => {
    it('uses default size when not specified', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', String(DEFAULT_ICON_LUCIDE_PROP_SIZE))
      expect(icon).toHaveAttribute('height', String(DEFAULT_ICON_LUCIDE_PROP_SIZE))
    })

    it('applies custom size', () => {
      render(<IconLucideActivity data-testid="icon" size={32} />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', '32')
      expect(icon).toHaveAttribute('height', '32')
    })

    it('applies small size', () => {
      render(<IconLucideActivity data-testid="icon" size={16} />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', '16')
      expect(icon).toHaveAttribute('height', '16')
    })

    it('applies large size', () => {
      render(<IconLucideActivity data-testid="icon" size={64} />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', '64')
      expect(icon).toHaveAttribute('height', '64')
    })
  })

  describe('className prop', () => {
    it('includes base class', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('vacano_icon-lucide_activity')
    })

    it('appends custom className', () => {
      render(<IconLucideActivity data-testid="icon" className="custom-class" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('vacano_icon-lucide_activity')
      expect(icon).toHaveClass('custom-class')
    })
  })

  describe('SVG attributes', () => {
    it('has correct viewBox', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('has stroke set to currentColor', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('stroke', 'currentColor')
    })

    it('has fill set to none', () => {
      render(<IconLucideActivity data-testid="icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('fill', 'none')
    })
  })

  describe('additional props', () => {
    it('passes data attributes', () => {
      render(<IconLucideActivity data-testid="icon" data-custom="value" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('data-custom', 'value')
    })

    it('passes aria attributes', () => {
      render(<IconLucideActivity data-testid="icon" aria-label="Activity icon" />)

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('aria-label', 'Activity icon')
    })
  })
})
