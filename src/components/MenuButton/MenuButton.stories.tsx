import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MenuButton as MenuButtonComponent } from './MenuButton'

const meta: Meta<typeof MenuButtonComponent> = {
  title: 'components/MenuButton',
  component: MenuButtonComponent,
}

export default meta

type Story = StoryObj<typeof MenuButtonComponent>

export const Playground: Story = {
  args: {
    size: 'default',
    disabled: false,
  },
}

const ControlledExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <MenuButtonComponent open={open} onOpenChange={setOpen} />
      <span style={{ fontSize: 14, color: '#495057' }}>{open ? 'Open' : 'Closed'}</span>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const Compact: Story = {
  args: {
    size: 'compact',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <MenuButtonComponent size="compact" />
      <MenuButtonComponent size="default" />
    </div>
  ),
}
