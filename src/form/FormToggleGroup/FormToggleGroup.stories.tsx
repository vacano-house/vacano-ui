import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormToggleGroup } from './FormToggleGroup'
import { Button } from '../../components'

const meta: Meta<typeof FormToggleGroup> = {
  title: 'form/FormToggleGroup',
  component: FormToggleGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormToggleGroup>

const features = [
  { label: 'Dark mode', value: 'dark' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Auto-save', value: 'autosave' },
  { label: 'Analytics', value: 'analytics' },
]

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { features: [] as string[] } })

  return <FormToggleGroup control={control} name="features" label="Features" options={features} />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { features: ['dark', 'autosave'] } })

  return <FormToggleGroup control={control} name="features" label="Features" options={features} />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  features: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Enable at least one feature')
    .required(),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { features: [] },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <FormToggleGroup control={control} name="features" label="Features" options={features} />
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
