import { Controller, type FieldValues } from 'react-hook-form'

import type { FormSelectProps } from './types'
import { Select, type SelectVariant } from '../../components'

export const FormSelect = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormSelectProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const selectVariant: SelectVariant = message ? 'error' : 'normal'

        return (
          <Select
            {...props}
            value={field.value}
            onChange={field.onChange}
            variant={selectVariant}
            message={message}
          />
        )
      }}
    />
  )
}
