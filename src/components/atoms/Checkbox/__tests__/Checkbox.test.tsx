import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Checkbox } from '../Checkbox'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('Checkbox', () => {
  it('renders without label', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders with label', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} label="Accept terms" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} label="Test" />)

    const container = screen.getByText('Test').closest('label')
    expect(container).toHaveClass('vacano_checkbox_container')
  })

  it('applies custom className', () => {
    renderWithTheme(
      <Checkbox checked={false} onChange={() => {}} className="custom-class" label="Test" />,
    )

    const container = screen.getByText('Test').closest('label')
    expect(container).toHaveClass('vacano_checkbox_container')
    expect(container).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    renderWithTheme(
      <Checkbox
        checked={false}
        onChange={() => {}}
        classnames={{ container: 'custom-container' }}
        label="Test"
      />,
    )

    expect(screen.getByText('Test').closest('label')).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} data-test-id="test-checkbox" />)

    expect(screen.getByRole('checkbox')).toHaveAttribute('data-test-id', 'test-checkbox')
  })

  it('is unchecked when checked prop is false', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} label="Test" />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('is checked when checked prop is true', () => {
    renderWithTheme(<Checkbox checked={true} onChange={() => {}} label="Test" />)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} disabled label="Test" />)

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('calls onChange handler when clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Checkbox checked={false} onChange={handleChange} label="Test" />)

    await user.click(screen.getByText('Test'))

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Checkbox checked={false} onChange={handleChange} disabled label="Test" />)

    // The container has pointer-events: none when disabled, so clicking won't trigger onChange
    const container = screen.getByText('Test').closest('label')!
    await user.click(container)

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('can be toggled by clicking the label', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Checkbox checked={false} onChange={handleChange} label="Click me" />)

    await user.click(screen.getByText('Click me'))

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders check icon when checked', () => {
    const { container } = renderWithTheme(
      <Checkbox checked={true} onChange={() => {}} label="Test" />,
    )

    const icon = container.querySelector('.vacano_checkbox_icon svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders minus icon when indeterminate', () => {
    const { container } = renderWithTheme(
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Test" />,
    )

    const icon = container.querySelector('.vacano_checkbox_icon svg')
    expect(icon).toBeInTheDocument()
  })

  it('hides icon when unchecked and not indeterminate', () => {
    const { container } = renderWithTheme(
      <Checkbox checked={false} onChange={() => {}} label="Test" />,
    )

    const iconWrapper = container.querySelector('.vacano_checkbox_icon')
    expect(iconWrapper).toHaveStyle({ opacity: '0' })
  })

  it('applies warning state styles', () => {
    renderWithTheme(
      <Checkbox checked={false} onChange={() => {}} state="warning" label="Warning" />,
    )

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('applies error state styles', () => {
    renderWithTheme(<Checkbox checked={false} onChange={() => {}} state="error" label="Error" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})
