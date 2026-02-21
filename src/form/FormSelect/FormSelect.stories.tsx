import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormSelect } from './FormSelect'
import { FormInput } from '../FormInput'
import { Button, FieldRow } from '../../components'
import { validation } from '../../lib'

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
]

const meta: Meta<typeof FormSelect> = {
  title: 'form/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormSelect>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { country: '' } })

  return (
    <FormSelect
      control={control}
      name="country"
      label="Country"
      options={countryOptions}
      placeholder="Select country..."
    />
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { country: 'de' } })

  return <FormSelect control={control} name="country" label="Country" options={countryOptions} />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  country: yup.string().required('Country is required'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { country: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormSelect
        fullWidth
        control={control}
        name="country"
        label="Country"
        options={countryOptions}
        placeholder="Select country..."
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

const profileSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: validation.email().required('Email is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
})

type ProfileFormValues = yup.InferType<typeof profileSchema>

const ProfileFormExample = () => {
  const { control, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      city: '',
    },
    resolver: yupResolver(profileSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ProfileFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}
    >
      <FieldRow>
        <FormInput
          fullWidth
          control={control}
          name="firstName"
          label="First Name"
          placeholder="John"
        />
        <FormInput
          fullWidth
          control={control}
          name="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </FieldRow>
      <FormInput
        fullWidth
        control={control}
        name="email"
        label="Email"
        placeholder="john@example.com"
        type="email"
      />
      <FieldRow>
        <FormSelect
          fullWidth
          control={control}
          name="country"
          label="Country"
          options={countryOptions}
          placeholder="Select country..."
        />
        <FormInput fullWidth control={control} name="city" label="City" placeholder="New York" />
      </FieldRow>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <Button variant="system" type="button">
          Cancel
        </Button>
        <Button variant="normal" type="submit">
          Save
        </Button>
      </div>
    </form>
  )
}

export const ProfileForm: Story = {
  name: 'Example: Profile Form',
  parameters: { layout: 'padded' },
  render: () => <ProfileFormExample />,
}
