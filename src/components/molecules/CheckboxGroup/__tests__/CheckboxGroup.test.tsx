import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { CheckboxGroup } from '../CheckboxGroup'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

const defaultOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

describe('CheckboxGroup', () => {
  it('renders all options', () => {
    renderWithTheme(<CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} />)

    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
    expect(screen.getByText('Option C')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    renderWithTheme(
      <CheckboxGroup
        options={defaultOptions}
        value={[]}
        onChange={() => {}}
        label="Select options"
      />,
    )

    expect(screen.getByText('Select options')).toBeInTheDocument()
  })

  it('does not render label when not provided', () => {
    renderWithTheme(<CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} />)

    expect(screen.queryByRole('legend')).not.toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} />,
    )

    expect(container.querySelector('.vacano_checkboxGroup_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <CheckboxGroup
        options={defaultOptions}
        value={[]}
        onChange={() => {}}
        className="custom-class"
      />,
    )

    expect(container.querySelector('.vacano_checkboxGroup_container')).toHaveClass('custom-class')
  })

  it('applies data-test-id attribute', () => {
    const { container } = renderWithTheme(
      <CheckboxGroup
        options={defaultOptions}
        value={[]}
        onChange={() => {}}
        data-test-id="test-group"
      />,
    )

    expect(container.querySelector('[data-test-id="test-group"]')).toBeInTheDocument()
  })

  it('checks the correct options based on value', () => {
    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={['a', 'c']} onChange={() => {}} />,
    )

    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).toBeChecked()
  })

  it('calls onChange with added value when unchecked option is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={['a']} onChange={handleChange} />,
    )

    await user.click(screen.getByText('Option B'))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(['a', 'b'])
  })

  it('calls onChange with removed value when checked option is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={['a', 'b']} onChange={handleChange} />,
    )

    await user.click(screen.getByText('Option A'))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(['b'])
  })

  it('disables all options when disabled prop is true', () => {
    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} disabled />,
    )

    const checkboxes = screen.getAllByRole('checkbox')
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeDisabled()
    })
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={[]} onChange={handleChange} disabled />,
    )

    const optionA = screen.getByText('Option A').closest('label')!
    await user.click(optionA)

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('renders correct number of checkboxes', () => {
    renderWithTheme(<CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} />)

    expect(screen.getAllByRole('checkbox')).toHaveLength(3)
  })

  it('handles empty value array', () => {
    renderWithTheme(<CheckboxGroup options={defaultOptions} value={[]} onChange={() => {}} />)

    const checkboxes = screen.getAllByRole('checkbox')
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked()
    })
  })

  it('handles all values selected', () => {
    renderWithTheme(
      <CheckboxGroup options={defaultOptions} value={['a', 'b', 'c']} onChange={() => {}} />,
    )

    const checkboxes = screen.getAllByRole('checkbox')
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked()
    })
  })
})
