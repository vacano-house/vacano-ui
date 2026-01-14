import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type CheckboxVariant = 'normal' | 'error'

export type CheckboxClassNames = {
  input?: string
  box?: string
  icon?: string
  label?: string
}

export type CheckboxProps = VacanoComponentProps<HTMLInputElement, CheckboxClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    indeterminate?: boolean
    label?: ReactNode
    variant?: CheckboxVariant
  }
