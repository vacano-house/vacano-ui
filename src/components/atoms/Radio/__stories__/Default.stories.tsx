import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio } from '../Radio'
import type { RadioProps } from '../types'

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'state', 'disabled'],
    },
  },
  args: {
    label: 'Option 1',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    state: {
      control: 'select',
      options: [undefined, 'warning', 'error'],
      description: 'Validation state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable radio',
    },
  },
}

export default meta

type Story = StoryObj<typeof Radio>

const InteractiveRadio = (args: Omit<RadioProps, 'checked' | 'onChange'>) => {
  const [checked, setChecked] = useState(false)

  return <Radio {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const Default: Story = {
  render: (args) => <InteractiveRadio {...args} />,
}
