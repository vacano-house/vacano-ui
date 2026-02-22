import type { HTMLAttributes } from 'react'

import { AvatarSize } from '../Avatar/types'
import { VacanoComponentProps } from '../../lib'

export type AvatarGroupClassNames = {
  count?: string
}

export type AvatarGroupProps = VacanoComponentProps<HTMLDivElement, AvatarGroupClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    max?: number
    size?: AvatarSize
  }
