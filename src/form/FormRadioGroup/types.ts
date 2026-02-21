import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { RadioGroupProps } from '../../components'

export type FormRadioGroupProps<T extends FieldValues> = Omit<
  RadioGroupProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
