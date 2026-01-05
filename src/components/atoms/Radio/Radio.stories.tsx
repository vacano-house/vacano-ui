import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio as RadioComponent } from './Radio'

const meta: Meta<typeof RadioComponent> = {
  title: 'atoms/Radio',
  component: RadioComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Radio label',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof RadioComponent>

const RadioStory = (args: React.ComponentProps<typeof RadioComponent>) => {
  const [checked, setChecked] = useState(args.checked)

  return (
    <RadioComponent {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

export const Radio: Story = {
  render: (args) => <RadioStory {...args} />,
}
