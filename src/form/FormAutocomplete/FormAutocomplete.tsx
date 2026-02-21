import { Controller, type FieldError, type FieldValues } from 'react-hook-form'

import type { FormAutocompleteProps } from './types'
import { Autocomplete, type AutocompleteVariant } from '../../components'

export const FormAutocomplete = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormAutocompleteProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]
        const message = (error?.message ??
          (error as Record<string, FieldError>)?.value?.message) as string
        const variant: AutocompleteVariant = message ? 'error' : 'normal'

        return (
          <Autocomplete
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
