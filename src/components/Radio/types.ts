import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

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
    label?: ReactNode
    variant?: RadioVariant
  }
