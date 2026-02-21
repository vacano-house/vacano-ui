import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { CheckboxProps } from '../../components'

export type FormCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
