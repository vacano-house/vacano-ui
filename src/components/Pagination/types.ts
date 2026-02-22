import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type PaginationVariant = 'flat' | 'bordered' | 'light'

export type PaginationClassNames = {
  item?: string
  cursor?: string
  controls?: string
  ellipsis?: string
}

export type PaginationProps = VacanoComponentProps<HTMLElement, PaginationClassNames> &
  Omit<HTMLAttributes<HTMLElement>, 'className' | 'onChange'> & {
    boundaries?: number
    disabled?: boolean
    initialPage?: number
    loop?: boolean
    onChange?: (page: number) => void
    page?: number
    showControls?: boolean
    siblings?: number
    total: number
    variant?: PaginationVariant
  }
