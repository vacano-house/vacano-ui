import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormCheckboxGroup } from './FormCheckboxGroup'
import { Button } from '../../components'

const meta: Meta<typeof FormCheckboxGroup> = {
  title: 'form/FormCheckboxGroup',
  component: FormCheckboxGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormCheckboxGroup>

const languages = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Go', value: 'go' },
]

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { languages: [] as string[] } })

  return (
    <FormCheckboxGroup control={control} name="languages" label="Languages" options={languages} />
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { languages: ['js', 'ts'] } })

  return (
    <FormCheckboxGroup control={control} name="languages" label="Languages" options={languages} />
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  skills: yup.array().of(yup.string().required()).min(1, 'Select at least one skill').required(),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { skills: [] },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <FormCheckboxGroup
        control={control}
        name="skills"
        label="Skills"
        options={[
          { label: 'Frontend', value: 'frontend' },
          { label: 'Backend', value: 'backend' },
          { label: 'DevOps', value: 'devops' },
          { label: 'Design', value: 'design' },
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
