import { Controller, type FieldValues } from 'react-hook-form'

import type { FormTextareaProps } from './types'
import { Textarea, type TextareaVariant } from '../../components'

export const FormTextarea = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormTextareaProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const variant: TextareaVariant = message ? 'error' : 'normal'

        return (
          <Textarea
            {...props}
            value={field.value}
            onChange={field.onChange}
            variant={variant}
            message={message}
          />
        )
      }}
    />
  )
}
