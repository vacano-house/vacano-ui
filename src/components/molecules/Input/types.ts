import type { InputHTMLAttributes } from 'react'

import { VacanoComponentProps, VacanoComponentSize } from '../../../lib'

export type InputClassNames = {
  input?: string
  label?: string
}

export type InputVariant = 'normal' | 'error'

export type InputProps = VacanoComponentProps<HTMLInputElement, InputClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> & {
    fullWidth?: boolean
    label?: string
    size?: VacanoComponentSize
    variant?: InputVariant
  }
