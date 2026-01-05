import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip as ChipComponent } from './Chip'

const meta: Meta<typeof ChipComponent> = {
  title: 'atoms/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Chip label',
    variant: 'gray',
    deletable: false,
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['gray', 'red', 'blue', 'black'] },
    deletable: { control: 'boolean' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta

type Story = StoryObj<typeof ChipComponent>

export const Chip: Story = {
  render: (args) => <ChipComponent {...args} />,
}
