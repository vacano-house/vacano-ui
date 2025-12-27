import type { ReactNode } from 'react'

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { MultiSelect } from '../MultiSelect'
import type { MultiSelectOption } from '../types'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

const sampleOptions: MultiSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

describe('MultiSelect', () => {
  it('renders with placeholder when no values selected', () => {
    renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        placeholder="Select options"
      />,
    )

    expect(screen.getByText('Select options')).toBeInTheDocument()
  })

  it('renders with label', () => {
    renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} label="Choose options" />,
    )

    expect(screen.getByText('Choose options')).toBeInTheDocument()
  })

  it('renders chips for selected values', () => {
    renderWithTheme(<MultiSelect options={sampleOptions} value={['1', '2']} onChange={vi.fn()} />)

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('applies default class name', () => {
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />,
    )

    expect(container.querySelector('.vacano_multiselect_container')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        className="custom-class"
      />,
    )

    expect(container.querySelector('.vacano_multiselect_container')).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    const { container } = renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        classnames={{ container: 'custom-container' }}
      />,
    )

    expect(container.querySelector('.vacano_multiselect_container')).toHaveClass('custom-container')
  })

  it('has aria-haspopup attribute on trigger', () => {
    renderWithTheme(<MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('has aria-expanded false when closed', () => {
    renderWithTheme(<MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup()

    renderWithTheme(<MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows options when opened', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_multiselect_list') as HTMLElement
    expect(within(listbox).getByText('Option 1')).toBeVisible()
    expect(within(listbox).getByText('Option 2')).toBeVisible()
    expect(within(listbox).getByText('Option 3')).toBeVisible()
  })

  it('calls onChange with added value when option is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={handleChange} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_multiselect_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    expect(handleChange).toHaveBeenCalledWith(['2'])
  })

  it('calls onChange with removed value when selected option is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={['1', '2']} onChange={handleChange} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_multiselect_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    expect(handleChange).toHaveBeenCalledWith(['1'])
  })

  it('does NOT close dropdown after selection', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} />,
    )

    await user.click(screen.getByRole('combobox'))

    const listbox = container.querySelector('.vacano_multiselect_list') as HTMLElement
    await user.click(within(listbox).getByText('Option 2'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  })

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} disabled />)

    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('does not open when disabled', async () => {
    const user = userEvent.setup()

    renderWithTheme(<MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} disabled />)

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows empty message when no options', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <MultiSelect
        options={[]}
        value={[]}
        onChange={vi.fn()}
        emptyMessage="No options available"
      />,
    )

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByText('No options available')).toBeVisible()
  })

  it('renders check icon for selected options', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={['2']} onChange={vi.fn()} />,
    )

    await user.click(screen.getByRole('combobox'))

    const checkIcons = container.querySelectorAll('.vacano_multiselect_option svg')
    expect(checkIcons.length).toBeGreaterThan(0)
  })
})

describe('MultiSelect chip removal', () => {
  it('renders remove button on each chip', () => {
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={['1', '2']} onChange={vi.fn()} />,
    )

    const removeButtons = container.querySelectorAll('.vacano_multiselect_chip-remove')
    expect(removeButtons).toHaveLength(2)
  })

  it('calls onChange with value removed when chip remove is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={['1', '2']} onChange={handleChange} />,
    )

    const removeButton = container.querySelector('.vacano_multiselect_chip-remove')
    expect(removeButton).not.toBeNull()
    await user.click(removeButton!)

    expect(handleChange).toHaveBeenCalledWith(['2'])
  })

  it('does not open dropdown when chip remove is clicked', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={['1', '2']} onChange={vi.fn()} />,
    )

    const removeButton = container.querySelector('.vacano_multiselect_chip-remove')
    expect(removeButton).not.toBeNull()
    await user.click(removeButton!)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('MultiSelect searchable', () => {
  it('shows search input when searchable is true', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} searchable />,
    )

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('uses custom search placeholder', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        searchable
        searchPlaceholder="Type to search..."
      />,
    )

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument()
  })

  it('filters options based on search query', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <MultiSelect options={sampleOptions} value={[]} onChange={vi.fn()} searchable />,
    )

    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Search...'), '1')

    const content = container.querySelector('.vacano_multiselect_content') as HTMLElement
    expect(within(content).getByText('Option 1')).toBeVisible()
    expect(within(content).queryByText('Option 2')).not.toBeInTheDocument()
    expect(within(content).queryByText('Option 3')).not.toBeInTheDocument()
  })

  it('shows empty message when search has no results', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        searchable
        emptyMessage="No results"
      />,
    )

    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Search...'), 'xyz')

    expect(screen.getByText('No results')).toBeVisible()
  })
})

describe('MultiSelect states', () => {
  it('applies warning state', () => {
    renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        state="warning"
        label="Warning"
      />,
    )

    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('applies error state', () => {
    renderWithTheme(
      <MultiSelect
        options={sampleOptions}
        value={[]}
        onChange={vi.fn()}
        state="error"
        label="Error"
      />,
    )

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})
