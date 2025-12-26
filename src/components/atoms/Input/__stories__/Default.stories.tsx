import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar, CreditCard, Lock, Mail, Phone, Search, User } from '../../../../icons/Lucide'
import { Input } from '../Input'
import type { InputProps } from '../types'

const iconMap = {
  none: null,
  search: <Search size={16} />,
  mail: <Mail size={16} />,
  user: <User size={16} />,
  lock: <Lock size={16} />,
  phone: <Phone size={16} />,
  calendar: <Calendar size={16} />,
  'credit-card': <CreditCard size={16} />,
}

type IconOption = keyof typeof iconMap

type StoryProps = Omit<InputProps, 'icon' | 'value' | 'onChange'> & { icon: IconOption }

const meta: Meta<StoryProps> = {
  title: 'Atoms/Input',
  parameters: {
    layout: 'centered',
    controls: {
      include: ['label', 'placeholder', 'type', 'state', 'disabled', 'fullWidth', 'icon'],
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    icon: 'none',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
      description: 'Input type',
    },
    state: {
      control: 'select',
      options: [undefined, 'warning', 'error'],
      description: 'Validation state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width mode',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Icon',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

const InteractiveInput = ({ icon, ...args }: StoryProps) => {
  const [value, setValue] = useState('')

  return (
    <Input
      {...args}
      icon={iconMap[icon]}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export const Default: Story = {
  render: (args) => <InteractiveInput {...args} />,
}
