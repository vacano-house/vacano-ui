import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Loader } from '../Loader'

describe('Loader', () => {
  it('renders with default size', () => {
    render(<Loader />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default accessible label', () => {
    render(<Loader />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading')
  })

  it('accepts custom aria-label for localization', () => {
    render(<Loader aria-label="Загрузка" />)

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Загрузка')
  })

  it('applies default class name', () => {
    render(<Loader />)

    expect(screen.getByRole('status')).toHaveClass('vacano_loader_container')
  })

  it('applies custom className', () => {
    render(<Loader className="custom-class" />)

    const loader = screen.getByRole('status')
    expect(loader).toHaveClass('vacano_loader_container')
    expect(loader).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    render(<Loader classnames={{ container: 'custom-container' }} />)

    expect(screen.getByRole('status')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    render(<Loader data-test-id="test-loader" />)

    expect(screen.getByRole('status')).toHaveAttribute('data-test-id', 'test-loader')
  })

  it('renders three dots', () => {
    render(<Loader />)

    const container = screen.getByRole('status')
    expect(container.children).toHaveLength(3)
  })
})
