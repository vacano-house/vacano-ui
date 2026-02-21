import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type ToggleCardVariant = 'normal' | 'error'

export type ToggleCardClassNames = {
  toggle?: string
  content?: string
  label?: string
  description?: string
}

export type ToggleCardProps = VacanoComponentProps<HTMLInputElement, ToggleCardClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    description?: string
    fullWidth?: boolean
    variant?: ToggleCardVariant
  }
