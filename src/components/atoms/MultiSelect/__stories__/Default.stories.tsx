import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Globe } from '../../../../icons/Lucide'
import { MultiSelect } from '../MultiSelect'

const meta: Meta<typeof MultiSelect> = {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: 'select',
      options: [undefined, 'warning', 'error'],
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
    },
  },
}

export default meta
type Story = StoryObj<typeof MultiSelect>

const options = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'China', value: 'cn' },
]

const longOptions = [
  { label: 'This is a very long option label that should be truncated', value: '1' },
  { label: 'Another extremely long label for testing purposes', value: '2' },
  { label: 'Short', value: '3' },
  { label: 'Medium length option', value: '4' },
]

const DefaultExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <DefaultExample />,
}

const WithLabelExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        label="Size"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const WithLabel: Story = {
  render: () => <WithLabelExample />,
}

const WithIconExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={countries}
        value={value}
        onChange={setValue}
        icon={<Globe size={16} />}
        label="Countries"
        placeholder="Select countries..."
      />
    </div>
  )
}

export const WithIcon: Story = {
  render: () => <WithIconExample />,
}

const SearchableExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={countries}
        value={value}
        onChange={setValue}
        searchable
        searchPlaceholder="Search countries..."
        label="Countries"
        placeholder="Select countries..."
      />
    </div>
  )
}

export const Searchable: Story = {
  render: () => <SearchableExample />,
}

const manyOptions = Array.from({ length: 100000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

const VirtualizedExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={manyOptions}
        value={value}
        onChange={setValue}
        virtualized
        searchable
        label="100,000 Options"
        placeholder="Select options..."
      />
    </div>
  )
}

export const Virtualized: Story = {
  render: () => <VirtualizedExample />,
}

const StatesExample = () => {
  const [warningValue, setWarningValue] = useState<string[]>([])
  const [errorValue, setErrorValue] = useState<string[]>([])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
      <MultiSelect
        options={options}
        value={warningValue}
        onChange={setWarningValue}
        state="warning"
        label="Warning"
        placeholder="Select sizes..."
      />
      <MultiSelect
        options={options}
        value={errorValue}
        onChange={setErrorValue}
        state="error"
        label="Error"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const States: Story = {
  render: () => <StatesExample />,
}

const DisabledExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
      <MultiSelect
        options={options}
        value={[]}
        onChange={() => {}}
        disabled
        label="Disabled (empty)"
        placeholder="Select sizes..."
      />
      <MultiSelect
        options={options}
        value={['sm', 'md']}
        onChange={() => {}}
        disabled
        label="Disabled (with values)"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const Disabled: Story = {
  render: () => <DisabledExample />,
}

const PreselectedExample = () => {
  const [value, setValue] = useState<string[]>(['sm', 'lg'])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        label="Preselected"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const Preselected: Story = {
  render: () => <PreselectedExample />,
}

const LongLabelsExample = () => {
  const [value, setValue] = useState<string[]>(['1', '2'])

  return (
    <div style={{ width: '280px' }}>
      <MultiSelect
        options={longOptions}
        value={value}
        onChange={setValue}
        label="Long Labels"
        placeholder="Select options..."
      />
    </div>
  )
}

export const LongLabels: Story = {
  render: () => <LongLabelsExample />,
}

const PlacementExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '280px', marginTop: '300px' }}>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placement="top"
        label="Opens Up"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const Placement: Story = {
  render: () => <PlacementExample />,
}

const FullWidthExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div style={{ width: '500px' }}>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        fullWidth
        label="Full Width"
        placeholder="Select sizes..."
      />
    </div>
  )
}

export const FullWidth: Story = {
  render: () => <FullWidthExample />,
}
