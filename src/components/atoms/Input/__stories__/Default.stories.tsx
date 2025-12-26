import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import type { AnimatedIconName } from '../../../../icons/Animated'
import {
  IconLucideLock,
  IconLucideMail,
  IconLucidePhone,
  IconLucideSearch,
  IconLucideUser,
} from '../../../../icons/Lucide'
import { Input } from '../Input'
import type { InputProps } from '../types'

const lucideIcons = {
  'lucide-search': <IconLucideSearch />,
  'lucide-mail': <IconLucideMail />,
  'lucide-user': <IconLucideUser />,
  'lucide-lock': <IconLucideLock />,
  'lucide-phone': <IconLucidePhone />,
}

const animatedIconNames: AnimatedIconName[] = [
  'animated-account',
  'animated-add-card',
  'animated-analytics',
  'animated-arrow-down',
  'animated-arrow-right',
  'animated-arrow-up',
  'animated-article',
  'animated-assessment',
  'animated-assignment',
  'animated-autorenew',
  'animated-bell',
  'animated-bolt',
  'animated-book',
  'animated-bookmark',
  'animated-build',
  'animated-calculate',
  'animated-calendar',
  'animated-category',
  'animated-chat',
  'animated-check',
  'animated-clock',
  'animated-code',
  'animated-compare',
  'animated-compress',
  'animated-credit-card',
  'animated-cross',
  'animated-email',
  'animated-expand',
  'animated-file',
  'animated-folder',
  'animated-heart',
  'animated-help',
  'animated-history',
  'animated-home',
  'animated-inbox',
  'animated-info',
  'animated-label',
  'animated-newspaper',
  'animated-phone',
  'animated-pie-chart',
  'animated-play',
  'animated-ratio',
  'animated-search',
  'animated-settings',
  'animated-share',
  'animated-shopping',
  'animated-spinner',
  'animated-ticket',
  'animated-trash',
  'animated-trending-down',
  'animated-trending-up',
  'animated-upload',
  'animated-wallet',
  'animated-wifi',
]

const iconOptions = ['none', ...Object.keys(lucideIcons), ...animatedIconNames]

const getIcon = (iconName: string): InputProps['icon'] => {
  if (iconName === 'none') {
    return undefined
  }

  if (iconName in lucideIcons) {
    return lucideIcons[iconName as keyof typeof lucideIcons]
  }

  if (iconName.startsWith('animated-')) {
    return iconName as AnimatedIconName
  }

  return undefined
}

type StoryProps = Omit<InputProps, 'icon' | 'value' | 'onChange'> & { icon: string }

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
      options: iconOptions,
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
      icon={getIcon(icon)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export const Default: Story = {
  render: (args) => <InteractiveInput {...args} />,
}
