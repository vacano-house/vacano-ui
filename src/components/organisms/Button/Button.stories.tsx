import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button as ButtonComponent } from './Button'
import { Settings } from '../../../icons/Lucide'

const meta: Meta<typeof ButtonComponent> = {
  title: 'organisms/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['children', 'variant', 'size', 'loading', 'loading', 'disabled', 'fullWidth'],
    },
  },
  args: {
    children: 'Button',
    variant: 'normal',
    size: 'default',
    type: 'button',
    fullWidth: false,
    loading: false,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label',
    },
    variant: {
      control: 'select',
      options: ['normal', 'system', 'danger', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['compact', 'default'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset', 'link'],
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  render: (props) => {
    const handleClick = () => {
      alert('Button click called')
    }

    return (
      <div>
        <ButtonComponent
          {...props}
          icon={<Settings />}
          keyBindings={['Meta', 'Shift', 'D']}
          onClick={handleClick}
        />
      </div>
    )
  },
}
