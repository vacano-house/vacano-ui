import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { DatePickerProps } from '../../components'

export type FormDatePickerProps<T extends FieldValues> = Omit<
  DatePickerProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
