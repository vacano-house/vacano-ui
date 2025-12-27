import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Ellipsis, LogOut, Settings, User } from '../../../../icons/Lucide'
import { Button } from '../../../atoms'
import { Dropdown } from '../Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Vertical placement of dropdown content',
    },
    align: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Horizontal alignment of dropdown content',
    },
    offset: {
      control: 'number',
      description: 'Distance from trigger to content',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether dropdown should take full width',
    },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

const MenuContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '160px' }}>
    <Button variant="ghost" fullWidth>
      Profile
    </Button>
    <Button variant="ghost" fullWidth>
      Settings
    </Button>
    <Button variant="ghost" fullWidth>
      Logout
    </Button>
  </div>
)

export const Default: Story = {
  args: {
    placement: 'bottom',
    align: 'start',
    offset: 4,
  },
  render: (args) => (
    <Dropdown {...args} trigger={<Button>Open Menu</Button>}>
      <MenuContent />
    </Dropdown>
  ),
}

const ControlledExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <p>Open state: {open ? 'true' : 'false'}</p>
      <Dropdown open={open} onOpenChange={setOpen} trigger={<Button>Controlled Dropdown</Button>}>
        <MenuContent />
      </Dropdown>
      <Button variant="secondary" onClick={() => setOpen(!open)}>
        Toggle from outside
      </Button>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
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
      <Dropdown placement="bottom" align="start" trigger={<Button>bottom-start</Button>}>
        <MenuContent />
      </Dropdown>
      <Dropdown placement="bottom" align="end" trigger={<Button>bottom-end</Button>}>
        <MenuContent />
      </Dropdown>
      <Dropdown placement="top" align="start" trigger={<Button>top-start</Button>}>
        <MenuContent />
      </Dropdown>
      <Dropdown placement="top" align="end" trigger={<Button>top-end</Button>}>
        <MenuContent />
      </Dropdown>
    </div>
  ),
}

const IconMenuContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <Button variant="ghost" icon={<User size={16} />} fullWidth>
      Profile
    </Button>
    <Button variant="ghost" icon={<Settings size={16} />} fullWidth>
      Settings
    </Button>
    <Button variant="ghost" icon={<LogOut size={16} />} fullWidth>
      Logout
    </Button>
  </div>
)

export const IconMenu: Story = {
  render: () => (
    <Dropdown
      placement="bottom"
      align="end"
      trigger={<Button variant="ghost" icon={<Ellipsis size={20} />} />}
    >
      <IconMenuContent />
    </Dropdown>
  ),
}
