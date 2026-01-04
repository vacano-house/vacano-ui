import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioCard as RadioCardComponent } from './RadioCard'

const meta: Meta<typeof RadioCardComponent> = {
  title: 'molecules/RadioCard',
  component: RadioCardComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Standard plan',
    description: 'Best for small teams and startups',
    checked: false,
    name: 'plan',
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

type Story = StoryObj<typeof RadioCardComponent>

const InteractiveStory = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCardComponent
        name="plan"
        label="Free"
        description="For personal projects"
        checked={value === 'free'}
        onChange={() => setValue('free')}
      />
      <RadioCardComponent
        name="plan"
        label="Pro"
        description="For growing teams"
        checked={value === 'pro'}
        onChange={() => setValue('pro')}
      />
      <RadioCardComponent
        name="plan"
        label="Enterprise"
        description="For large organizations"
        checked={value === 'enterprise'}
        onChange={() => setValue('enterprise')}
      />
    </div>
  )
}

export const RadioCard: Story = {
  render: () => <InteractiveStory />,
}

export const Checked: Story = {
  render: () => (
    <RadioCardComponent
      name="single"
      label="Selected option"
      description="This option is currently selected"
      checked={true}
      onChange={() => {}}
    />
  ),
}

const WithoutDescriptionStory = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCardComponent
        name="size"
        label="Small"
        checked={value === 'small'}
        onChange={() => setValue('small')}
      />
      <RadioCardComponent
        name="size"
        label="Medium"
        checked={value === 'medium'}
        onChange={() => setValue('medium')}
      />
      <RadioCardComponent
        name="size"
        label="Large"
        checked={value === 'large'}
        onChange={() => setValue('large')}
      />
    </div>
  )
}

export const WithoutDescription: Story = {
  render: () => <WithoutDescriptionStory />,
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCardComponent
        name="disabled"
        label="Disabled unchecked"
        description="This option is not available"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <RadioCardComponent
        name="disabled"
        label="Disabled checked"
        description="This option is selected but locked"
        checked={true}
        disabled
        onChange={() => {}}
      />
    </div>
  ),
}

const ErrorStory = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCardComponent
        name="error"
        label="Option A"
        description="Please select an option"
        variant="error"
        checked={value === 'a'}
        onChange={() => setValue('a')}
      />
      <RadioCardComponent
        name="error"
        label="Option B"
        description="Please select an option"
        variant="error"
        checked={value === 'b'}
        onChange={() => setValue('b')}
      />
    </div>
  )
}

export const Error: Story = {
  render: () => <ErrorStory />,
}

const FullWidthStory = () => {
  const [value, setValue] = useState<string | null>('monthly')

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCardComponent
        name="billing"
        label="Monthly billing"
        description="Pay month-to-month, cancel anytime"
        fullWidth
        checked={value === 'monthly'}
        onChange={() => setValue('monthly')}
      />
      <RadioCardComponent
        name="billing"
        label="Annual billing"
        description="Save 20% with annual payment"
        fullWidth
        checked={value === 'annual'}
        onChange={() => setValue('annual')}
      />
    </div>
  )
}

export const FullWidth: Story = {
  render: () => <FullWidthStory />,
  decorators: [],
}
