import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormMultiSelect } from './FormMultiSelect'
import { FormInput } from '../FormInput'
import { Button, FieldRow } from '../../components'

const cityOptions = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'phoenix', label: 'Phoenix' },
  { value: 'philadelphia', label: 'Philadelphia' },
  { value: 'san-antonio', label: 'San Antonio' },
  { value: 'san-diego', label: 'San Diego' },
]

const meta: Meta<typeof FormMultiSelect> = {
  title: 'form/FormMultiSelect',
  component: FormMultiSelect,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormMultiSelect>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { cities: [] as string[] } })

  return (
    <div style={{ width: 350 }}>
      <FormMultiSelect
        control={control}
        name="cities"
        label="Cities"
        options={cityOptions}
        placeholder="Select cities..."
      />
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({
    defaultValues: { cities: ['new-york', 'chicago'] },
  })

  return (
    <div style={{ width: 350 }}>
      <FormMultiSelect control={control} name="cities" label="Cities" options={cityOptions} />
    </div>
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  cities: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Select at least one city')
    .required('Cities are required'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { cities: [] },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormMultiSelect
        control={control}
        name="cities"
        label="Cities"
        options={cityOptions}
        placeholder="Select cities..."
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

const travelSchema = yup.object({
  tripName: yup.string().required('Trip name is required'),
  destinations: yup
    .array()
    .of(yup.string().required())
    .min(2, 'Select at least 2 destinations')
    .required('Destinations are required'),
})

type TravelFormValues = yup.InferType<typeof travelSchema>

const TravelFormExample = () => {
  const { control, handleSubmit } = useForm<TravelFormValues>({
    defaultValues: {
      tripName: '',
      destinations: [],
    },
    resolver: yupResolver(travelSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: TravelFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}
    >
      <FieldRow>
        <FormInput
          fullWidth
          control={control}
          name="tripName"
          label="Trip Name"
          placeholder="Summer vacation"
        />
        <FormMultiSelect
          control={control}
          name="destinations"
          label="Destinations"
          options={cityOptions}
          placeholder="Select cities..."
        />
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

export const TravelForm: Story = {
  name: 'Example: Travel Form',
  parameters: { layout: 'padded' },
  render: () => <TravelFormExample />,
}
