import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type ToggleVariant = 'normal' | 'error'

export type ToggleClassNames = {
  input?: string
  track?: string
  thumb?: string
  label?: string
}

export type ToggleProps = VacanoComponentProps<HTMLInputElement, ToggleClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'className'> & {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label?: ReactNode
    variant?: ToggleVariant
  }
