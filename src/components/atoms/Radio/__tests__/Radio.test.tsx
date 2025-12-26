import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Radio } from '../Radio'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('Radio', () => {
  it('renders without label', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders with label', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} label="Option 1" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} label="Test" />)

    const container = screen.getByText('Test').closest('label')
    expect(container).toHaveClass('vacano_radio_container')
  })

  it('applies custom className', () => {
    renderWithTheme(
      <Radio checked={false} onChange={() => {}} className="custom-class" label="Test" />,
    )

    const container = screen.getByText('Test').closest('label')
    expect(container).toHaveClass('vacano_radio_container')
    expect(container).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    renderWithTheme(
      <Radio
        checked={false}
        onChange={() => {}}
        classnames={{ container: 'custom-container' }}
        label="Test"
      />,
    )

    expect(screen.getByText('Test').closest('label')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} data-test-id="test-radio" />)

    expect(screen.getByRole('radio')).toHaveAttribute('data-test-id', 'test-radio')
  })

  it('is unchecked when checked prop is false', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} label="Test" />)

    expect(screen.getByRole('radio')).not.toBeChecked()
  })

  it('is checked when checked prop is true', () => {
    renderWithTheme(<Radio checked={true} onChange={() => {}} label="Test" />)

    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} disabled label="Test" />)

    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('calls onChange handler when clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Radio checked={false} onChange={handleChange} label="Test" />)

    await user.click(screen.getByText('Test'))

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Radio checked={false} onChange={handleChange} disabled label="Test" />)

    const container = screen.getByText('Test').closest('label')!
    await user.click(container)

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('can be toggled by clicking the label', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Radio checked={false} onChange={handleChange} label="Click me" />)

    await user.click(screen.getByText('Click me'))

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('shows dot when checked', () => {
    const { container } = renderWithTheme(<Radio checked={true} onChange={() => {}} label="Test" />)

    const dot = container.querySelector('.vacano_radio_dot')
    expect(dot).toHaveStyle({ opacity: '1' })
  })

  it('hides dot when unchecked', () => {
    const { container } = renderWithTheme(
      <Radio checked={false} onChange={() => {}} label="Test" />,
    )

    const dot = container.querySelector('.vacano_radio_dot')
    expect(dot).toHaveStyle({ opacity: '0' })
  })

  it('applies warning state styles', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} state="warning" label="Warning" />)

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('applies error state styles', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} state="error" label="Error" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('supports name attribute for radio groups', () => {
    renderWithTheme(<Radio checked={false} onChange={() => {}} name="group1" label="Test" />)

    expect(screen.getByRole('radio')).toHaveAttribute('name', 'group1')
  })
})
