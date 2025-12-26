import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '../Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

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

const CheckboxRow = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label={label} />
}

const LayoutsExample = () => (
  <div style={{ maxWidth: '600px' }}>
    <h3 style={{ marginBottom: '24px' }}>States</h3>

    <div style={labelStyle}>unchecked / checked / indeterminate</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
      <Checkbox checked={true} onChange={() => {}} label="Checked" />
      <Checkbox checked={false} indeterminate onChange={() => {}} label="Indeterminate" />
    </div>

    <div style={labelStyle}>disabled</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Checkbox checked={false} disabled onChange={() => {}} label="Disabled" />
      <Checkbox checked={true} disabled onChange={() => {}} label="Disabled checked" />
      <Checkbox
        checked={false}
        disabled
        indeterminate
        onChange={() => {}}
        label="Disabled indeterminate"
      />
    </div>

    <div style={labelStyle}>state: warning</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Checkbox checked={false} state="warning" onChange={() => {}} label="Warning" />
      <Checkbox checked={true} state="warning" onChange={() => {}} label="Warning checked" />
      <Checkbox
        checked={false}
        state="warning"
        indeterminate
        onChange={() => {}}
        label="Warning indeterminate"
      />
    </div>

    <div style={labelStyle}>state: error</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <Checkbox checked={false} state="error" onChange={() => {}} label="Error" />
      <Checkbox checked={true} state="error" onChange={() => {}} label="Error checked" />
      <Checkbox
        checked={false}
        state="error"
        indeterminate
        onChange={() => {}}
        label="Error indeterminate"
      />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, gap: 24px</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
      <CheckboxRow label="Option A" />
      <CheckboxRow label="Option B" />
      <CheckboxRow label="Option C" />
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
      <CheckboxRow label="Email notifications" />
      <CheckboxRow label="SMS notifications" />
      <CheckboxRow label="Push notifications" />
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
      <CheckboxRow label="Option 1" />
      <CheckboxRow label="Option 2" />
      <CheckboxRow label="Option 3" />
      <CheckboxRow label="Option 4" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Without Labels</h3>

    <div style={labelStyle}>flex, gap: 16px (icon only)</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
      <Checkbox checked={false} onChange={() => {}} />
      <Checkbox checked={true} onChange={() => {}} />
      <Checkbox checked={false} indeterminate onChange={() => {}} />
      <Checkbox checked={false} disabled onChange={() => {}} />
      <Checkbox checked={true} disabled onChange={() => {}} />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
