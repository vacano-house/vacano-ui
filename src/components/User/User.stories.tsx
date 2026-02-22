import type { Meta, StoryObj } from '@storybook/react-vite'

import { User as UserComponent } from './User'

const meta: Meta<typeof UserComponent> = {
  title: 'components/User',
  component: UserComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Zoey Lang',
    description: '@zoeylang',
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    avatarPosition: 'left',
  },
  argTypes: {
    avatarPosition: { control: 'select', options: ['left', 'right'] },
  },
}

export default meta

type Story = StoryObj<typeof UserComponent>

export const Playground: Story = {}

export const AvatarLeft: Story = {
  render: () => (
    <UserComponent
      name="Zoey Lang"
      description="@zoeylang"
      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    />
  ),
}

export const AvatarRight: Story = {
  render: () => (
    <UserComponent
      name="Zoey Lang"
      description="@zoeylang"
      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      avatarPosition="right"
    />
  ),
}

export const WithoutDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <UserComponent name="Zoey Lang" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <UserComponent name="Jane Cooper" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
    </div>
  ),
}

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <UserComponent name="Zoey Lang" description="Frontend Developer" />
      <UserComponent name="Jane Cooper" description="Product Designer" />
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <UserComponent
        name="Zoey Lang"
        description="@zoeylang"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        avatarPosition="left"
      />
      <UserComponent
        name="Zoey Lang"
        description="@zoeylang"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        avatarPosition="right"
      />
    </div>
  ),
}
