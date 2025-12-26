import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxCard } from '../CheckboxCard'

const meta: Meta = {
  title: 'Molecules/CheckboxCard',
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta

type Story = StoryObj

const StateDemo = () => {
  const [states, setStates] = useState({
    default: false,
    defaultChecked: true,
    warning: false,
    warningChecked: true,
    error: false,
    errorChecked: true,
    disabled: false,
    disabledChecked: true,
  })

  const toggle = (key: keyof typeof states) => {
    setStates((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <CheckboxCard
        label="Default"
        description="Default state unchecked"
        checked={states.default}
        onChange={() => toggle('default')}
      />
      <CheckboxCard
        label="Default Checked"
        description="Default state checked"
        checked={states.defaultChecked}
        onChange={() => toggle('defaultChecked')}
      />
      <CheckboxCard
        label="Warning"
        description="Warning state unchecked"
        state="warning"
        checked={states.warning}
        onChange={() => toggle('warning')}
      />
      <CheckboxCard
        label="Warning Checked"
        description="Warning state checked"
        state="warning"
        checked={states.warningChecked}
        onChange={() => toggle('warningChecked')}
      />
      <CheckboxCard
        label="Error"
        description="Error state unchecked"
        state="error"
        checked={states.error}
        onChange={() => toggle('error')}
      />
      <CheckboxCard
        label="Error Checked"
        description="Error state checked"
        state="error"
        checked={states.errorChecked}
        onChange={() => toggle('errorChecked')}
      />
      <CheckboxCard
        label="Disabled"
        description="Disabled state unchecked"
        disabled
        checked={states.disabled}
        onChange={() => toggle('disabled')}
      />
      <CheckboxCard
        label="Disabled Checked"
        description="Disabled state checked"
        disabled
        checked={states.disabledChecked}
        onChange={() => toggle('disabledChecked')}
      />
    </div>
  )
}

export const States: Story = {
  render: () => <StateDemo />,
}
