import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type ContainerProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>
