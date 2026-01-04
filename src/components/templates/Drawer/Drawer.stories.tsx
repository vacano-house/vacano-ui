import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Drawer as DrawerComponent } from './Drawer'
import type { DrawerProps } from './types'
import { Button } from '../../organisms'
import { X } from '../../../icons/Lucide'

const meta: Meta<typeof DrawerComponent> = {
  title: 'templates/Drawer',
  component: DrawerComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['animated', 'position', 'size'],
    },
  },
  args: {
    position: 'right',
    size: '400px',
  },
  argTypes: {
    animated: {
      control: 'boolean',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof DrawerComponent>

const DrawerStory = (props: DrawerProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <DrawerComponent {...props} open={open}>
        <div style={{ padding: 24 }}>
          <h2 style={{ margin: '0 0 16px' }}>Drawer Content</h2>
          <p style={{ margin: '0 0 16px', color: '#666' }}>
            Position: {props.position}
            <br />
            Size: {props.size}
          </p>
          <Button
            variant="transparent"
            onClick={() => setOpen(false)}
            keyBindings={['Escape']}
            icon={<X />}
          />
        </div>
      </DrawerComponent>
    </>
  )
}

export const Drawer: Story = {
  render: DrawerStory,
}
