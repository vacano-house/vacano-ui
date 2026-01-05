import type { Meta, StoryObj } from '@storybook/react-vite'

import { KeySymbol as KeySymbolComponent } from './KeySymbol'

const meta: Meta<typeof KeySymbolComponent> = {
  title: 'atoms/KeySymbol',
  component: KeySymbolComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'symbol'],
    },
  },
  args: {
    variant: 'light',
    symbol: 'Esc',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
    symbol: {
      control: 'text',
      description: 'Esc',
    },
  },
}

export default meta

type Story = StoryObj<typeof KeySymbolComponent>

export const KeySymbol: Story = {}
