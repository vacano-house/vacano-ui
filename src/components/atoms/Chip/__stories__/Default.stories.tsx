import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip } from '../Chip'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    controls: { include: ['status', 'children'] },
  },
  args: {
    children: 'Verified',
  },
  argTypes: {
    status: {
      control: 'select',
      options: [undefined, 'neutral', 'success', 'warning', 'error'],
      description: 'Chip color status',
    },
    children: {
      control: 'text',
      description: 'Chip content',
    },
  },
}

export default meta

type Story = StoryObj<typeof Chip>

export const Default: Story = {}
