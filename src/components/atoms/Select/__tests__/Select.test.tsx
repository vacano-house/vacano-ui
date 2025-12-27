import type { ReactNode } from 'react'

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Select } from '../Select'
import type { SelectOption } from '../types'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

const sampleOptions: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

describe('Select', () => {
  it('renders with placeholder', () => {
    renderWithTheme(<Select options={sampleOptions} placeholder="Select an option" />)

    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('renders with label', () => {
    renderWithTheme(<Select options={sampleOptions} label="Choose option" />)

    expect(screen.getByText('Choose option')).toBeInTheDocument()
  })

  it('renders with selected value', () => {
    renderWithTheme(<Select options={sampleOptions} value="2" />)

    const trigger = screen.getByRole('combobox')
    expect(within(trigger).getByText('Option 2')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(<Select options={sampleOptions} />)

    expect(container.querySelector('.vacano_select_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Select options={sampleOptions} className="custom-class" />,
    )

    expect(container.querySelector('.vacano_select_container')).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    const { container } = renderWithTheme(
      <Select options={sampleOptions} classnames={{ container: 'custom-container' }} />,
    )

    expect(container.querySelector('.vacano_select_container')).toHaveClass('custom-container')
  })

  it('has aria-haspopup attribute on trigger', () => {
    renderWithTheme(<Select options={sampleOptions} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('has aria-expanded false when closed', () => {
    renderWithTheme(<Select options={sampleOptions} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Select options={sampleOptions} />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows options when opened', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(<Select options={sampleOptions} />)

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_select_list') as HTMLElement
    expect(within(listbox).getByText('Option 1')).toBeVisible()
    expect(within(listbox).getByText('Option 2')).toBeVisible()
    expect(within(listbox).getByText('Option 3')).toBeVisible()
  })

  it('calls onChange when option is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    const { container } = renderWithTheme(
      <Select options={sampleOptions} onChange={handleChange} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_select_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    expect(handleChange).toHaveBeenCalledWith('2')
  })

  it('closes dropdown after selection', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(<Select options={sampleOptions} />)

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_select_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows selected value after selection', async () => {
    const user = userEvent.setup()
    let value: string | undefined

    const { rerender, container } = renderWithTheme(
      <Select options={sampleOptions} value={value} onChange={(v) => (value = v)} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_select_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    rerender(
      <ThemeProvider>
        <Select options={sampleOptions} value={value} onChange={(v) => (value = v)} />
      </ThemeProvider>,
    )

    const trigger = screen.getByRole('combobox')
    expect(within(trigger).getByText('Option 2')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Select options={sampleOptions} disabled />)

    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('does not open when disabled', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Select options={sampleOptions} disabled />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows empty message when no options', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Select options={[]} emptyMessage="No options available" />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByText('No options available')).toBeVisible()
  })

  it('renders check icon for selected option', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(<Select options={sampleOptions} value="2" />)

    await user.click(screen.getByRole('combobox'))

    const checkIcon = container.querySelector('.vacano_select_option svg')
    expect(checkIcon).toBeInTheDocument()
  })
})

describe('Select searchable', () => {
  it('shows search input when searchable is true', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Select options={sampleOptions} searchable />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('uses custom search placeholder', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <Select options={sampleOptions} searchable searchPlaceholder="Type to search..." />,
    )

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument()
  })

  it('filters options based on search query', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(<Select options={sampleOptions} searchable />)

    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Search...'), '1')

    const content = container.querySelector('.vacano_select_content') as HTMLElement
    expect(within(content).getByText('Option 1')).toBeVisible()
    expect(within(content).queryByText('Option 2')).not.toBeInTheDocument()
    expect(within(content).queryByText('Option 3')).not.toBeInTheDocument()
  })

  it('shows empty message when search has no results', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Select options={sampleOptions} searchable emptyMessage="No results" />)

    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Search...'), 'xyz')

    expect(screen.getByText('No results')).toBeVisible()
  })
})

describe('Select states', () => {
  it('applies warning state', () => {
    renderWithTheme(<Select options={sampleOptions} state="warning" label="Warning" />)

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('applies error state', () => {
    renderWithTheme(<Select options={sampleOptions} state="error" label="Error" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})
