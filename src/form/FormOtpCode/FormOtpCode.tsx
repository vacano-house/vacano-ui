import { Controller, type FieldValues } from 'react-hook-form'

import type { FormOtpCodeProps } from './types'
import { OtpCode, type OtpCodeVariant } from '../../components'

export const FormOtpCode = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormOtpCodeProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const variant: OtpCodeVariant = message ? 'error' : 'normal'

        return (
          <OtpCode
            {...props}
            value={field.value ?? ''}
            onChange={field.onChange}
            variant={variant}
            message={message}
          />
        )
      }}
    />
  )
}
