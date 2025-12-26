import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Spinner } from '../Spinner'

describe('Spinner', () => {
  it('renders with default size', () => {
    render(<Spinner />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default accessible label', () => {
    render(<Spinner />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading')
  })

  it('accepts custom aria-label for localization', () => {
    render(<Spinner aria-label="Загрузка" />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Загрузка')
  })

  it('applies default class name', () => {
    render(<Spinner />)

    expect(screen.getByRole('status')).toHaveClass('vacano_spinner_container')
  })

  it('applies custom className', () => {
    render(<Spinner className="custom-class" />)

    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('vacano_spinner_container')
    expect(spinner).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    render(<Spinner classnames={{ container: 'custom-container' }} />)

    expect(screen.getByRole('status')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    render(<Spinner data-test-id="test-spinner" />)

    expect(screen.getByRole('status')).toHaveAttribute('data-test-id', 'test-spinner')
  })

  it('renders with size 16', () => {
    const { container } = render(<Spinner size={16} />)

    expect(container.firstChild).toHaveStyle({ width: '16px' })
  })

  it('renders with default size 24', () => {
    const { container } = render(<Spinner />)

    expect(container.firstChild).toHaveStyle({ width: '24px' })
  })

  it('renders with size 32', () => {
    const { container } = render(<Spinner size={32} />)

    expect(container.firstChild).toHaveStyle({ width: '32px' })
  })

  it('renders with size 48', () => {
    const { container } = render(<Spinner size={48} />)

    expect(container.firstChild).toHaveStyle({ width: '48px' })
  })
})
