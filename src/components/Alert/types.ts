import { type ReactNode } from 'react'

import { type VacanoComponentProps } from '../../lib'

export type AlertVariant = 'normal' | 'success' | 'warning' | 'danger'

export type AlertRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type AlertClassNames = {
  icon?: string
  title?: string
  description?: string
}

export type AlertProps = VacanoComponentProps<HTMLDivElement, AlertClassNames> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'className'> & {
    icon?: ReactNode
    title?: ReactNode
    description?: ReactNode
    variant?: AlertVariant
    radius?: AlertRadius
  }
