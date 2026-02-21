import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { TextareaProps } from '../../components'

export type FormTextareaProps<T extends FieldValues> = TextareaProps & {
  name: FieldPath<T>
  control: Control<T>
}
