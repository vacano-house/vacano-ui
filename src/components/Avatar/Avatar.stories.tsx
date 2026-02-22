import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar as AvatarComponent } from './Avatar'
import { Camera, User } from '../../icons/Lucide'

const meta: Meta<typeof AvatarComponent> = {
  title: 'components/Avatar',
  component: AvatarComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
    radius: 'full',
    color: 'default',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    color: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
    bordered: { control: 'boolean' },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    src: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof AvatarComponent>

export const Playground: Story = {
  args: {
    name: 'John Doe',
  },
}

export const WithImage: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        name="Jane Smith"
        size="sm"
      />
      <AvatarComponent
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        name="John Doe"
        size="md"
      />
      <AvatarComponent
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        name="Alex Johnson"
        size="lg"
      />
    </div>
  ),
}

export const Initials: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent name="John Doe" size="sm" />
      <AvatarComponent name="Jane Smith" size="md" color="primary" />
      <AvatarComponent name="Alex" size="lg" color="success" />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent name="SM" size="sm" color="primary" />
      <AvatarComponent name="MD" size="md" color="primary" />
      <AvatarComponent name="LG" size="lg" color="primary" />
    </div>
  ),
}

export const Colors: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent name="DF" color="default" />
      <AvatarComponent name="PR" color="primary" />
      <AvatarComponent name="SC" color="success" />
      <AvatarComponent name="WR" color="warning" />
      <AvatarComponent name="DN" color="danger" />
    </div>
  ),
}

export const Radius: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent name="SM" radius="sm" color="primary" />
      <AvatarComponent name="MD" radius="md" color="primary" />
      <AvatarComponent name="LG" radius="lg" color="primary" />
      <AvatarComponent name="FL" radius="full" color="primary" />
    </div>
  ),
}

export const Bordered: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <AvatarComponent src="https://i.pravatar.cc/150?u=a042581f4e29026024d" bordered size="sm" />
      <AvatarComponent
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        bordered
        size="md"
        color="primary"
      />
      <AvatarComponent
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        bordered
        size="lg"
        color="success"
      />
      <AvatarComponent name="John Doe" bordered color="danger" />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent src="https://i.pravatar.cc/150?u=a042581f4e29026024d" disabled />
      <AvatarComponent name="John Doe" color="primary" disabled />
      <AvatarComponent disabled />
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AvatarComponent icon={<User />} color="primary" size="sm" />
      <AvatarComponent icon={<User />} color="primary" size="md" />
      <AvatarComponent icon={<Camera />} color="success" size="lg" />
    </div>
  ),
}

export const Fallback: Story = {
  name: 'Fallback (no props)',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default fallback</div>
        <AvatarComponent />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Broken image + name</div>
        <AvatarComponent src="https://broken-link.jpg" name="John Doe" color="primary" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Broken image + icon</div>
        <AvatarComponent src="https://broken-link.jpg" icon={<User />} color="danger" />
      </div>
    </div>
  ),
}
