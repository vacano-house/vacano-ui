import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MultiValue as MultiValueComponent } from './MultiValue'
import { MultiValueItem } from './types'

const defaultItems: MultiValueItem[] = [
  { value: '1', label: 'React', disabled: false },
  { value: '2', label: 'TypeScript', disabled: false },
  { value: '3', label: 'Node.js', disabled: false },
]

const meta: Meta<typeof MultiValueComponent> = {
  title: 'molecules/MultiValue',
  component: MultiValueComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: defaultItems,
    label: 'Technologies',
    placeholder: 'Select technologies...',
    variant: 'normal',
    disabled: false,
    count: Infinity,
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
    disabled: { control: 'boolean' },
    count: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof MultiValueComponent>

const MultiValueStory = (args: React.ComponentProps<typeof MultiValueComponent>) => {
  const [items, setItems] = useState(args.items)

  return <MultiValueComponent {...args} items={items} onChange={setItems} />
}

export const MultiValue: Story = {
  render: (args) => <MultiValueStory {...args} />,
}
