import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { RadioProps } from '../../components'

export type FormRadioProps<T extends FieldValues> = Omit<RadioProps, 'checked' | 'onChange'> & {
  name: FieldPath<T>
  control: Control<T>
}
