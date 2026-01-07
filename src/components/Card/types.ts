import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type CardProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    border?: boolean
    shadow?: boolean
  }
