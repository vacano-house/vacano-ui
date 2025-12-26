import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedIcon } from '../AnimatedIcon'
import { icons } from '../icons'

const iconNames = Object.keys(icons) as (keyof typeof icons)[]

const meta: Meta<typeof AnimatedIcon> = {
  title: 'Icons/AnimatedIcon',
  component: AnimatedIcon,
  parameters: {
    layout: 'centered',
    controls: { include: ['name', 'size', 'color', 'disableOnHover'] },
  },
  args: {
    name: 'animated-bookmark',
    size: 48,
    disableOnHover: false,
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name',
    },
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
    disableOnHover: {
      control: 'boolean',
      description: 'Disable animation on hover',
    },
  },
}

export default meta

type Story = StoryObj<typeof AnimatedIcon>

export const Default: Story = {}
