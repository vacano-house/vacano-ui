import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ValueSelector as ValueSelectorComponent } from './ValueSelector'
import { VacanoValueItem } from '../../../lib'

const defaultOptions: VacanoValueItem[] = [
  { value: '1', label: 'React' },
  { value: '2', label: 'Vue' },
  { value: '3', label: 'Angular' },
  { value: '4', label: 'Svelte' },
  { value: '5', label: 'SolidJS' },
  { value: '6', label: 'Preact' },
  { value: '7', label: 'Ember', disabled: true },
  { value: '8', label: 'Backbone', disabled: true },
]

const meta: Meta<typeof ValueSelectorComponent> = {
  title: 'molecules/ValueSelector',
  component: ValueSelectorComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: defaultOptions,
    value: [],
    searchable: false,
    multiple: true,
    height: 300,
  },
  argTypes: {
    searchable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    height: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof ValueSelectorComponent>

const ValueSelectorStory = (args: React.ComponentProps<typeof ValueSelectorComponent>) => {
  const [value, setValue] = useState<VacanoValueItem[]>(args.value)

  return (
    <div style={{ width: 300, border: '1px solid #33333333', borderRadius: '12px' }}>
      <ValueSelectorComponent {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const ValueSelector: Story = {
  render: (args) => <ValueSelectorStory {...args} />,
}
