import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type RadioCardVariant = 'normal' | 'error'

export type RadioCardClassNames = {
  radio?: string
  content?: string
  label?: string
  description?: string
}

export type RadioCardProps = VacanoComponentProps<HTMLInputElement, RadioCardClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    description?: string
    fullWidth?: boolean
    variant?: RadioCardVariant
  }
