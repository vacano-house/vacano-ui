import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormRadioGroup } from './FormRadioGroup'
import { Button } from '../../components'

const meta: Meta<typeof FormRadioGroup> = {
  title: 'form/FormRadioGroup',
  component: FormRadioGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormRadioGroup>

const roles = [
  { label: 'Viewer', value: 'viewer' },
  { label: 'Editor', value: 'editor' },
  { label: 'Admin', value: 'admin' },
]

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { role: null as string | null } })

  return <FormRadioGroup control={control} name="role" label="Role" options={roles} />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { role: 'editor' } })

  return <FormRadioGroup control={control} name="role" label="Role" options={roles} />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  priority: yup.string().required('Please select a priority'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { priority: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <FormRadioGroup
        control={control}
        name="priority"
        label="Priority"
        options={[
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
          { label: 'Critical', value: 'critical' },
        ]}
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
