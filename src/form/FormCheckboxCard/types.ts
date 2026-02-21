import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { CheckboxCardProps } from '../../components'

export type FormCheckboxCardProps<T extends FieldValues> = Omit<
  CheckboxCardProps,
  'checked' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
