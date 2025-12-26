import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedDots } from '../AnimatedDots'

const meta: Meta<typeof AnimatedDots> = {
  title: 'Atoms/AnimatedDots',
  component: AnimatedDots,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 4, max: 16, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof AnimatedDots>

export const Default: Story = {
  args: {
    size: 6,
  },
}

export const Small: Story = {
  args: {
    size: 4,
  },
}

export const Large: Story = {
  args: {
    size: 8,
  },
}
