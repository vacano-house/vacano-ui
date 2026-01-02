import type { HTMLAttributes, ReactNode } from 'react'

import { KeyboardEventKey, VacanoComponentProps, VacanoComponentSize } from '../../../lib'

export type ButtonClassNames = {
  label?: string
  icon?: string
  binding?: string
}

export type ButtonType = 'button' | 'submit' | 'reset' | 'link'
export type ButtonVariant = 'normal' | 'system' | 'danger' | 'transparent'

export type ButtonProps = VacanoComponentProps<HTMLButtonElement, ButtonClassNames> &
  Omit<HTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    children?: string
    disabled?: boolean
    fullWidth?: boolean
    icon?: ReactNode
    keyBindings?: KeyboardEventKey[]
    loading?: boolean
    size?: VacanoComponentSize
    type?: ButtonType
    variant?: ButtonVariant
  }
