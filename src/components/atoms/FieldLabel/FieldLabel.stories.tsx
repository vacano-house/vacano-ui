import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldLabel as FieldLabelComponent } from './FieldLabel'

const meta: Meta<typeof FieldLabelComponent> = {
  title: 'atoms/FieldLabel',
  component: FieldLabelComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'children', 'required'],
    },
  },
  args: {
    variant: 'normal',
    children: 'Field Label',
    required: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    children: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof FieldLabelComponent>

export const FieldLabel: Story = {}
