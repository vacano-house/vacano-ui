import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormAutocomplete } from './FormAutocomplete'
import { FormInput } from '../FormInput'
import { FormSelect } from '../FormSelect'
import { Button, FieldRow } from '../../components'
import type { AutocompleteSuggestion, AutocompleteValue } from '../../components'

const mockCities: AutocompleteSuggestion[] = [
  { id: '1', value: 'New York', image_url: null },
  { id: '2', value: 'Los Angeles', image_url: null },
  { id: '3', value: 'Chicago', image_url: null },
  { id: '4', value: 'Houston', image_url: null },
  { id: '5', value: 'Phoenix', image_url: null },
  { id: '6', value: 'Philadelphia', image_url: null },
  { id: '7', value: 'San Antonio', image_url: null },
  { id: '8', value: 'San Diego', image_url: null },
]

const mockUsers: AutocompleteSuggestion[] = [
  { id: '1', value: 'John Doe', image_url: 'https://i.pravatar.cc/150?u=john' },
  { id: '2', value: 'Jane Smith', image_url: 'https://i.pravatar.cc/150?u=jane' },
  { id: '3', value: 'Bob Johnson', image_url: 'https://i.pravatar.cc/150?u=bob' },
  { id: '4', value: 'Alice Williams', image_url: 'https://i.pravatar.cc/150?u=alice' },
]

const simulateSearch = (
  data: AutocompleteSuggestion[],
  query: string,
  delay = 500,
): Promise<AutocompleteSuggestion[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = data.filter((item) => item.value.toLowerCase().includes(query.toLowerCase()))
      resolve(filtered)
    }, delay)
  })
}

const searchCities = (query: string) => simulateSearch(mockCities, query)
const searchUsers = (query: string) => simulateSearch(mockUsers, query)

const meta: Meta<typeof FormAutocomplete> = {
  title: 'form/FormAutocomplete',
  component: FormAutocomplete,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormAutocomplete>

const PlaygroundForm = () => {
  const { control } = useForm({
    defaultValues: { city: { value: '', image_url: null } as AutocompleteValue },
  })

  return (
    <FormAutocomplete
      control={control}
      name="city"
      label="City"
      placeholder="Search for a city..."
      onSearch={searchCities}
    />
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({
    defaultValues: { city: { value: 'New York', image_url: null } as AutocompleteValue },
  })

  return (
    <FormAutocomplete
      control={control}
      name="city"
      label="City"
      placeholder="Search for a city..."
      onSearch={searchCities}
    />
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  city: yup
    .object({
      value: yup.string().required('City is required'),
      image_url: yup.string().nullable().defined(),
    })
    .required('City is required'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { city: { value: '', image_url: null } },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormAutocomplete
        fullWidth
        control={control}
        name="city"
        label="City"
        placeholder="Search for a city..."
        onSearch={searchCities}
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

const profileSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  country: yup.string().required('Country is required'),
  city: yup
    .object({
      value: yup.string().required('City is required'),
      image_url: yup.string().nullable().defined(),
    })
    .required('City is required'),
  manager: yup
    .object({
      value: yup.string().required('Manager is required'),
      image_url: yup.string().nullable().defined(),
    })
    .required('Manager is required'),
})

type ProfileFormValues = yup.InferType<typeof profileSchema>

const ProfileFormExample = () => {
  const { control, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      city: { value: '', image_url: null },
      manager: { value: '', image_url: null },
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
      <FieldRow>
        <FormSelect
          fullWidth
          control={control}
          name="country"
          label="Country"
          options={countryOptions}
          placeholder="Select country..."
        />
        <FormAutocomplete
          fullWidth
          control={control}
          name="city"
          label="City"
          placeholder="Search city..."
          onSearch={searchCities}
        />
      </FieldRow>
      <FormAutocomplete
        fullWidth
        control={control}
        name="manager"
        label="Manager"
        placeholder="Search for a manager..."
        onSearch={searchUsers}
      />
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
