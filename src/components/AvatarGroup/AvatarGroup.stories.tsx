import type { Meta, StoryObj } from '@storybook/react-vite'

import { AvatarGroup as AvatarGroupComponent } from './AvatarGroup'
import { Avatar } from '../Avatar/Avatar'

const meta: Meta<typeof AvatarGroupComponent> = {
  title: 'components/AvatarGroup',
  component: AvatarGroupComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
    max: 5,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    max: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof AvatarGroupComponent>

export const Playground: Story = {
  render: (args) => (
    <AvatarGroupComponent {...args}>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Alice" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Bob" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" name="Charlie" />
      <Avatar name="Diana" color="primary" />
    </AvatarGroupComponent>
  ),
}

export const WithMax: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>max=3 (6 avatars)</div>
        <AvatarGroupComponent max={3}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Alice" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Bob" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" name="Charlie" />
          <Avatar name="Diana" color="primary" />
          <Avatar name="Eve" color="success" />
          <Avatar name="Frank" color="warning" />
        </AvatarGroupComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>max=2 (5 avatars)</div>
        <AvatarGroupComponent max={2}>
          <Avatar name="Alice" color="primary" />
          <Avatar name="Bob" color="success" />
          <Avatar name="Charlie" color="warning" />
          <Avatar name="Diana" color="danger" />
          <Avatar name="Eve" color="default" />
        </AvatarGroupComponent>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Small</div>
        <AvatarGroupComponent size="sm">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Alice" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Bob" />
          <Avatar name="Charlie" color="primary" />
        </AvatarGroupComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Medium</div>
        <AvatarGroupComponent size="md">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Alice" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Bob" />
          <Avatar name="Charlie" color="primary" />
        </AvatarGroupComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Large</div>
        <AvatarGroupComponent size="lg">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Alice" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Bob" />
          <Avatar name="Charlie" color="primary" />
        </AvatarGroupComponent>
      </div>
    </div>
  ),
}

export const Bordered: Story = {
  render: () => (
    <AvatarGroupComponent>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" bordered color="primary" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" bordered color="success" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" bordered color="warning" />
      <Avatar name="JD" bordered color="danger" />
    </AvatarGroupComponent>
  ),
}

export const InitialsOnly: Story = {
  render: () => (
    <AvatarGroupComponent>
      <Avatar name="Alice Brown" color="primary" />
      <Avatar name="Bob Carter" color="success" />
      <Avatar name="Charlie Davis" color="warning" />
      <Avatar name="Diana Evans" color="danger" />
    </AvatarGroupComponent>
  ),
}
