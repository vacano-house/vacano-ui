import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormToggle } from './FormToggle'
import { Button } from '../../components'

const meta: Meta<typeof FormToggle> = {
  title: 'form/FormToggle',
  component: FormToggle,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormToggle>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { notifications: false } })

  return <FormToggle control={control} name="notifications" label="Enable notifications" />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { darkMode: true } })

  return <FormToggle control={control} name="darkMode" label="Dark mode" />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  terms: yup.boolean().oneOf([true], 'You must accept the terms').required(),
  newsletter: yup.boolean().default(false),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { terms: false, newsletter: false },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <FormToggle control={control} name="terms" label="I accept the terms and conditions" />
      <FormToggle control={control} name="newsletter" label="Subscribe to newsletter" />
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
