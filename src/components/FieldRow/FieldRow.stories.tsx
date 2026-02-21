import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FieldRow } from './FieldRow'
import { Button } from '../Button'
import { Input, InputProps } from '../Input'
import { Select } from '../Select'
import { FormInput } from '../../form'
import { validation } from '../../lib'

const meta: Meta<typeof FieldRow> = {
  title: 'components/FieldRow',
  component: FieldRow,
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj<typeof FieldRow>

const InteractiveInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value ?? '')

  return <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Playground: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput
        fullWidth
        variant="error"
        label="Email"
        placeholder="Enter email"
        message="Invalid email address"
      />
      <InteractiveInput fullWidth label="Username" placeholder="Enter username" />
    </FieldRow>
  ),
}

export const AllWithMessages: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput
        fullWidth
        variant="error"
        label="First Name"
        placeholder="John"
        message="First name is required"
      />
      <InteractiveInput
        fullWidth
        variant="error"
        label="Last Name"
        placeholder="Doe"
        message="Last name is required"
      />
    </FieldRow>
  ),
}

export const MixedMessages: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput
        fullWidth
        variant="error"
        label="Email"
        placeholder="Enter email"
        message="Invalid email"
      />
      <InteractiveInput fullWidth label="Phone" placeholder="Enter phone" />
      <InteractiveInput
        fullWidth
        variant="error"
        label="City"
        placeholder="Enter city"
        message="City is required"
      />
    </FieldRow>
  ),
}

export const WithoutLabels: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput fullWidth placeholder="No label" message="Has a message" variant="error" />
      <InteractiveInput fullWidth placeholder="No label either" />
    </FieldRow>
  ),
}

export const MixedLabelAndMessage: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput fullWidth label="Has label only" placeholder="First" />
      <InteractiveInput
        fullWidth
        placeholder="Has message only"
        message="Validation message"
        variant="error"
      />
      <InteractiveInput
        fullWidth
        label="Has both"
        placeholder="Third"
        message="Both label and message"
        variant="error"
      />
    </FieldRow>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput fullWidth label="City" placeholder="New York" />
      <InteractiveInput
        fullWidth
        variant="error"
        label="State"
        placeholder="NY"
        message="State is required"
      />
      <InteractiveInput fullWidth label="ZIP Code" placeholder="10001" />
    </FieldRow>
  ),
}

export const CustomGap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>gap: 8</div>
        <FieldRow gap={8}>
          <InteractiveInput
            fullWidth
            variant="error"
            label="Email"
            placeholder="Enter email"
            message="Required"
          />
          <InteractiveInput fullWidth label="Name" placeholder="Enter name" />
        </FieldRow>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>gap: 32</div>
        <FieldRow gap={32}>
          <InteractiveInput
            fullWidth
            variant="error"
            label="Email"
            placeholder="Enter email"
            message="Required"
          />
          <InteractiveInput fullWidth label="Name" placeholder="Enter name" />
        </FieldRow>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>gap: &quot;2rem&quot;</div>
        <FieldRow gap="2rem">
          <InteractiveInput
            fullWidth
            variant="error"
            label="Email"
            placeholder="Enter email"
            message="Required"
          />
          <InteractiveInput fullWidth label="Name" placeholder="Enter name" />
        </FieldRow>
      </div>
    </div>
  ),
}

export const CompactSize: Story = {
  render: () => (
    <FieldRow>
      <InteractiveInput
        fullWidth
        size="compact"
        variant="error"
        label="Email"
        placeholder="Enter email"
        message="Invalid email"
      />
      <InteractiveInput fullWidth size="compact" label="Username" placeholder="Enter username" />
    </FieldRow>
  ),
}

const formSchema = yup.object({
  email: validation.email().required('Email is required'),
  username: yup.string().required('Username is required').min(3, 'At least 3 characters'),
})

type FormValues = yup.InferType<typeof formSchema>

const WithFormInputExample = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: '', username: '' },
    resolver: yupResolver(formSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: FormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <FieldRow>
        <FormInput
          fullWidth
          control={control}
          name="email"
          label="Email"
          placeholder="john@example.com"
          type="email"
        />
        <FormInput
          fullWidth
          control={control}
          name="username"
          label="Username"
          placeholder="johndoe"
        />
      </FieldRow>
      <div>
        <Button variant="normal" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export const WithFormInput: Story = {
  render: () => <WithFormInputExample />,
}

const WithSelectExample = () => {
  const [country, setCountry] = useState('')

  return (
    <FieldRow>
      <InteractiveInput
        fullWidth
        variant="error"
        label="City"
        placeholder="Enter city"
        message="City is required"
      />
      <Select
        fullWidth
        label="Country"
        value={country}
        onChange={setCountry}
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'de', label: 'Germany' },
        ]}
      />
    </FieldRow>
  )
}

export const WithSelect: Story = {
  render: () => <WithSelectExample />,
}
