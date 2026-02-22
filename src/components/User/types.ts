import type { HTMLAttributes, ReactNode } from 'react'

import { AvatarProps } from '../Avatar'
import { VacanoComponentProps } from '../../lib'

export type UserClassNames = {
  avatar?: string
  name?: string
  description?: string
}

export type UserProps = VacanoComponentProps<HTMLDivElement, UserClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    name: ReactNode
    description?: ReactNode
    src?: string
    avatarProps?: Omit<AvatarProps, 'ref'>
    avatarPosition?: 'left' | 'right'
  }
