import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type PanelVariant = 'light' | 'dark'

export type PanelClassNames = {
  label?: string
  title?: string
  description?: string
  content?: string
}

export type PanelProps = VacanoComponentProps<HTMLDivElement, PanelClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'title'> & {
    children: ReactNode
    description?: string
    label?: ReactNode
    title?: string
    variant?: PanelVariant
  }
