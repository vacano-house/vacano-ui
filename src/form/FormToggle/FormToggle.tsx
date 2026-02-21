import { Controller, type FieldValues } from 'react-hook-form'

import type { FormToggleProps } from './types'
import { Toggle, type ToggleVariant } from '../../components'

export const FormToggle = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormToggleProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: ToggleVariant = error ? 'error' : 'normal'

        return (
          <Toggle
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
