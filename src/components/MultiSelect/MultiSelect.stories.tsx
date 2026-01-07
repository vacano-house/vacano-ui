import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MultiSelect } from './MultiSelect'
import { MultiSelectProps } from './types'

const CITIES = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'phoenix', label: 'Phoenix' },
  { value: 'philadelphia', label: 'Philadelphia' },
  { value: 'san-antonio', label: 'San Antonio' },
  { value: 'san-diego', label: 'San Diego' },
  { value: 'dallas', label: 'Dallas' },
  { value: 'san-jose', label: 'San Jose' },
  { value: 'austin', label: 'Austin' },
  { value: 'jacksonville', label: 'Jacksonville' },
]

const meta: Meta<typeof MultiSelect> = {
  title: 'components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    maxVisible: {
      control: { type: 'number', min: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof MultiSelect>

const InteractiveMultiSelect = (props: Omit<MultiSelectProps, 'onChange'>) => {
  const [value, setValue] = useState(props.value)
  return <MultiSelect {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  args: {
    value: [],
    options: CITIES,
    label: 'Select cities',
    placeholder: 'Click to select...',
    variant: 'normal',
    disabled: false,
    maxVisible: Infinity,
    modalTitle: 'Select cities',
    searchPlaceholder: 'Search city...',
    emptyMessage: 'No cities found',
  },
  render: (args) => (
    <div style={{ width: 350 }}>
      <InteractiveMultiSelect {...args} />
    </div>
  ),
}

export const WithPreselected: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveMultiSelect
        value={['new-york', 'los-angeles', 'chicago']}
        options={CITIES}
        label="Selected cities"
        placeholder="Click to select..."
      />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}>
      <InteractiveMultiSelect
        value={['new-york']}
        options={CITIES}
        label="Normal"
        variant="normal"
        placeholder="Click to select..."
      />
      <InteractiveMultiSelect
        value={['los-angeles']}
        options={CITIES}
        label="Error"
        variant="error"
        placeholder="Click to select..."
      />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}>
      <InteractiveMultiSelect
        value={[]}
        options={CITIES}
        label="Disabled (empty)"
        disabled
        placeholder="Click to select..."
      />
      <InteractiveMultiSelect
        value={['new-york', 'los-angeles']}
        options={CITIES}
        label="Disabled (with values)"
        disabled
        placeholder="Click to select..."
      />
    </div>
  ),
}

export const MaxVisible: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}>
      <InteractiveMultiSelect
        value={['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix']}
        options={CITIES}
        label="maxVisible: 2"
        maxVisible={2}
      />
      <InteractiveMultiSelect
        value={['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix']}
        options={CITIES}
        label="maxVisible: 3"
        maxVisible={3}
      />
      <InteractiveMultiSelect
        value={['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix']}
        options={CITIES}
        label="maxVisible: Infinity (default)"
      />
    </div>
  ),
}

export const WithDisabledOptions: Story = {
  render: () => {
    const optionsWithDisabled = CITIES.map((city, i) => ({
      ...city,
      disabled: i === 2 || i === 5,
    }))
    return (
      <div style={{ width: 350 }}>
        <InteractiveMultiSelect
          value={['new-york']}
          options={optionsWithDisabled}
          label="With disabled options"
          placeholder="Click to select..."
        />
      </div>
    )
  },
}

export const CustomEmptyMessage: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveMultiSelect
        value={[]}
        options={[]}
        label="Empty list"
        emptyMessage={
          <div>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🏙️</div>
            <div>No cities available</div>
          </div>
        }
      />
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveMultiSelect value={[]} options={CITIES} placeholder="Select cities..." />
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, border: '1px dashed #ccc', padding: 16 }}>
      <InteractiveMultiSelect
        value={['new-york']}
        options={CITIES}
        label="City 1"
        placeholder="Select..."
      />
      <InteractiveMultiSelect
        value={['los-angeles']}
        options={CITIES}
        label="City 2"
        placeholder="Select..."
      />
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
        width: 350,
      }}
    >
      <InteractiveMultiSelect value={['new-york']} options={CITIES} label="Departure city" />
      <InteractiveMultiSelect value={['los-angeles']} options={CITIES} label="Destination city" />
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
        width: 600,
      }}
    >
      <InteractiveMultiSelect value={['new-york']} options={CITIES} label="Region 1" />
      <InteractiveMultiSelect value={['los-angeles']} options={CITIES} label="Region 2" />
      <InteractiveMultiSelect value={['chicago']} options={CITIES} label="Region 3" />
      <InteractiveMultiSelect value={['houston']} options={CITIES} label="Region 4" />
    </div>
  ),
}

export const ManySelectedItems: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveMultiSelect
        value={CITIES.map((c) => c.value)}
        options={CITIES}
        label="All cities selected"
      />
    </div>
  ),
}
