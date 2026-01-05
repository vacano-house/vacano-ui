import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal as ModalComponent } from './Modal'
import { Button } from '../../organisms'
import { X } from '../../../icons/Lucide'

const meta: Meta<typeof ModalComponent> = {
  title: 'templates/Modal',
  component: ModalComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    open: false,
    animated: true,
    width: '500px',
  },
  argTypes: {
    open: { control: 'boolean' },
    animated: { control: 'boolean' },
    width: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof ModalComponent>

const ModalStory = (args: React.ComponentProps<typeof ModalComponent>) => {
  const [open, setOpen] = useState(args.open)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalComponent {...args} open={open}>
        <div style={{ padding: 24 }}>
          <h2 style={{ margin: '0 0 16px' }}>Modal Title</h2>
          <p style={{ margin: '0 0 16px' }}>This is the modal content.</p>
          <Button
            onClick={() => setOpen(false)}
            variant="transparent"
            keyBindings={['Escape']}
            icon={<X />}
          />
        </div>
      </ModalComponent>
    </>
  )
}

export const Modal: Story = {
  render: (args) => <ModalStory {...args} />,
}
