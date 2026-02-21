import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormInput } from './FormInput'
import { Button, FieldRow } from '../../components'
import { validation } from '../../lib'

const meta: Meta<typeof FormInput> = {
  title: 'form/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormInput>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { name: '' } })

  return <FormInput control={control} name="name" label="Name" placeholder="Enter your name..." />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { email: 'john@example.com' } })

  return (
    <FormInput
      control={control}
      name="email"
      label="Email"
      placeholder="Enter email..."
      type="email"
    />
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  email: validation.email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'At least 8 characters')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[0-9]/, 'Must contain a number'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
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
        name="password"
        label="Password"
        placeholder="Enter password"
        type="password"
      />
      <Button variant="normal" type="submit">
        Sign In
      </Button>
    </form>
  )
}

export const Validation: Story = {
  name: 'Yup Validation',
  parameters: { layout: 'padded' },
  render: () => <ValidationForm />,
}

const SizesForm = () => {
  const { control } = useForm({ defaultValues: { default: '', compact: '' } })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default Size</div>
        <FormInput
          control={control}
          name="default"
          size="default"
          label="Default"
          placeholder="Default size"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Compact Size</div>
        <FormInput
          control={control}
          name="compact"
          size="compact"
          label="Compact"
          placeholder="Compact size"
        />
      </div>
    </div>
  )
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => <SizesForm />,
}

const registrationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: validation.email().required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'At least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

type RegistrationFormValues = yup.InferType<typeof registrationSchema>

const RegistrationFormExample = () => {
  const { control, handleSubmit } = useForm<RegistrationFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registrationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: RegistrationFormValues) => console.log('Registered:', data)

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
      <FormInput
        fullWidth
        control={control}
        name="password"
        label="Password"
        placeholder="Enter password"
        type="password"
      />
      <FormInput
        fullWidth
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Repeat password"
        type="password"
      />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <Button variant="system" type="button">
          Cancel
        </Button>
        <Button variant="normal" type="submit">
          Register
        </Button>
      </div>
    </form>
  )
}

export const RegistrationForm: Story = {
  name: 'Example: Registration Form',
  parameters: { layout: 'padded' },
  render: () => <RegistrationFormExample />,
}
