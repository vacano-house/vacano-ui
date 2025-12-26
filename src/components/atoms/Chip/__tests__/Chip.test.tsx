import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Chip } from '../Chip'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('Chip', () => {
  it('renders children', () => {
    renderWithTheme(<Chip>Test content</Chip>)

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    renderWithTheme(<Chip>Content</Chip>)

    const text = screen.getByText('Content')
    expect(text).toHaveClass('vacano_chip_text')
    expect(text.parentElement).toHaveClass('vacano_chip_container')
  })

  it('applies custom className', () => {
    renderWithTheme(<Chip className="custom-class">Content</Chip>)

    const container = screen.getByText('Content').parentElement
    expect(container).toHaveClass('vacano_chip_container')
    expect(container).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    renderWithTheme(<Chip classnames={{ container: 'custom-container' }}>Content</Chip>)

    expect(screen.getByText('Content').parentElement).toHaveClass('custom-container')
  })

  it('applies classnames.text', () => {
    renderWithTheme(<Chip classnames={{ text: 'custom-text' }}>Content</Chip>)

    expect(screen.getByText('Content')).toHaveClass('custom-text')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<Chip data-test-id="test-chip">Content</Chip>)

    expect(screen.getByText('Content').parentElement).toHaveAttribute('data-test-id', 'test-chip')
  })

  it('renders with neutral status', () => {
    renderWithTheme(<Chip status="neutral">Neutral</Chip>)

    expect(screen.getByText('Neutral')).toBeInTheDocument()
  })

  it('renders with success status', () => {
    renderWithTheme(<Chip status="success">Success</Chip>)

    expect(screen.getByText('Success')).toBeInTheDocument()
  })

  it('renders with warning status', () => {
    renderWithTheme(<Chip status="warning">Warning</Chip>)

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('renders with error status', () => {
    renderWithTheme(<Chip status="error">Error</Chip>)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})
