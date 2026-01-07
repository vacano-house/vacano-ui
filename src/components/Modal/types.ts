import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type ModalClassNames = {
  overlay?: string
  content?: string
}

export type ModalProps = VacanoComponentProps<HTMLDivElement, ModalClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    open: boolean
    animated?: boolean
    children?: ReactNode
    width?: string
  }
