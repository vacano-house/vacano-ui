import { Controller, type FieldValues } from 'react-hook-form'

import type { FormCheckboxProps } from './types'
import { Checkbox, type CheckboxVariant } from '../../components'

export const FormCheckbox = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormCheckboxProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: CheckboxVariant = error ? 'error' : 'normal'

        return (
          <Checkbox
            {...props}
            checked={field.value ?? false}
            onChange={field.onChange}
            variant={variant}
          />
        )
      }}
    />
  )
}
