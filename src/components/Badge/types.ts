import { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type BadgeColor = 'default' | 'success' | 'warning' | 'danger'

export type BadgeSize = 'sm' | 'md' | 'lg'

export type BadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export type BadgeShape = 'circle' | 'rectangle'

export type BadgeVariant = 'solid' | 'flat' | 'bordered'

export type BadgeClassNames = {
  badge?: string
}

export type BadgeProps = VacanoComponentProps<HTMLDivElement, BadgeClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'content'> & {
    children?: ReactNode
    color?: BadgeColor
    content?: ReactNode
    dot?: boolean
    invisible?: boolean
    placement?: BadgePlacement
    shape?: BadgeShape
    showOutline?: boolean
    size?: BadgeSize
    variant?: BadgeVariant
  }
