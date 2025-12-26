import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Search } from '../../../../icons/Lucide'
import { ThemeProvider } from '../../../../theme'
import { Input } from '../Input'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('Input', () => {
  it('renders input element', () => {
    renderWithTheme(<Input value="" onChange={() => {}} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with label', () => {
    renderWithTheme(<Input value="" onChange={() => {}} label="Email" />)

    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(<Input value="" onChange={() => {}} />)

    expect(container.querySelector('.vacano_input_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Input value="" onChange={() => {}} className="custom-class" />,
    )

    expect(container.querySelector('.vacano_input_container')).toHaveClass('custom-class')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<Input value="" onChange={() => {}} data-test-id="test-input" />)

    expect(screen.getByRole('textbox')).toHaveAttribute('data-test-id', 'test-input')
  })

  it('displays value', () => {
    renderWithTheme(<Input value="test value" onChange={() => {}} />)

    expect(screen.getByRole('textbox')).toHaveValue('test value')
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<Input value="" onChange={handleChange} />)

    await user.type(screen.getByRole('textbox'), 'a')

    expect(handleChange).toHaveBeenCalled()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Input value="" onChange={() => {}} disabled />)

    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renders with placeholder', () => {
    renderWithTheme(<Input value="" onChange={() => {}} placeholder="Enter text" />)

    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders icon when provided', () => {
    const { container } = renderWithTheme(
      <Input value="" onChange={() => {}} icon={<Search size={16} />} />,
    )

    expect(container.querySelector('.vacano_input_icon')).toBeInTheDocument()
  })

  it('renders password toggle for password type', () => {
    const { container } = renderWithTheme(<Input value="" onChange={() => {}} type="password" />)

    expect(container.querySelector('.vacano_input_toggle')).toBeInTheDocument()
  })

  it('toggles password visibility on mouse down/up', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Input value="secret" onChange={() => {}} type="password" />)

    const input = screen.getByDisplayValue('secret')
    expect(input).toHaveAttribute('type', 'password')

    const toggle = screen.getByRole('button')
    await user.pointer({ keys: '[MouseLeft>]', target: toggle })

    expect(input).toHaveAttribute('type', 'text')

    await user.pointer({ keys: '[/MouseLeft]', target: toggle })

    expect(input).toHaveAttribute('type', 'password')
  })

  it('applies fullWidth style', () => {
    const { container } = renderWithTheme(<Input value="" onChange={() => {}} fullWidth />)

    expect(container.querySelector('.vacano_input_container')).toHaveStyle({ width: '100%' })
  })

  it('applies warning state', () => {
    renderWithTheme(<Input value="" onChange={() => {}} state="warning" label="Warning" />)

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('applies error state', () => {
    renderWithTheme(<Input value="" onChange={() => {}} state="error" label="Error" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('supports number type', () => {
    renderWithTheme(<Input value="123" onChange={() => {}} type="number" />)

    expect(screen.getByRole('spinbutton')).toHaveValue(123)
  })

  it('supports email type', () => {
    renderWithTheme(<Input value="test@email.com" onChange={() => {}} type="email" />)

    expect(screen.getByRole('textbox')).toHaveValue('test@email.com')
  })
})
