import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { RadioCardProps } from '../../components'

export type FormRadioCardProps<T extends FieldValues> = Omit<
  RadioCardProps,
  'checked' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
