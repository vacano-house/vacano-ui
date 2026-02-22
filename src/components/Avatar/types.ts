import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarRadius = 'sm' | 'md' | 'lg' | 'full'

export type AvatarColor = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export type AvatarClassNames = {
  image?: string
  fallback?: string
  initials?: string
}

export type AvatarProps = VacanoComponentProps<HTMLDivElement, AvatarClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    bordered?: boolean
    color?: AvatarColor
    disabled?: boolean
    icon?: ReactNode
    name?: string
    radius?: AvatarRadius
    size?: AvatarSize
    src?: string
  }
