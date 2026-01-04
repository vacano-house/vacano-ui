import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SingleSelect as SingleSelectComponent } from './SingleSelect'
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

const meta: Meta<typeof SingleSelectComponent> = {
  title: 'organisms/SingleSelect',
  component: SingleSelectComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: defaultOptions,
    label: 'Technology',
    placeholder: 'Select technology...',
    variant: 'normal',
    disabled: false,
    searchable: false,
    closeOnSelect: true,
    placement: 'bottom',
    virtualized: false,
    height: 300,
  },
  argTypes: {
    variant: { control: 'select', options: ['normal', 'error'] },
    disabled: { control: 'boolean' },
    searchable: { control: 'boolean' },
    closeOnSelect: { control: 'boolean' },
    placement: { control: 'select', options: ['top', 'bottom'] },
    virtualized: { control: 'boolean' },
    height: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof SingleSelectComponent>

const SingleSelectStory = (args: React.ComponentProps<typeof SingleSelectComponent>) => {
  const [value, setValue] = useState<VacanoValueItem | null>(null)

  return <SingleSelectComponent {...args} value={value} onChange={setValue} />
}

const SingleSelectWithPreselected = (args: React.ComponentProps<typeof SingleSelectComponent>) => {
  const [value, setValue] = useState<VacanoValueItem | null>({ value: '1', label: 'React' })

  return <SingleSelectComponent {...args} value={value} onChange={setValue} />
}

export const SingleSelect: Story = {
  render: (args) => <SingleSelectStory {...args} />,
}

export const WithSearch: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: {
    searchable: true,
  },
}

export const WithPreselected: Story = {
  render: (args) => <SingleSelectWithPreselected {...args} />,
}

export const KeepOpenOnSelect: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: {
    closeOnSelect: false,
  },
}

export const Virtualized: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: {
    options: manyOptions,
    searchable: true,
    virtualized: true,
    label: '1000 Options (Virtualized)',
  },
}

export const Error: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: {
    variant: 'error',
  },
}

export const Disabled: Story = {
  render: (args) => <SingleSelectWithPreselected {...args} />,
  args: {
    disabled: true,
  },
}
