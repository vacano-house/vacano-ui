import type { Meta, StoryObj } from '@storybook/react-vite'

import { Example } from '../Example'

const meta: Meta<typeof Example> = {
  title: 'Atoms/Example/Variant Two',
  component: Example,
  parameters: {
    layout: 'centered',
    actions: { disable: true },
  },
  args: {
    variant: 'two',
  },
}

export default meta
type Story = StoryObj<typeof Example>

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Size',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Size',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Size',
  },
}
