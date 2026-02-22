import { type ReactNode } from 'react'

import { type VacanoComponentProps } from '../../lib'

export type ShellScreenClassNames = {
  grid?: string
  header?: string
  title?: string
  description?: string
  content?: string
  footer?: string
}

export type ShellScreenProps = VacanoComponentProps<HTMLDivElement, ShellScreenClassNames> & {
  logo?: ReactNode
  icon?: ReactNode
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  gridSize?: number
}
