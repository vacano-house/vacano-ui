import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type CardShadow = 'none' | 'sm' | 'md' | 'lg'

export type CardRadius = 'none' | 'sm' | 'md' | 'lg'

export type CardClassNames = {
  header?: string
  body?: string
  footer?: string
}

export type CardProps = VacanoComponentProps<HTMLDivElement, CardClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    blurred?: boolean
    border?: boolean
    disabled?: boolean
    footerBlurred?: boolean
    fullWidth?: boolean
    hoverable?: boolean
    pressable?: boolean
    radius?: CardRadius
    shadow?: CardShadow | boolean
  }

export type CardHeaderProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children?: ReactNode
  }

export type CardBodyProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children?: ReactNode
  }

export type CardFooterProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    blurred?: boolean
    children?: ReactNode
  }
