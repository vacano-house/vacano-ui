import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MultiSelect as MultiSelectComponent } from './MultiSelect'
import { VacanoValueItem } from '../../../lib'

const defaultOptions: VacanoValueItem[] = [
  { value: '1', label: 'React' },
  { value: '2', label: 'TypeScript' },
  { value: '3', label: 'Node.js' },
  { value: '4', label: 'Vue.js' },
  { value: '5', label: 'Angular' },
  { value: '6', label: 'Svelte' },
  { value: '7', label: 'Next.js' },
  { value: '8', label: 'Nuxt.js' },
]

const manyOptions: VacanoValueItem[] = Array.from({ length: 1000 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Option ${i + 1}`,
}))

const meta: Meta<typeof MultiSelectComponent> = {
  title: 'organisms/MultiSelect',
  component: MultiSelectComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: defaultOptions,
    label: 'Technologies',
    placeholder: 'Select technologies...',
    variant: 'normal',
    disabled: false,
    searchable: false,
    closeOnSelect: false,
    placement: 'bottom',
    virtualized: false,
    count: Infinity,
    height: 300,
  },
  argTypes: {
    variant: { control: 'select', options: ['normal', 'error'] },
    disabled: { control: 'boolean' },
    searchable: { control: 'boolean' },
    closeOnSelect: { control: 'boolean' },
    placement: { control: 'select', options: ['top', 'bottom'] },
    virtualized: { control: 'boolean' },
    count: { control: 'number' },
    height: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof MultiSelectComponent>

const MultiSelectStory = (args: React.ComponentProps<typeof MultiSelectComponent>) => {
  const [value, setValue] = useState<VacanoValueItem[]>([])

  return <MultiSelectComponent {...args} value={value} onChange={setValue} />
}

const MultiSelectWithPreselected = (args: React.ComponentProps<typeof MultiSelectComponent>) => {
  const [value, setValue] = useState<VacanoValueItem[]>([
    { value: '1', label: 'React' },
    { value: '2', label: 'TypeScript' },
  ])

  return <MultiSelectComponent {...args} value={value} onChange={setValue} />
}

const MultiSelectWithCount = (args: React.ComponentProps<typeof MultiSelectComponent>) => {
  const [value, setValue] = useState<VacanoValueItem[]>([
    { value: '1', label: 'React' },
    { value: '2', label: 'TypeScript' },
    { value: '3', label: 'Node.js' },
    { value: '4', label: 'Vue.js' },
  ])

  return <MultiSelectComponent {...args} value={value} onChange={setValue} />
}

export const MultiSelect: Story = {
  render: (args) => <MultiSelectStory {...args} />,
}

export const WithSearch: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: {
    searchable: true,
  },
}

export const WithPreselected: Story = {
  render: (args) => <MultiSelectWithPreselected {...args} />,
}

export const WithCount: Story = {
  render: (args) => <MultiSelectWithCount {...args} />,
  args: {
    count: 2,
  },
}

export const CloseOnSelect: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: {
    closeOnSelect: true,
  },
}

export const Virtualized: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: {
    options: manyOptions,
    searchable: true,
    virtualized: true,
    label: '1000 Options (Virtualized)',
  },
}

export const Error: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: {
    variant: 'error',
  },
}

export const Disabled: Story = {
  render: (args) => <MultiSelectWithPreselected {...args} />,
  args: {
    disabled: true,
  },
}
