import { Controller, type FieldValues } from 'react-hook-form'

import type { FormInputProps } from './types'
import { Input, type InputVariant } from '../../components'

export const FormInput = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormInputProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const inputVariant: InputVariant = message ? 'error' : 'normal'

        return (
          <Input
            {...props}
            value={field.value}
            onChange={field.onChange}
            variant={inputVariant}
            message={message}
          />
        )
      }}
    />
  )
}
