import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  IconLucideCheck,
  IconLucideDownload,
  IconLucidePlus,
  IconLucideSearch,
  IconLucideSettings,
  IconLucideTrash,
  IconLucideX,
} from '../../../../icons/Lucide'
import { Button } from '../Button'
import type { ButtonProps } from '../types'

const iconKeys = [
  'none',
  'animated-settings',
  'animated-search',
  'animated-trash',
  'animated-check',
  'animated-bell',
  'animated-home',
  'lucide-search',
  'lucide-settings',
  'lucide-plus',
  'lucide-check',
  'lucide-x',
  'lucide-trash',
  'lucide-download',
] as const

type IconKey = (typeof iconKeys)[number]

const lucideIconMap: Record<string, React.ReactElement> = {
  'lucide-search': <IconLucideSearch />,
  'lucide-settings': <IconLucideSettings />,
  'lucide-plus': <IconLucidePlus />,
  'lucide-check': <IconLucideCheck />,
  'lucide-x': <IconLucideX />,
  'lucide-trash': <IconLucideTrash />,
  'lucide-download': <IconLucideDownload />,
}

const getIcon = (iconKey: IconKey): ButtonProps['icon'] => {
  if (iconKey === 'none') return undefined
  if (iconKey.startsWith('animated-')) return iconKey as ButtonProps['icon']
  return lucideIconMap[iconKey]
}

type StoryProps = Omit<ButtonProps, 'icon'> & { iconKey: IconKey }

const meta: Meta<StoryProps> = {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'children', 'iconKey', 'char', 'loading', 'disabled', 'fullWidth'],
    },
  },
  args: {
    children: 'Button',
    iconKey: 'none',
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
    iconKey: {
      control: 'select',
      options: iconKeys,
      description: 'Button icon',
      name: 'icon',
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
  render: ({ iconKey, ...args }) => <Button {...args} icon={getIcon(iconKey)} />,
}
