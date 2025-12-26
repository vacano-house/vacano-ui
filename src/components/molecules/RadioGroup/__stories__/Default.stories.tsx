import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from '../RadioGroup'
import type { RadioGroupProps } from '../types'

const meta: Meta<typeof RadioGroup> = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'disabled'],
    },
  },
  args: {
    label: 'Select an option',
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

type Story = StoryObj<typeof RadioGroup>

const InteractiveRadioGroup = (args: Omit<RadioGroupProps, 'value' | 'onChange'>) => {
  const [value, setValue] = useState('a')

  return <RadioGroup {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
}
