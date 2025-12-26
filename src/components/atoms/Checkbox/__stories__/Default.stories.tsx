import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '../Checkbox'
import type { CheckboxProps } from '../types'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'state', 'disabled', 'indeterminate'],
    },
  },
  args: {
    label: 'I agree to the terms',
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
      description: 'Disable checkbox',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partial selection)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

const InteractiveCheckbox = (args: Omit<CheckboxProps, 'checked' | 'onChange'>) => {
  const [checked, setChecked] = useState(false)

  return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const Default: Story = {
  render: (args) => <InteractiveCheckbox {...args} />,
}
