import { Controller, type FieldValues } from 'react-hook-form'

import type { FormToggleCardProps } from './types'
import { ToggleCard, type ToggleCardVariant } from '../../components'

export const FormToggleCard = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormToggleCardProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: ToggleCardVariant = error ? 'error' : 'normal'

        return (
          <ToggleCard
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
