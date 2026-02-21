import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { ToggleProps } from '../../components'

export type FormToggleProps<T extends FieldValues> = Omit<ToggleProps, 'checked' | 'onChange'> & {
  name: FieldPath<T>
  control: Control<T>
}
