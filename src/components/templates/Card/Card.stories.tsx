import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card as CardComponent } from './Card'

const meta: Meta<typeof CardComponent> = {
  title: 'templates/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    border: false,
    shadow: false,
  },
  argTypes: {
    border: {
      control: 'boolean',
    },
    shadow: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof CardComponent>

export const Card: Story = {
  render: (props) => (
    <CardComponent {...props} style={{ width: 300, height: 200 }}>
      <div style={{ padding: 16 }}>Card content</div>
    </CardComponent>
  ),
}
