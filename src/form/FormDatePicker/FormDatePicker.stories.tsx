import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormDatePicker } from './FormDatePicker'
import { FormInput } from '../FormInput'
import { FormSelect } from '../FormSelect'
import { Button, FieldRow } from '../../components'
import { validation } from '../../lib'

const meta: Meta<typeof FormDatePicker> = {
  title: 'form/FormDatePicker',
  component: FormDatePicker,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormDatePicker>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { date: null as Date | null } })

  return <FormDatePicker control={control} name="date" label="Date" placeholder="Select date..." />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { date: new Date(2024, 5, 15) as Date | null } })

  return <FormDatePicker control={control} name="date" label="Date" placeholder="Select date..." />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  date: yup.date().required('Date is required').typeError('Date is required'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { date: undefined },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormDatePicker
        fullWidth
        control={control}
        name="date"
        label="Event Date"
        placeholder="Select date..."
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

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
]

const eventSchema = yup.object({
  name: yup.string().required('Event name is required'),
  email: validation.email().required('Email is required'),
  country: yup.string().required('Country is required'),
  startDate: yup.date().required('Start date is required').typeError('Start date is required'),
  endDate: yup.date().required('End date is required').typeError('End date is required'),
})

type EventFormValues = yup.InferType<typeof eventSchema>

const EventFormExample = () => {
  const { control, handleSubmit } = useForm<EventFormValues>({
    defaultValues: {
      name: '',
      email: '',
      country: '',
      startDate: undefined,
      endDate: undefined,
    },
    resolver: yupResolver(eventSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: EventFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}
    >
      <FormInput
        fullWidth
        control={control}
        name="name"
        label="Event Name"
        placeholder="My Event"
      />
      <FieldRow>
        <FormInput
          fullWidth
          control={control}
          name="email"
          label="Contact Email"
          placeholder="john@example.com"
          type="email"
        />
        <FormSelect
          fullWidth
          control={control}
          name="country"
          label="Country"
          options={countryOptions}
          placeholder="Select country..."
        />
      </FieldRow>
      <FieldRow>
        <FormDatePicker
          fullWidth
          control={control}
          name="startDate"
          label="Start Date"
          placeholder="Select start..."
        />
        <FormDatePicker
          fullWidth
          control={control}
          name="endDate"
          label="End Date"
          placeholder="Select end..."
        />
      </FieldRow>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <Button variant="system" type="button">
          Cancel
        </Button>
        <Button variant="normal" type="submit">
          Create Event
        </Button>
      </div>
    </form>
  )
}

export const EventForm: Story = {
  name: 'Example: Event Form',
  parameters: { layout: 'padded' },
  render: () => <EventFormExample />,
}
