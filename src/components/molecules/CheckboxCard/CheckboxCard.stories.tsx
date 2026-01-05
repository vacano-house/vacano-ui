import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxCard as CheckboxCardComponent } from './CheckboxCard'

const meta: Meta<typeof CheckboxCardComponent> = {
  title: 'molecules/CheckboxCard',
  component: CheckboxCardComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Enable notifications',
    description: 'Receive updates about new features and changes',
    checked: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['normal', 'error'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CheckboxCardComponent>

const InteractiveStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckboxCardComponent
      label="Enable notifications"
      description="Receive updates about new features and changes"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const CheckboxCard: Story = {
  render: () => <InteractiveStory />,
}

const CheckedStory = () => {
  const [checked, setChecked] = useState(true)

  return (
    <CheckboxCardComponent
      label="Dark mode"
      description="Use dark theme across the application"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Checked: Story = {
  render: () => <CheckedStory />,
}

const WithoutDescriptionStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckboxCardComponent
      label="Remember me"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const WithoutDescription: Story = {
  render: () => <WithoutDescriptionStory />,
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCardComponent
        label="Disabled unchecked"
        description="This option is not available"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <CheckboxCardComponent
        label="Disabled checked"
        description="This option is enabled but locked"
        checked={true}
        disabled
        onChange={() => {}}
      />
    </div>
  ),
}

const ErrorStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckboxCardComponent
      label="Accept terms and conditions"
      description="You must accept to continue"
      variant="error"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Error: Story = {
  render: () => <ErrorStory />,
}

const FullWidthStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      <CheckboxCardComponent
        label="Full width card"
        description="This card stretches to fill the container"
        fullWidth
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  )
}

export const FullWidth: Story = {
  render: () => <FullWidthStory />,
  decorators: [],
}

const MultipleCardsStory = () => {
  const [values, setValues] = useState({
    email: true,
    sms: false,
    push: false,
  })

  const handleChange = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: e.target.checked }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCardComponent
        label="Email notifications"
        description="Receive updates via email"
        checked={values.email}
        onChange={handleChange('email')}
      />
      <CheckboxCardComponent
        label="SMS notifications"
        description="Receive updates via text message"
        checked={values.sms}
        onChange={handleChange('sms')}
      />
      <CheckboxCardComponent
        label="Push notifications"
        description="Receive updates on your device"
        checked={values.push}
        onChange={handleChange('push')}
      />
    </div>
  )
}

export const MultipleCards: Story = {
  render: () => <MultipleCardsStory />,
}
