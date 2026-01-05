import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input as InputComponent } from './Input'
import type { InputProps } from './types'

const meta: Meta<typeof InputComponent> = {
  title: 'molecules/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['placeholder', 'variant', 'size', 'disabled', 'label', 'fullWidth'],
    },
  },
  args: {
    placeholder: 'Enter text...',
    variant: 'normal',
    size: 'default',
    disabled: false,
    label: 'Input label',
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    size: {
      control: 'select',
      options: ['compact', 'default'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof InputComponent>

const InputStory = (props: InputProps) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: 300 }}>
      <InputComponent {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export const Input: Story = {
  render: InputStory,
}
