import { Controller, type FieldValues } from 'react-hook-form'

import type { FormMultiSelectProps } from './types'
import { MultiSelect, type MultiSelectVariant } from '../../components'

export const FormMultiSelect = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormMultiSelectProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const variant: MultiSelectVariant = message ? 'error' : 'normal'

        return (
          <MultiSelect
            {...props}
            value={field.value ?? []}
            onChange={field.onChange}
            variant={variant}
            message={message}
          />
        )
      }}
    />
  )
}
