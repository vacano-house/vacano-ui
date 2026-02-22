import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge as BadgeComponent } from './Badge'
import { Avatar } from '../Avatar'
import { CheckCircle } from '../../icons/Lucide'

const meta: Meta<typeof BadgeComponent> = {
  title: 'components/Badge',
  component: BadgeComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: '5',
    size: 'md',
    color: 'default',
    variant: 'solid',
    placement: 'top-right',
    shape: 'rectangle',
    showOutline: true,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
    variant: { control: 'select', options: ['solid', 'flat', 'bordered'] },
    placement: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    shape: { control: 'select', options: ['circle', 'rectangle'] },
    showOutline: { control: 'boolean' },
    invisible: { control: 'boolean' },
    dot: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof BadgeComponent>

export const Playground: Story = {
  render: (args) => (
    <BadgeComponent {...args} shape="circle">
      <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </BadgeComponent>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="4" size="sm" shape="circle">
        <Avatar name="Junior" size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent content="5" size="md" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" size="lg" shape="circle">
        <Avatar name="Junior" size="lg" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="default" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="success" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="warning" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </BadgeComponent>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" variant="solid" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" variant="flat" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent content="5" variant="bordered" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
    </div>
  ),
}

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="danger" placement="top-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" placement="top-left" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" placement="bottom-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" placement="bottom-left" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </BadgeComponent>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" shape="rectangle">
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
          }}
        >
          A
        </div>
      </BadgeComponent>
    </div>
  ),
}

export const Dot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent dot color="success" placement="bottom-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent dot color="danger" placement="bottom-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent dot color="warning" placement="bottom-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
    </div>
  ),
}

export const ContentExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="new" color="danger" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <BadgeComponent dot color="success" placement="bottom-right" shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </BadgeComponent>
      <BadgeComponent
        content={<CheckCircle style={{ width: 12, height: 12 }} />}
        color="success"
        shape="circle"
      >
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </BadgeComponent>
    </div>
  ),
}

const VisibilityExample = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="danger" invisible={!visible} shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="50" color="danger" invisible={!visible} shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />
        Show badge
      </label>
    </div>
  )
}

export const Visibility: Story = {
  render: () => <VisibilityExample />,
}

export const WithoutOutline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <BadgeComponent content="5" color="danger" showOutline shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </BadgeComponent>
      <BadgeComponent content="5" color="danger" showOutline={false} shape="circle">
        <Avatar name="Junior" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BadgeComponent>
    </div>
  ),
}
