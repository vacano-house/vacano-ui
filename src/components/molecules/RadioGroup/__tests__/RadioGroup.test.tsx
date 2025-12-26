import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { RadioGroup } from '../RadioGroup'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

const defaultOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

describe('RadioGroup', () => {
  it('renders all options', () => {
    renderWithTheme(<RadioGroup options={defaultOptions} value="a" onChange={() => {}} />)

    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
    expect(screen.getByText('Option C')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    renderWithTheme(
      <RadioGroup
        options={defaultOptions}
        value="a"
        onChange={() => {}}
        label="Select an option"
      />,
    )

    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('does not render label when not provided', () => {
    renderWithTheme(<RadioGroup options={defaultOptions} value="a" onChange={() => {}} />)

    expect(screen.queryByRole('legend')).not.toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(
      <RadioGroup options={defaultOptions} value="a" onChange={() => {}} />,
    )

    expect(container.querySelector('.vacano_radioGroup_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <RadioGroup
        options={defaultOptions}
        value="a"
        onChange={() => {}}
        className="custom-class"
      />,
    )

    expect(container.querySelector('.vacano_radioGroup_container')).toHaveClass('custom-class')
  })

  it('applies data-test-id attribute', () => {
    const { container } = renderWithTheme(
      <RadioGroup
        options={defaultOptions}
        value="a"
        onChange={() => {}}
        data-test-id="test-group"
      />,
    )

    expect(container.querySelector('[data-test-id="test-group"]')).toBeInTheDocument()
  })

  it('selects the correct option based on value', () => {
    renderWithTheme(<RadioGroup options={defaultOptions} value="b" onChange={() => {}} />)

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
    expect(radios[2]).not.toBeChecked()
  })

  it('calls onChange with correct value when option is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<RadioGroup options={defaultOptions} value="a" onChange={handleChange} />)

    await user.click(screen.getByText('Option B'))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('b')
  })

  it('disables all options when disabled prop is true', () => {
    renderWithTheme(<RadioGroup options={defaultOptions} value="a" onChange={() => {}} disabled />)

    const radios = screen.getAllByRole('radio')
    radios.forEach((radio) => {
      expect(radio).toBeDisabled()
    })
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(
      <RadioGroup options={defaultOptions} value="a" onChange={handleChange} disabled />,
    )

    const optionB = screen.getByText('Option B').closest('label')!
    await user.click(optionB)

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies name attribute to all radios', () => {
    renderWithTheme(
      <RadioGroup options={defaultOptions} value="a" onChange={() => {}} name="test-group" />,
    )

    const radios = screen.getAllByRole('radio')
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'test-group')
    })
  })

  it('renders correct number of radio buttons', () => {
    renderWithTheme(<RadioGroup options={defaultOptions} value="a" onChange={() => {}} />)

    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })
})
