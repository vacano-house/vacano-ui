import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown as DropdownComponent } from './Dropdown'
import { Button } from '../../organisms'

const meta: Meta<typeof DropdownComponent> = {
  title: 'templates/Dropdown',
  component: DropdownComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    placement: 'bottom',
    align: 'start',
    offset: 4,
    fullWidth: false,
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom'] },
    align: { control: 'select', options: ['start', 'end'] },
    offset: { control: 'number' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof DropdownComponent>

const MenuContent = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: '8px',
      minWidth: '160px',
    }}
  >
    <Button variant="transparent" fullWidth>
      Profile
    </Button>
    <Button variant="transparent" fullWidth>
      Settings
    </Button>
    <Button variant="transparent" fullWidth>
      Logout
    </Button>
  </div>
)

export const Dropdown: Story = {
  render: (args) => (
    <DropdownComponent {...args} trigger={<Button>Open Menu</Button>}>
      <MenuContent />
    </DropdownComponent>
  ),
}

const ControlledStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <p>Open state: {open ? 'true' : 'false'}</p>
      <DropdownComponent
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Controlled Dropdown</Button>}
      >
        <MenuContent />
      </DropdownComponent>
      <Button variant="system" onClick={() => setOpen(!open)}>
        Toggle from outside
      </Button>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledStory />,
}

export const Placements: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '100px',
        padding: '100px',
      }}
    >
      <DropdownComponent placement="bottom" align="start" trigger={<Button>bottom-start</Button>}>
        <MenuContent />
      </DropdownComponent>
      <DropdownComponent placement="bottom" align="end" trigger={<Button>bottom-end</Button>}>
        <MenuContent />
      </DropdownComponent>
      <DropdownComponent placement="top" align="start" trigger={<Button>top-start</Button>}>
        <MenuContent />
      </DropdownComponent>
      <DropdownComponent placement="top" align="end" trigger={<Button>top-end</Button>}>
        <MenuContent />
      </DropdownComponent>
    </div>
  ),
}
