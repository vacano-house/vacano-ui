import type { Meta, StoryObj } from '@storybook/react-vite'

import { KeysBindings as KeysBindingsComponent } from './KeysBindings'

const meta: Meta<typeof KeysBindingsComponent> = {
  title: 'molecules/KeysBindings',
  component: KeysBindingsComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'symbol'],
    },
  },
  args: {
    variant: 'light',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
}

export default meta

type Story = StoryObj<typeof KeysBindingsComponent>

export const KeysBindings: Story = {
  render: (props) => {
    return <KeysBindingsComponent {...props} keys={['Meta', 'Shift', 'A']} />
  },
}
