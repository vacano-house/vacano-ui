import type { Meta, StoryObj } from '@storybook/react-vite'

import { Example } from '../Example'

const meta: Meta<typeof Example> = {
  title: 'Atoms/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['one', 'two'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {
    size: 'md',
    children: 'Example Content',
  },
}
