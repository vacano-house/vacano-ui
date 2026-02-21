import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormTags } from './FormTags'
import { FormInput } from '../FormInput'
import { Button, FieldRow } from '../../components'

const skillOptions = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'docker', label: 'Docker' },
]

const meta: Meta<typeof FormTags> = {
  title: 'form/FormTags',
  component: FormTags,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormTags>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { skills: [] as string[] } })

  return (
    <div style={{ width: 350 }}>
      <FormTags
        control={control}
        name="skills"
        label="Skills"
        options={skillOptions}
        placeholder="Add skill..."
      />
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({
    defaultValues: { skills: ['react', 'typescript'] },
  })

  return (
    <div style={{ width: 350 }}>
      <FormTags control={control} name="skills" label="Skills" options={skillOptions} />
    </div>
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  skills: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Add at least one skill')
    .required('Skills are required'),
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
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormTags
        control={control}
        name="skills"
        label="Skills"
        options={skillOptions}
        placeholder="Add skill..."
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
  name: yup.string().required('Name is required'),
  skills: yup
    .array()
    .of(yup.string().required())
    .min(2, 'Add at least 2 skills')
    .required('Skills are required'),
})

type ProfileFormValues = yup.InferType<typeof profileSchema>

const ProfileFormExample = () => {
  const { control, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: {
      name: '',
      skills: [],
    },
    resolver: yupResolver(profileSchema),
    mode: 'onSubmit',
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
          name="name"
          label="Full Name"
          placeholder="John Doe"
        />
        <FormTags
          control={control}
          name="skills"
          label="Skills"
          options={skillOptions}
          placeholder="Add skill..."
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

export const ProfileForm: Story = {
  name: 'Example: Profile Form',
  parameters: { layout: 'padded' },
  render: () => <ProfileFormExample />,
}
