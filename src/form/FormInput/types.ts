import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { InputProps } from '../../components'

export type FormInputProps<T extends FieldValues> = InputProps & {
  name: FieldPath<T>
  control: Control<T>
}
