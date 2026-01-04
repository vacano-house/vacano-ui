import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox as CheckboxComponent } from './Checkbox'

const meta: Meta<typeof CheckboxComponent> = {
  title: 'atoms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    label: 'Checkbox label',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxComponent>

const CheckboxStory = (args: React.ComponentProps<typeof CheckboxComponent>) => {
  const [checked, setChecked] = useState(args.checked)

  return (
    <CheckboxComponent {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

export const Checkbox: Story = {
  render: (args) => <CheckboxStory {...args} />,
}
