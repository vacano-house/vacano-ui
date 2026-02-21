import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { SelectProps } from '../../components'

export type FormSelectProps<T extends FieldValues> = Omit<SelectProps, 'value' | 'onChange'> & {
  name: FieldPath<T>
  control: Control<T>
}
