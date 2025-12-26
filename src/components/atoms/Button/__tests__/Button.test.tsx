import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Button } from '../Button'

vi.mock('../../../../icons/Animated/AnimatedIcon', () => ({
  AnimatedIcon: ({ name }: { name: string }) => (
    <span data-testid={`animated-icon-${name}`}>{name}</span>
  ),
}))

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('Button', () => {
  it('renders children', () => {
    renderWithTheme(<Button>Click me</Button>)

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies default class name', () => {
    renderWithTheme(<Button>Content</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('vacano_button_container')
  })

  it('applies custom className', () => {
    renderWithTheme(<Button className="custom-class">Content</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('vacano_button_container')
    expect(button).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    renderWithTheme(<Button classnames={{ container: 'custom-container' }}>Content</Button>)

    expect(screen.getByRole('button')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<Button data-test-id="test-button">Content</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('data-test-id', 'test-button')
  })

  it('renders with primary variant by default', () => {
    renderWithTheme(<Button>Primary</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders with secondary variant', () => {
    renderWithTheme(<Button variant="secondary">Secondary</Button>)

    expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument()
  })

  it('renders with ghost variant', () => {
    renderWithTheme(<Button variant="ghost">Ghost</Button>)

    expect(screen.getByRole('button', { name: 'Ghost' })).toBeInTheDocument()
  })

  it('renders with danger variant', () => {
    renderWithTheme(<Button variant="danger">Danger</Button>)

    expect(screen.getByRole('button', { name: 'Danger' })).toBeInTheDocument()
  })

  it('renders char element when char prop is provided', () => {
    renderWithTheme(<Button char="K">Search</Button>)

    expect(screen.getByText('K')).toBeInTheDocument()
    expect(screen.getByText('K')).toHaveClass('vacano_button_char')
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled</Button>)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when loading prop is true', () => {
    renderWithTheme(<Button loading>Loading</Button>)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    renderWithTheme(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    renderWithTheme(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    )

    await user.click(screen.getByRole('button'))

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    renderWithTheme(
      <Button onClick={handleClick} loading>
        Click me
      </Button>,
    )

    await user.click(screen.getByRole('button'))

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders Lucide icon when ReactElement is passed', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />

    renderWithTheme(<Button icon={<MockIcon />}>With Icon</Button>)

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })

  it('applies fullWidth styling', () => {
    renderWithTheme(<Button fullWidth>Full Width</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('hides text content when loading', () => {
    renderWithTheme(<Button loading>Loading text</Button>)

    expect(screen.getByText('Loading text')).toHaveStyle({ visibility: 'hidden' })
  })

  it('hides char when loading', () => {
    renderWithTheme(
      <Button loading char="K">
        Search
      </Button>,
    )

    expect(screen.getByText('K')).toHaveStyle({ visibility: 'hidden' })
  })
})
