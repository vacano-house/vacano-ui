import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio } from '../Radio'

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Radio>

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
    <h3 style={{ marginBottom: '24px' }}>States</h3>

    <div style={labelStyle}>unchecked / checked</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Radio checked={false} onChange={() => {}} label="Unchecked" />
      <Radio checked={true} onChange={() => {}} label="Checked" />
    </div>

    <div style={labelStyle}>disabled</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Radio checked={false} disabled onChange={() => {}} label="Disabled" />
      <Radio checked={true} disabled onChange={() => {}} label="Disabled checked" />
    </div>

    <div style={labelStyle}>state: warning</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Radio checked={false} state="warning" onChange={() => {}} label="Warning" />
      <Radio checked={true} state="warning" onChange={() => {}} label="Warning checked" />
    </div>

    <div style={labelStyle}>state: error</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Radio checked={false} state="error" onChange={() => {}} label="Error" />
      <Radio checked={true} state="error" onChange={() => {}} label="Error checked" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, gap: 24px</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Radio checked={false} onChange={() => {}} label="Option A" />
      <Radio checked={false} onChange={() => {}} label="Option B" />
      <Radio checked={false} onChange={() => {}} label="Option C" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Vertical</h3>

    <div style={labelStyle}>flex-direction: column, gap: 12px</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
      }}
    >
      <Radio checked={false} onChange={() => {}} label="Small" />
      <Radio checked={false} onChange={() => {}} label="Medium" />
      <Radio checked={false} onChange={() => {}} label="Large" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

    <div style={labelStyle}>grid, grid-template-columns: repeat(2, 1fr)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}
    >
      <Radio checked={false} onChange={() => {}} label="Option 1" />
      <Radio checked={false} onChange={() => {}} label="Option 2" />
      <Radio checked={false} onChange={() => {}} label="Option 3" />
      <Radio checked={false} onChange={() => {}} label="Option 4" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Without Labels</h3>

    <div style={labelStyle}>flex, gap: 16px (icon only)</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
      <Radio checked={false} onChange={() => {}} />
      <Radio checked={true} onChange={() => {}} />
      <Radio checked={false} disabled onChange={() => {}} />
      <Radio checked={true} disabled onChange={() => {}} />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
