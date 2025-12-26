import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxGroup } from '../CheckboxGroup'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxGroup>

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

const featureOptions = [
  { label: 'Dark Mode', value: 'darkMode' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Auto-save', value: 'autoSave' },
]

const permissionOptions = [
  { label: 'Read', value: 'read' },
  { label: 'Write', value: 'write' },
  { label: 'Delete', value: 'delete' },
  { label: 'Admin', value: 'admin' },
]

const LayoutsExample = () => {
  const [features, setFeatures] = useState(['darkMode'])
  const [permissions, setPermissions] = useState(['read', 'write'])

  return (
    <div style={{ maxWidth: '600px' }}>
      <h3 style={{ marginBottom: '24px' }}>With Label</h3>

      <div style={labelStyle}>label=&quot;Features&quot;</div>
      <div style={containerStyle}>
        <CheckboxGroup
          label="Features"
          options={featureOptions}
          value={features}
          onChange={setFeatures}
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Without Label</h3>

      <div style={labelStyle}>no label prop</div>
      <div style={containerStyle}>
        <CheckboxGroup options={permissionOptions} value={permissions} onChange={setPermissions} />
      </div>

      <h3 style={{ margin: '24px 0' }}>Disabled State</h3>

      <div style={labelStyle}>disabled=true</div>
      <div style={containerStyle}>
        <CheckboxGroup
          label="Permissions"
          options={permissionOptions}
          value={['read']}
          onChange={() => {}}
          disabled
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

      <div style={labelStyle}>flex, gap: 24px</div>
      <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
        <CheckboxGroup
          label="Features"
          options={featureOptions}
          value={features}
          onChange={setFeatures}
        />
        <CheckboxGroup
          label="Permissions"
          options={permissionOptions}
          value={permissions}
          onChange={setPermissions}
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

      <div style={labelStyle}>grid, grid-template-columns: repeat(2, 1fr)</div>
      <div
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
      >
        <CheckboxGroup
          label="Features"
          options={featureOptions}
          value={features}
          onChange={setFeatures}
        />
        <CheckboxGroup
          label="Permissions"
          options={permissionOptions}
          value={permissions}
          onChange={setPermissions}
        />
      </div>
    </div>
  )
}

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
