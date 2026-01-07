import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

export type DrawerProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    open: boolean
    animated?: boolean
    children?: ReactNode
    position?: DrawerPosition
    size?: string
  }
