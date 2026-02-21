import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormRadioCard } from './FormRadioCard'
import { Button } from '../../components'

const meta: Meta<typeof FormRadioCard> = {
  title: 'form/FormRadioCard',
  component: FormRadioCard,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormRadioCard>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { plan: '' } })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FormRadioCard
        control={control}
        name="plan"
        value="starter"
        label="Starter"
        description="For small projects and personal use"
      />
      <FormRadioCard
        control={control}
        name="plan"
        value="pro"
        label="Pro"
        description="For teams and growing businesses"
      />
      <FormRadioCard
        control={control}
        name="plan"
        value="enterprise"
        label="Enterprise"
        description="Custom solutions for large organizations"
      />
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { theme: 'light' } })

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <FormRadioCard
        control={control}
        name="theme"
        value="light"
        label="Light"
        description="Classic light theme"
      />
      <FormRadioCard
        control={control}
        name="theme"
        value="dark"
        label="Dark"
        description="Dark mode for night owls"
      />
      <FormRadioCard
        control={control}
        name="theme"
        value="auto"
        label="Auto"
        description="Follow system preference"
      />
    </div>
  )
}

export const WithDefaultValue: Story = {
  parameters: { layout: 'padded' },
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
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <FormRadioCard
          fullWidth
          control={control}
          name="plan"
          value="starter"
          label="Starter"
          description="For small projects and personal use"
        />
        <FormRadioCard
          fullWidth
          control={control}
          name="plan"
          value="pro"
          label="Pro"
          description="For teams and growing businesses"
        />
        <FormRadioCard
          fullWidth
          control={control}
          name="plan"
          value="enterprise"
          label="Enterprise"
          description="Custom solutions for large organizations"
        />
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
