import { VacanoComponentProps, VacanoComponentSize } from '../../lib'

export type OtpCodeClassNames = {
  container?: string
  input?: string
  label?: string
}

export type OtpCodeVariant = 'normal' | 'error'

export type OtpCodeProps = VacanoComponentProps<HTMLDivElement, OtpCodeClassNames> & {
  autoFocus?: boolean
  disabled?: boolean
  label?: string
  length?: number
  onChange?: (value: string) => void
  size?: VacanoComponentSize
  value?: string
  variant?: OtpCodeVariant
  message?: string
}
