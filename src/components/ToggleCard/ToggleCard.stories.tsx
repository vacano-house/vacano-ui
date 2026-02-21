import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToggleCard as ToggleCardComponent } from './ToggleCard'
import { ToggleCardProps } from './types'

const meta: Meta<typeof ToggleCardComponent> = {
  title: 'components/ToggleCard',
  component: ToggleCardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    fullWidth: false,
    label: 'Toggle card label',
    description: 'Optional description text',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof ToggleCardComponent>

const InteractiveToggleCard = (props: ToggleCardProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <ToggleCardComponent
      {...props}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveToggleCard {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <InteractiveToggleCard
        checked={false}
        label="Unchecked card"
        description="This card is not selected"
        onChange={() => {}}
      />
      <InteractiveToggleCard
        checked={true}
        label="Checked card"
        description="This card is selected"
        onChange={() => {}}
      />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InteractiveToggleCard
            checked={false}
            variant="normal"
            label="Normal unchecked"
            description="Default variant in unchecked state"
            onChange={() => {}}
          />
          <InteractiveToggleCard
            checked={true}
            variant="normal"
            label="Normal checked"
            description="Default variant in checked state"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InteractiveToggleCard
            checked={false}
            variant="error"
            label="Error unchecked"
            description="Error variant in unchecked state"
            onChange={() => {}}
          />
          <InteractiveToggleCard
            checked={true}
            variant="error"
            label="Error checked"
            description="Error variant in checked state"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutDescription: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <InteractiveToggleCard checked={false} label="Remember me" onChange={() => {}} />
      <InteractiveToggleCard checked={true} label="Stay signed in" onChange={() => {}} />
      <InteractiveToggleCard checked={false} label="Subscribe to newsletter" onChange={() => {}} />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ToggleCardComponent
            checked={false}
            disabled
            label="Disabled unchecked"
            description="This option is not available"
            onChange={() => {}}
          />
          <ToggleCardComponent
            checked={true}
            disabled
            label="Disabled checked"
            description="This option is enabled but locked"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ToggleCardComponent
            checked={false}
            disabled
            variant="error"
            label="Disabled error unchecked"
            description="This option has an error and is not available"
            onChange={() => {}}
          />
          <ToggleCardComponent
            checked={true}
            disabled
            variant="error"
            label="Disabled error checked"
            description="This option has an error but is locked"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          fullWidth: false (default)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 500 }}>
          <InteractiveToggleCard
            checked={false}
            label="Default width card"
            description="This card only takes up the space it needs"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>fullWidth: true</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 500 }}>
          <InteractiveToggleCard
            checked={false}
            fullWidth
            label="Full width card"
            description="This card stretches to fill the entire container width"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const SettingsExample: Story = {
  name: 'Example: Settings Panel',
  parameters: { layout: 'padded' },
  render: () => {
    const SettingsForm = () => {
      const [values, setValues] = useState({
        notifications: true,
        darkMode: false,
        autoSave: true,
        analytics: false,
        twoFactor: false,
      })

      const handleChange =
        (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
          setValues((prev) => ({ ...prev, [key]: e.target.checked }))
        }

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 450,
            padding: 24,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Settings</div>
          <ToggleCardComponent
            fullWidth
            checked={values.notifications}
            label="Notifications"
            description="Receive email notifications about account activity"
            onChange={handleChange('notifications')}
          />
          <ToggleCardComponent
            fullWidth
            checked={values.darkMode}
            label="Dark Mode"
            description="Use dark theme across the application"
            onChange={handleChange('darkMode')}
          />
          <ToggleCardComponent
            fullWidth
            checked={values.autoSave}
            label="Auto-save"
            description="Automatically save your work every few minutes"
            onChange={handleChange('autoSave')}
          />
          <ToggleCardComponent
            fullWidth
            checked={values.analytics}
            label="Usage Analytics"
            description="Share anonymous usage data to help improve the product"
            onChange={handleChange('analytics')}
          />
          <ToggleCardComponent
            fullWidth
            checked={values.twoFactor}
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
            onChange={handleChange('twoFactor')}
          />
        </div>
      )
    }

    return <SettingsForm />
  },
}
