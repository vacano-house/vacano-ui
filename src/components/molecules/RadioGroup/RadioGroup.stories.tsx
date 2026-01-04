import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup as RadioGroupComponent } from './RadioGroup'

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'molecules/RadioGroup',
  component: RadioGroupComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    value: 'option1',
    label: 'Select an option',
    name: 'radio-group',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof RadioGroupComponent>

const InteractiveStory = () => {
  const [value, setValue] = useState<string | null>('small')

  return (
    <RadioGroupComponent
      label="Select size"
      name="size"
      options={[
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const RadioGroup: Story = {
  render: () => <InteractiveStory />,
}

const WithoutLabelStory = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <RadioGroupComponent
      name="options"
      options={[
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C', value: 'c' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const WithoutLabel: Story = {
  render: () => <WithoutLabelStory />,
}

const DisabledStory = () => {
  const [value, setValue] = useState<string | null>('option1')

  return (
    <RadioGroupComponent
      label="Disabled group"
      name="disabled"
      disabled
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const Disabled: Story = {
  render: () => <DisabledStory />,
}

const NoSelectionStory = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <RadioGroupComponent
      label="Choose your plan"
      name="plan"
      options={[
        { label: 'Free', value: 'free' },
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const NoSelection: Story = {
  render: () => <NoSelectionStory />,
}
