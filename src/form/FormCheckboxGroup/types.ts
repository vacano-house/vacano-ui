import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { CheckboxGroupProps } from '../../components'

export type FormCheckboxGroupProps<T extends FieldValues> = Omit<
  CheckboxGroupProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
