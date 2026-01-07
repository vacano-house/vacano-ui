import { VacanoComponentProps } from '../../lib'

export type FieldLabelVariant = 'normal' | 'error'

export type FieldLabelProps = VacanoComponentProps<HTMLSpanElement> & {
  children?: string
  required?: boolean
  variant?: FieldLabelVariant
}
