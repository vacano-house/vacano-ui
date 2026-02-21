import { Controller, type FieldValues } from 'react-hook-form'

import type { FormCheckboxGroupProps } from './types'
import { CheckboxGroup, type CheckboxVariant } from '../../components'

export const FormCheckboxGroup = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormCheckboxGroupProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: CheckboxVariant = error ? 'error' : 'normal'

        return (
          <CheckboxGroup
            {...props}
            value={field.value ?? []}
            onChange={field.onChange}
            variant={variant}
          />
        )
      }}
    />
  )
}
