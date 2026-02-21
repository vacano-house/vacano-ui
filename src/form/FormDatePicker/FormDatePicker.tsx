import { Controller, type FieldValues } from 'react-hook-form'

import type { FormDatePickerProps } from './types'
import { DatePicker, type DatePickerVariant } from '../../components'

export const FormDatePicker = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormDatePickerProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const variant: DatePickerVariant = message ? 'error' : 'normal'

        return (
          <DatePicker
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
