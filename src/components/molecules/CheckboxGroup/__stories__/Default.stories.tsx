import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxGroup } from '../CheckboxGroup'
import type { CheckboxGroupProps } from '../types'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'disabled'],
    },
  },
  args: {
    label: 'Select options',
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all options',
    },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxGroup>

const InteractiveCheckboxGroup = (args: Omit<CheckboxGroupProps, 'value' | 'onChange'>) => {
  const [value, setValue] = useState<string[]>(['a'])

  return <CheckboxGroup {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <InteractiveCheckboxGroup {...args} />,
}
