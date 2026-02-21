import { Controller, type FieldValues } from 'react-hook-form'

import type { FormRadioProps } from './types'
import { Radio, type RadioVariant } from '../../components'

export const FormRadio = <T extends FieldValues = FieldValues>({
  control,
  name,
  value,
  ...props
}: FormRadioProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const error = formState.errors[name]?.message as string
        const variant: RadioVariant = error ? 'error' : 'normal'

        return (
          <Radio
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
