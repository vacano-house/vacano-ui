import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxCard } from '../CheckboxCard'
import type { CheckboxCardProps } from '../types'

type StoryProps = Omit<CheckboxCardProps, 'checked' | 'onChange'>

const meta: Meta<StoryProps> = {
  title: 'Molecules/CheckboxCard',
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'description', 'state', 'disabled', 'fullWidth'],
    },
  },
  args: {
    label: 'Option label',
    description: 'This is a description of the option that provides more context.',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    state: {
      control: 'select',
      options: [undefined, 'warning', 'error'],
      description: 'Validation state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable card',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width mode',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

const InteractiveCheckboxCard = (args: StoryProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ width: 320 }}>
      <CheckboxCard {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <InteractiveCheckboxCard {...args} />,
}
