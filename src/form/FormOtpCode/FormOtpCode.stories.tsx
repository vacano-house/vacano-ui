import { yupResolver } from '@hookform/resolvers/yup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormOtpCode } from './FormOtpCode'
import { Button } from '../../components'

const meta: Meta<typeof FormOtpCode> = {
  title: 'form/FormOtpCode',
  component: FormOtpCode,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormOtpCode>

const PlaygroundForm = () => {
  const { control } = useForm({ defaultValues: { code: '' } })

  return <FormOtpCode control={control} name="code" label="Verification code" />
}

export const Playground: Story = {
  render: () => <PlaygroundForm />,
}

const DefaultValueForm = () => {
  const { control } = useForm({ defaultValues: { code: '123456' } })

  return <FormOtpCode control={control} name="code" label="Verification code" />
}

export const WithDefaultValue: Story = {
  render: () => <DefaultValueForm />,
}

const validationSchema = yup.object({
  code: yup.string().required('Please enter the code').length(6, 'Code must be exactly 6 digits'),
})

type ValidationFormValues = yup.InferType<typeof validationSchema>

const ValidationForm = () => {
  const { control, handleSubmit } = useForm<ValidationFormValues>({
    defaultValues: { code: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: ValidationFormValues) => console.log('Submitted:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}
    >
      <FormOtpCode control={control} name="code" label="Verification code" />
      <Button variant="normal" type="submit">
        Verify
      </Button>
    </form>
  )
}

export const Validation: Story = {
  name: 'Yup Validation',
  parameters: { layout: 'padded' },
  render: () => <ValidationForm />,
}

const verifySchema = yup.object({
  code: yup.string().required('Enter the verification code').length(4, 'Code must be 4 digits'),
})

type VerifyFormValues = yup.InferType<typeof verifySchema>

const VerifyFormExample = () => {
  const { control, handleSubmit } = useForm<VerifyFormValues>({
    defaultValues: { code: '' },
    resolver: yupResolver(verifySchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: VerifyFormValues) => console.log('Verified:', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        padding: 32,
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        maxWidth: 400,
      }}
    >
      <h3 style={{ margin: 0 }}>Two-Factor Authentication</h3>
      <p style={{ margin: 0, color: '#666', fontSize: 14, textAlign: 'center' }}>
        Enter the 4-digit code from your authenticator app
      </p>
      <FormOtpCode control={control} name="code" length={4} />
      <Button variant="normal" type="submit">
        Confirm
      </Button>
    </form>
  )
}

export const VerifyForm: Story = {
  name: 'Example: 2FA Verification',
  parameters: { layout: 'padded' },
  render: () => <VerifyFormExample />,
}
