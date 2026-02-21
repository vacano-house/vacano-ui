import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormTextarea } from './FormTextarea'
import { FormInput } from '../FormInput'
import { Button } from '../../components'

const meta: Meta<typeof FormTextarea> = {
  title: 'form/FormTextarea',
  component: FormTextarea,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormTextarea>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { bio: '' } })

  return (
    <div style={{ width: 400 }}>
      <FormTextarea
        fullWidth
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
      />
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({
    defaultValues: { bio: 'I am a software engineer with 5 years of experience.' },
  })

  return (
    <div style={{ width: 400 }}>
      <FormTextarea fullWidth control={control} name="bio" label="Bio" />
    </div>
  )
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  bio: yup.string().required('Bio is required').min(20, 'Bio must be at least 20 characters'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { bio: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}
    >
      <FormTextarea
        fullWidth
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        count={200}
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

const feedbackSchema = yup.object({
  name: yup.string().required('Name is required'),
  feedback: yup
    .string()
    .required('Feedback is required')
    .min(10, 'Feedback must be at least 10 characters')
    .max(500, 'Feedback must not exceed 500 characters'),
})

type FeedbackFormValues = yup.InferType<typeof feedbackSchema>

const FeedbackFormExample = () => {
  const { control, handleSubmit } = useForm<FeedbackFormValues>({
    defaultValues: {
      name: '',
      feedback: '',
    },
    resolver: yupResolver(feedbackSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: FeedbackFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}
    >
      <FormInput fullWidth control={control} name="name" label="Name" placeholder="John Doe" />
      <FormTextarea
        fullWidth
        control={control}
        name="feedback"
        label="Feedback"
        placeholder="Share your thoughts..."
        count={500}
        rows={6}
      />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <Button variant="system" type="button">
          Cancel
        </Button>
        <Button variant="normal" type="submit">
          Send
        </Button>
      </div>
    </form>
  )
}

export const FeedbackForm: Story = {
  name: 'Example: Feedback Form',
  parameters: { layout: 'padded' },
  render: () => <FeedbackFormExample />,
}
