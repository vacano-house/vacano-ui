import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormCheckboxCard } from './FormCheckboxCard'
import { Button } from '../../components'

const meta: Meta<typeof FormCheckboxCard> = {
  title: 'form/FormCheckboxCard',
  component: FormCheckboxCard,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormCheckboxCard>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { premium: false } })

  return (
    <FormCheckboxCard
      control={control}
      name="premium"
      label="Premium Plan"
      description="Access to all features and priority support"
    />
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { notifications: true } })

  return (
    <FormCheckboxCard
      control={control}
      name="notifications"
      label="Email Notifications"
      description="Receive updates about your account"
    />
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const MultipleForm = () => {
  const { control } = useForm({
    defaultValues: { email: true, sms: false, push: false },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FormCheckboxCard
        fullWidth
        control={control}
        name="email"
        label="Email"
        description="Receive notifications via email"
      />
      <FormCheckboxCard
        fullWidth
        control={control}
        name="sms"
        label="SMS"
        description="Receive notifications via text message"
      />
      <FormCheckboxCard
        fullWidth
        control={control}
        name="push"
        label="Push"
        description="Receive push notifications on your device"
      />
    </div>
  )
}

export const MultipleCards: Story = {
  name: 'Example: Notification Preferences',
  parameters: { layout: 'padded' },
  render: () => <MultipleForm />,
}

const validationSchema = yup.object({
  terms: yup.boolean().oneOf([true], 'You must accept the terms').required(),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { terms: false },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormCheckboxCard
        fullWidth
        control={control}
        name="terms"
        label="Terms & Conditions"
        description="I agree to the terms of service and privacy policy"
      />
      <Button variant="normal" type="submit">
        Submit
      </Button>
    </form>
  )
}

export const Validation: Story = {
  name: 'Yup Validation',
  parameters: { layout: 'padded' },
  render: () => <ValidationForm />,
}
