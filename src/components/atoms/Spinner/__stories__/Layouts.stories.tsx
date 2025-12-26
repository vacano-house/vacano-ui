import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '../Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

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

    <div style={labelStyle}>Various sizes: 16, 24, 32, 48, 64</div>
    <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Spinner size={16} />
      <Spinner size={24} />
      <Spinner size={32} />
      <Spinner size={48} />
      <Spinner size={64} />
    </div>

    <h3 style={{ margin: '24px 0' }}>Color Inheritance</h3>

    <div style={labelStyle}>color: inherit (currentColor)</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <div style={{ color: '#0050c8' }}>
        <Spinner size={32} />
      </div>
      <div style={{ color: '#009650' }}>
        <Spinner size={32} />
      </div>
      <div style={{ color: '#b48200' }}>
        <Spinner size={32} />
      </div>
      <div style={{ color: '#c83232' }}>
        <Spinner size={32} />
      </div>
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout</h3>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center' }}>
      <Spinner size={32} />
    </div>

    <div style={labelStyle}>flex, align-items: center (with text)</div>
    <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner size={16} />
      <span>Loading...</span>
    </div>

    <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

    <div style={labelStyle}>grid, place-items: center</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        placeItems: 'center',
        height: '100px',
      }}
    >
      <Spinner size={48} />
    </div>

    <h3 style={{ margin: '24px 0' }}>Dark Background</h3>

    <div style={labelStyle}>white spinner on dark background</div>
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
      <Spinner size={48} />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
