import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { MultiSelectProps } from '../../components'

export type FormMultiSelectProps<T extends FieldValues> = Omit<
  MultiSelectProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
