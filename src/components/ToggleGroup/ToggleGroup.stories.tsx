import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToggleGroup as ToggleGroupComponent } from './ToggleGroup'

const meta: Meta<typeof ToggleGroupComponent> = {
  title: 'components/ToggleGroup',
  component: ToggleGroupComponent,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ToggleGroupComponent>

const notifications = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' },
  { label: 'In-app', value: 'inapp' },
]

const InteractiveToggleGroup = (
  props: Omit<React.ComponentProps<typeof ToggleGroupComponent>, 'value' | 'onChange'> & {
    defaultValue?: string[]
  },
) => {
  const [value, setValue] = useState(props.defaultValue ?? [])

  return <ToggleGroupComponent {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: () => <InteractiveToggleGroup label="Notifications" options={notifications} />,
}

export const WithDefaultValue: Story = {
  render: () => (
    <InteractiveToggleGroup
      label="Notifications"
      options={notifications}
      defaultValue={['email', 'push']}
    />
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <InteractiveToggleGroup
        label="Normal"
        variant="normal"
        options={notifications}
        defaultValue={['email']}
      />
      <InteractiveToggleGroup
        label="Error"
        variant="error"
        options={notifications}
        defaultValue={['email']}
      />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <ToggleGroupComponent
        label="Disabled"
        disabled
        options={notifications}
        value={['email', 'push']}
        onChange={() => {}}
      />
      <ToggleGroupComponent
        label="Disabled Error"
        disabled
        variant="error"
        options={notifications}
        value={['email']}
        onChange={() => {}}
      />
    </div>
  ),
}

export const SettingsExample: Story = {
  name: 'Example: Feature Flags',
  parameters: { layout: 'padded' },
  render: () => (
    <InteractiveToggleGroup
      label="Feature Flags"
      options={[
        { label: 'Dark mode', value: 'dark' },
        { label: 'Beta features', value: 'beta' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Auto-updates', value: 'updates' },
        { label: 'Crash reports', value: 'crash' },
      ]}
      defaultValue={['dark', 'updates']}
    />
  ),
}
