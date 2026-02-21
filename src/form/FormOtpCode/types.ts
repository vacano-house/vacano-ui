import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { OtpCodeProps } from '../../components'

export type FormOtpCodeProps<T extends FieldValues> = Omit<OtpCodeProps, 'value' | 'onChange'> & {
  name: FieldPath<T>
  control: Control<T>
}
