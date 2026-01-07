import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from './Select'
import { SelectProps } from './types'

const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
]

const FRUITS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
]

const WITH_DISABLED = [
  { value: 'active1', label: 'Active Option 1' },
  { value: 'disabled1', label: 'Disabled Option', disabled: true },
  { value: 'active2', label: 'Active Option 2' },
  { value: 'disabled2', label: 'Another Disabled', disabled: true },
  { value: 'active3', label: 'Active Option 3' },
]

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    size: {
      control: 'select',
      options: ['compact', 'default'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const InteractiveSelect = (
  props: Omit<SelectProps, 'onChange'> & { onChange?: SelectProps['onChange'] },
) => {
  const [value, setValue] = useState(props.value)
  return <Select {...props} value={value} onChange={props.onChange ?? setValue} />
}

export const Playground: Story = {
  args: {
    value: '',
    options: COUNTRIES,
    placeholder: 'Select a country...',
    label: 'Country',
    variant: 'normal',
    size: 'default',
    disabled: false,
    fullWidth: false,
  },
  render: (args) => <InteractiveSelect {...args} />,
}

export const Default: Story = {
  render: () => (
    <InteractiveSelect value="" options={COUNTRIES} placeholder="Select a country..." />
  ),
}

export const WithLabel: Story = {
  render: () => (
    <InteractiveSelect
      value=""
      options={COUNTRIES}
      label="Country"
      placeholder="Select a country..."
    />
  ),
}

export const WithValue: Story = {
  render: () => <InteractiveSelect value="uk" options={COUNTRIES} label="Country" />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <InteractiveSelect value="" options={COUNTRIES} label="Normal" variant="normal" />
      <InteractiveSelect value="" options={COUNTRIES} label="Error" variant="error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <InteractiveSelect value="" options={COUNTRIES} label="Default" size="default" />
      <InteractiveSelect value="" options={COUNTRIES} label="Compact" size="compact" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Select value="" options={COUNTRIES} label="Disabled Empty" disabled />
      <Select value="us" options={COUNTRIES} label="Disabled With Value" disabled />
    </div>
  ),
}

export const DisabledOptions: Story = {
  render: () => (
    <InteractiveSelect value="" options={WITH_DISABLED} label="With Disabled Options" />
  ),
}

export const ManyOptions: Story = {
  render: () => (
    <InteractiveSelect value="" options={FRUITS} label="Fruit" placeholder="Pick a fruit..." />
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 400, border: '1px dashed #ccc', padding: 16 }}>
      <InteractiveSelect value="" options={COUNTRIES} label="Country" fullWidth />
    </div>
  ),
}

export const LongLabels: Story = {
  render: () => (
    <div style={{ width: 200 }}>
      <InteractiveSelect
        value=""
        options={[
          { value: '1', label: 'Very Long Option Label That Should Truncate' },
          { value: '2', label: 'Another Extremely Long Label Here' },
          { value: '3', label: 'Short' },
        ]}
        label="Truncation"
      />
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, border: '1px dashed #ccc', padding: 16 }}>
      <InteractiveSelect value="" options={COUNTRIES} label="Country" />
      <InteractiveSelect value="" options={FRUITS} label="Fruit" />
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
      }}
    >
      <InteractiveSelect value="" options={COUNTRIES} label="Country" />
      <InteractiveSelect value="" options={FRUITS} label="Fruit" />
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
        width: 500,
      }}
    >
      <InteractiveSelect value="" options={COUNTRIES} label="Country" fullWidth />
      <InteractiveSelect value="" options={FRUITS} label="Fruit" fullWidth />
      <InteractiveSelect value="" options={WITH_DISABLED} label="Mixed" fullWidth />
      <InteractiveSelect value="us" options={COUNTRIES} label="Preselected" fullWidth />
    </div>
  ),
}

export const InForm: Story = {
  name: 'Layout: In Form',
  parameters: { layout: 'padded' },
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        padding: 24,
        width: 400,
        background: 'white',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>User Registration</h3>
      <InteractiveSelect value="" options={COUNTRIES} label="Country" fullWidth />
      <InteractiveSelect
        value=""
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ]}
        label="Gender"
        fullWidth
      />
      <InteractiveSelect
        value=""
        options={[
          { value: '18-24', label: '18-24' },
          { value: '25-34', label: '25-34' },
          { value: '35-44', label: '35-44' },
          { value: '45+', label: '45+' },
        ]}
        label="Age Range"
        fullWidth
      />
      <button
        type="submit"
        style={{
          marginTop: 8,
          padding: '10px 20px',
          borderRadius: 8,
          border: 'none',
          background: '#212529',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Submit
      </button>
    </form>
  ),
}

export const InCard: Story = {
  name: 'Layout: In Card',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        padding: 24,
        width: 350,
        background: 'white',
      }}
    >
      <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600 }}>Preferences</h3>
      <InteractiveSelect value="" options={COUNTRIES} label="Default Country" fullWidth />
    </div>
  ),
}
