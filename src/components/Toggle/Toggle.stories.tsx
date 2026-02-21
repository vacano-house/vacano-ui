import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toggle as ToggleComponent } from './Toggle'
import { ToggleProps } from './types'

const meta: Meta<typeof ToggleComponent> = {
  title: 'components/Toggle',
  component: ToggleComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Toggle label',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof ToggleComponent>

const InteractiveToggle = (props: ToggleProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <ToggleComponent {...props} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveToggle {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <InteractiveToggle checked={false} label="Off" onChange={() => {}} />
      <InteractiveToggle checked={true} label="On" onChange={() => {}} />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveToggle checked={false} variant="normal" label="Off" onChange={() => {}} />
          <InteractiveToggle checked={true} variant="normal" label="On" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveToggle checked={false} variant="error" label="Off" onChange={() => {}} />
          <InteractiveToggle checked={true} variant="error" label="On" onChange={() => {}} />
        </div>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <ToggleComponent checked={false} disabled label="Off" onChange={() => {}} />
          <ToggleComponent checked={true} disabled label="On" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <ToggleComponent
            checked={false}
            disabled
            variant="error"
            label="Off"
            onChange={() => {}}
          />
          <ToggleComponent checked={true} disabled variant="error" label="On" onChange={() => {}} />
        </div>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <InteractiveToggle checked={false} onChange={() => {}} />
      <InteractiveToggle checked={true} onChange={() => {}} />
      <span style={{ color: '#666', fontSize: 14 }}>Toggles without labels</span>
    </div>
  ),
}

export const SettingsExample: Story = {
  name: 'Example: Settings',
  parameters: { layout: 'padded' },
  render: () => {
    const SettingsForm = () => {
      const [notifications, setNotifications] = useState(true)
      const [darkMode, setDarkMode] = useState(false)
      const [autoSave, setAutoSave] = useState(true)
      const [analytics, setAnalytics] = useState(false)

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            maxWidth: 400,
            padding: 24,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600 }}>Preferences</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Notifications</div>
              <div style={{ fontSize: 12, color: '#666' }}>Receive email notifications</div>
            </div>
            <ToggleComponent
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Dark Mode</div>
              <div style={{ fontSize: 12, color: '#666' }}>Use dark theme</div>
            </div>
            <ToggleComponent checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Auto-save</div>
              <div style={{ fontSize: 12, color: '#666' }}>Save changes automatically</div>
            </div>
            <ToggleComponent checked={autoSave} onChange={(e) => setAutoSave(e.target.checked)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Analytics</div>
              <div style={{ fontSize: 12, color: '#666' }}>Share usage data</div>
            </div>
            <ToggleComponent checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
          </div>
        </div>
      )
    }

    return <SettingsForm />
  },
}
