import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider as DividerComponent } from './Divider'

const meta: Meta<typeof DividerComponent> = {
  title: 'components/Divider',
  component: DividerComponent,
  parameters: { layout: 'centered' },
  args: { children: '', spacing: 8 },
  argTypes: {
    children: { control: 'text' },
    spacing: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof DividerComponent>

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DividerComponent {...args} />
    </div>
  ),
}

export const Basic: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <div style={{ padding: '8px 0' }}>Item one</div>
      <DividerComponent />
      <div style={{ padding: '8px 0' }}>Item two</div>
      <DividerComponent />
      <div style={{ padding: '8px 0' }}>Item three</div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <div style={{ padding: '8px 0' }}>Sign in with email</div>
      <DividerComponent>OR</DividerComponent>
      <div style={{ padding: '8px 0' }}>Sign in with Google</div>
    </div>
  ),
}

export const CustomSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 40 }}>
      <div style={{ width: 200 }}>
        <div style={{ fontSize: 12, color: '#888' }}>spacing=4</div>
        <div>Item A</div>
        <DividerComponent spacing={4} />
        <div>Item B</div>
        <DividerComponent spacing={4} />
        <div>Item C</div>
      </div>
      <div style={{ width: 200 }}>
        <div style={{ fontSize: 12, color: '#888' }}>spacing=16</div>
        <div>Item A</div>
        <DividerComponent spacing={16} />
        <div>Item B</div>
        <DividerComponent spacing={16} />
        <div>Item C</div>
      </div>
    </div>
  ),
}

export const InDropdown: Story = {
  render: () => (
    <div
      style={{
        width: 200,
        padding: '4px 0',
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ padding: '6px 12px', cursor: 'pointer' }}>Edit</div>
      <div style={{ padding: '6px 12px', cursor: 'pointer' }}>Duplicate</div>
      <DividerComponent spacing={4} />
      <div style={{ padding: '6px 12px', cursor: 'pointer' }}>Archive</div>
      <div style={{ padding: '6px 12px', cursor: 'pointer', color: '#C1121F' }}>Delete</div>
    </div>
  ),
}
