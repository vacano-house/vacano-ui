import type { HTMLAttributes, ReactNode } from 'react'

import { KeyboardEventKey, VacanoComponentProps, VacanoComponentSize } from '../../types'

export type ButtonClassNames = {
  label?: string
  icon?: string
  binding?: string
}

export type ButtonType = 'button' | 'submit' | 'reset' | 'link'
export type ButtonVariant = 'normal' | 'system' | 'danger' | 'transparent'

export type ButtonProps = VacanoComponentProps<HTMLButtonElement, ButtonClassNames> &
  Omit<HTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    binding?: KeyboardEventKey[]
    children?: string
    disabled?: boolean
    fullWidth?: boolean
    icon?: ReactNode
    loading?: boolean
    size?: VacanoComponentSize
    type?: ButtonType
    variant?: ButtonVariant
  }
