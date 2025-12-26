import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { CheckboxCard } from '../CheckboxCard'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe('CheckboxCard', () => {
  it('renders label', () => {
    renderWithTheme(<CheckboxCard label="Test Label" checked={false} onChange={() => {}} />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders description', () => {
    renderWithTheme(
      <CheckboxCard
        label="Test Label"
        description="Test Description"
        checked={false}
        onChange={() => {}}
      />,
    )

    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(
      <CheckboxCard label="Test" checked={false} onChange={() => {}} />,
    )

    expect(container.querySelector('.vacano_checkboxCard_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <CheckboxCard label="Test" checked={false} onChange={() => {}} className="custom-class" />,
    )

    expect(container.querySelector('.vacano_checkboxCard_container')).toHaveClass('custom-class')
  })

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<CheckboxCard label="Test" checked={false} onChange={handleChange} />)

    await user.click(screen.getByText('Test'))

    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onChange with event when card is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<CheckboxCard label="Test" checked={false} onChange={handleChange} />)

    await user.click(screen.getByText('Test'))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0]?.[0]).toHaveProperty('target')
  })

  it('renders as checked', () => {
    renderWithTheme(<CheckboxCard label="Test" checked={true} onChange={() => {}} />)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders as unchecked', () => {
    renderWithTheme(<CheckboxCard label="Test" checked={false} onChange={() => {}} />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<CheckboxCard label="Test" checked={false} onChange={() => {}} disabled />)

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    renderWithTheme(<CheckboxCard label="Test" checked={false} onChange={handleChange} disabled />)

    await user.click(screen.getByText('Test'))

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies fullWidth style', () => {
    const { container } = renderWithTheme(
      <CheckboxCard label="Test" checked={false} onChange={() => {}} fullWidth />,
    )

    expect(container.querySelector('.vacano_checkboxCard_container')).toHaveStyle({
      width: '100%',
    })
  })

  it('renders with warning state', () => {
    const { container } = renderWithTheme(
      <CheckboxCard label="Test" checked={false} onChange={() => {}} state="warning" />,
    )

    expect(container.querySelector('.vacano_checkboxCard_container')).toBeInTheDocument()
  })

  it('renders with error state', () => {
    const { container } = renderWithTheme(
      <CheckboxCard label="Test" checked={false} onChange={() => {}} state="error" />,
    )

    expect(container.querySelector('.vacano_checkboxCard_container')).toBeInTheDocument()
  })

  it('applies classnames.content', () => {
    const { container } = renderWithTheme(
      <CheckboxCard
        label="Test"
        checked={false}
        onChange={() => {}}
        classnames={{ content: 'custom-content' }}
      />,
    )

    expect(container.querySelector('.vacano_checkboxCard_content')).toHaveClass('custom-content')
  })

  it('applies classnames.label', () => {
    const { container } = renderWithTheme(
      <CheckboxCard
        label="Test"
        checked={false}
        onChange={() => {}}
        classnames={{ label: 'custom-label' }}
      />,
    )

    expect(container.querySelector('.vacano_checkboxCard_label')).toHaveClass('custom-label')
  })

  it('applies classnames.description', () => {
    const { container } = renderWithTheme(
      <CheckboxCard
        label="Test"
        description="Desc"
        checked={false}
        onChange={() => {}}
        classnames={{ description: 'custom-description' }}
      />,
    )

    expect(container.querySelector('.vacano_checkboxCard_description')).toHaveClass(
      'custom-description',
    )
  })
})
