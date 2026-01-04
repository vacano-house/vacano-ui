import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type CheckboxCardVariant = 'normal' | 'error'

export type CheckboxCardClassNames = {
  checkbox?: string
  content?: string
  label?: string
  description?: string
}

export type CheckboxCardProps = VacanoComponentProps<HTMLInputElement, CheckboxCardClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    description?: string
    fullWidth?: boolean
    variant?: CheckboxCardVariant
  }
