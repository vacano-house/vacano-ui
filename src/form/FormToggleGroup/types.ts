import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { ToggleGroupProps } from '../../components'

export type FormToggleGroupProps<T extends FieldValues> = Omit<
  ToggleGroupProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
