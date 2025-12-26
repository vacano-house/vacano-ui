import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { AnimatedDots } from '../AnimatedDots'

describe('AnimatedDots', () => {
  it('renders with default size', () => {
    render(<AnimatedDots />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default accessible label', () => {
    render(<AnimatedDots />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading')
  })

  it('accepts custom aria-label for localization', () => {
    render(<AnimatedDots aria-label="Загрузка" />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Загрузка')
  })

  it('applies default class name', () => {
    render(<AnimatedDots />)

    expect(screen.getByRole('status')).toHaveClass('vacano_animated-dots_container')
  })

  it('applies custom className', () => {
    render(<AnimatedDots className="custom-class" />)

    const loader = screen.getByRole('status')
    expect(loader).toHaveClass('vacano_animated-dots_container')
    expect(loader).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    render(<AnimatedDots classnames={{ container: 'custom-container' }} />)

    expect(screen.getByRole('status')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    render(<AnimatedDots data-test-id="test-loader" />)

    expect(screen.getByRole('status')).toHaveAttribute('data-test-id', 'test-loader')
  })

  it('renders three dots', () => {
    render(<AnimatedDots />)

    const container = screen.getByRole('status')
    expect(container.children).toHaveLength(3)
  })
})
