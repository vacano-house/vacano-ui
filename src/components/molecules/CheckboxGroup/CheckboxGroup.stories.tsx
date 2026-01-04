import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxGroup as CheckboxGroupComponent } from './CheckboxGroup'

const meta: Meta<typeof CheckboxGroupComponent> = {
  title: 'molecules/CheckboxGroup',
  component: CheckboxGroupComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    value: ['option1'],
    label: 'Select options',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxGroupComponent>

const InteractiveStory = () => {
  const [value, setValue] = useState<string[]>(['option1'])

  return (
    <CheckboxGroupComponent
      label="Select your preferences"
      options={[
        { label: 'Email notifications', value: 'email' },
        { label: 'SMS notifications', value: 'sms' },
        { label: 'Push notifications', value: 'push' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const CheckboxGroup: Story = {
  render: () => <InteractiveStory />,
}

const WithoutLabelStory = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <CheckboxGroupComponent
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
  const [value, setValue] = useState<string[]>(['option1'])

  return (
    <CheckboxGroupComponent
      label="Disabled group"
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

const AllSelectedStory = () => {
  const [value, setValue] = useState<string[]>(['a', 'b', 'c'])

  return (
    <CheckboxGroupComponent
      label="All selected"
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

export const AllSelected: Story = {
  render: () => <AllSelectedStory />,
}
