import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type FieldRowProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    gap?: number | string
  }
