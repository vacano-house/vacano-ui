import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Bell,
  Check,
  Download,
  Home,
  Plus,
  Search,
  Settings,
  Trash,
  User,
  X,
} from '../../../../icons/Lucide'
import { Button } from '../Button'
import type { ButtonProps } from '../types'

const iconMap = {
  none: null,
  search: <Search size={18} />,
  settings: <Settings size={18} />,
  plus: <Plus size={18} />,
  check: <Check size={18} />,
  x: <X size={18} />,
  trash: <Trash size={18} />,
  download: <Download size={18} />,
  bell: <Bell size={18} />,
  home: <Home size={18} />,
  user: <User size={18} />,
}

type IconOption = keyof typeof iconMap

type StoryProps = Omit<ButtonProps, 'icon'> & { icon: IconOption }

const meta: Meta<StoryProps> = {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'children', 'icon', 'char', 'loading', 'disabled', 'fullWidth'],
    },
  },
  args: {
    children: 'Button',
    icon: 'none',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Button variant',
    },
    children: {
      control: 'text',
      description: 'Button text',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Button icon',
    },
    char: {
      control: 'text',
      description: 'Keyboard shortcut character',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  render: ({ icon, ...args }) => <Button {...args} icon={iconMap[icon]} />,
}
