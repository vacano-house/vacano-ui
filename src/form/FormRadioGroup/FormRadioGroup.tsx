import { Controller, type FieldValues } from 'react-hook-form'

import type { FormRadioGroupProps } from './types'
import { RadioGroup, type RadioVariant } from '../../components'

export const FormRadioGroup = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormRadioGroupProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: RadioVariant = error ? 'error' : 'normal'

        return (
          <RadioGroup
            {...props}
            name={name}
            value={field.value ?? null}
            onChange={field.onChange}
            variant={variant}
          />
        )
      }}
    />
  )
}
