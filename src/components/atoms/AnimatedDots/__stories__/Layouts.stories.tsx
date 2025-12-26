import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedDots } from '../AnimatedDots'

const meta: Meta<typeof AnimatedDots> = {
  title: 'Atoms/AnimatedDots',
  component: AnimatedDots,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof AnimatedDots>

const containerStyle = {
  border: '1px dashed #ccc',
  padding: '16px',
  marginBottom: '16px',
  background: '#fafafa',
}

const labelStyle = {
  fontSize: '12px',
  color: '#666',
  marginBottom: '8px',
  fontFamily: 'monospace',
}

const LayoutsExample = () => (
  <div style={{ maxWidth: '600px' }}>
    <h3 style={{ marginBottom: '24px' }}>Sizes</h3>

    <div style={labelStyle}>Various sizes: 4, 6, 8, 10</div>
    <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', gap: '24px' }}>
      <AnimatedDots size={4} />
      <AnimatedDots size={6} />
      <AnimatedDots size={8} />
      <AnimatedDots size={10} />
    </div>

    <h3 style={{ margin: '24px 0' }}>Color Inheritance</h3>

    <div style={labelStyle}>color: inherit (currentColor)</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <div style={{ color: '#0050c8' }}>
        <AnimatedDots size={6} />
      </div>
      <div style={{ color: '#009650' }}>
        <AnimatedDots size={6} />
      </div>
      <div style={{ color: '#b48200' }}>
        <AnimatedDots size={6} />
      </div>
      <div style={{ color: '#c83232' }}>
        <AnimatedDots size={6} />
      </div>
    </div>

    <h3 style={{ margin: '24px 0' }}>Centered in Container</h3>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <AnimatedDots size={8} />
    </div>

    <h3 style={{ margin: '24px 0' }}>Dark Background</h3>

    <div style={labelStyle}>white dots on dark background</div>
    <div
      style={{
        ...containerStyle,
        background: '#1a1a1a',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        padding: '32px',
      }}
    >
      <AnimatedDots size={8} />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
