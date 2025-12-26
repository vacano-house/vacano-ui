import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '../Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 12, max: 96, step: 4 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {
    size: 24,
  },
}

export const Small: Story = {
  args: {
    size: 16,
  },
}

export const Large: Story = {
  args: {
    size: 32,
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 48,
  },
}
