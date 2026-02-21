import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormRadio } from './FormRadio'
import { Button } from '../../components'

const meta: Meta<typeof FormRadio> = {
  title: 'form/FormRadio',
  component: FormRadio,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormRadio>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { color: '' } })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FormRadio control={control} name="color" value="red" label="Red" />
      <FormRadio control={control} name="color" value="green" label="Green" />
      <FormRadio control={control} name="color" value="blue" label="Blue" />
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { size: 'medium' } })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FormRadio control={control} name="size" value="small" label="Small" />
      <FormRadio control={control} name="size" value="medium" label="Medium" />
      <FormRadio control={control} name="size" value="large" label="Large" />
    </div>
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  plan: yup.string().required('Please select a plan'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { plan: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <FormRadio control={control} name="plan" value="free" label="Free" />
        <FormRadio control={control} name="plan" value="pro" label="Pro" />
        <FormRadio control={control} name="plan" value="enterprise" label="Enterprise" />
      </div>
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
