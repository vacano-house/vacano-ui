import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingProps = VacanoComponentProps<HTMLHeadingElement> &
  Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> & {
    children: ReactNode
    level?: HeadingLevel
    as?: HeadingLevel
  }
