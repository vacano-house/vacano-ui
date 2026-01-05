import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type RadioVariant = 'normal' | 'error'

export type RadioClassNames = {
  input?: string
  box?: string
  dot?: string
  label?: string
}

export type RadioProps = VacanoComponentProps<HTMLInputElement, RadioClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label?: string
    variant?: RadioVariant
  }
