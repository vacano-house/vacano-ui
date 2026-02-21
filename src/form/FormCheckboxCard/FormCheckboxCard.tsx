import { Controller, type FieldValues } from 'react-hook-form'

import type { FormCheckboxCardProps } from './types'
import { CheckboxCard, type CheckboxCardVariant } from '../../components'

export const FormCheckboxCard = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormCheckboxCardProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: CheckboxCardVariant = error ? 'error' : 'normal'

        return (
          <CheckboxCard
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
