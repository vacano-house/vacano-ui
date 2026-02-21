import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { ToggleCardProps } from '../../components'

export type FormToggleCardProps<T extends FieldValues> = Omit<
  ToggleCardProps,
  'checked' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
