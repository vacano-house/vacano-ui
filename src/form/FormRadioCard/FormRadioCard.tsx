import { Controller, type FieldValues } from 'react-hook-form'

import type { FormRadioCardProps } from './types'
import { RadioCard, type RadioCardVariant } from '../../components'

export const FormRadioCard = <T extends FieldValues = FieldValues>({
  control,
  name,
  value,
  ...props
}: FormRadioCardProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: RadioCardVariant = error ? 'error' : 'normal'

        return (
          <RadioCard
            {...props}
            value={value}
            checked={field.value === value}
            onChange={field.onChange}
            variant={variant}
          />
        )
      }}
    />
  )
}
