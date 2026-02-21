import { Controller, type FieldValues } from 'react-hook-form'

import type { FormToggleGroupProps } from './types'
import { ToggleGroup, type ToggleVariant } from '../../components'

export const FormToggleGroup = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormToggleGroupProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: ToggleVariant = error ? 'error' : 'normal'

        return (
          <ToggleGroup
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
