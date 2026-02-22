import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type BreadcrumbsVariant = 'light' | 'solid' | 'bordered'

export type BreadcrumbsSize = 'sm' | 'md' | 'lg'

export type BreadcrumbsClassNames = {
  list?: string
  separator?: string
  ellipsis?: string
}

export type BreadcrumbsProps = VacanoComponentProps<HTMLElement, BreadcrumbsClassNames> &
  Omit<HTMLAttributes<HTMLElement>, 'className'> & {
    disabled?: boolean
    itemsAfterCollapse?: number
    itemsBeforeCollapse?: number
    maxItems?: number
    separator?: ReactNode
    size?: BreadcrumbsSize
    variant?: BreadcrumbsVariant
  }

export type BreadcrumbItemClassNames = {
  separator?: string
}

export type BreadcrumbItemProps = VacanoComponentProps<HTMLLIElement, BreadcrumbItemClassNames> &
  Omit<HTMLAttributes<HTMLLIElement>, 'className'> & {
    current?: boolean
    disabled?: boolean
    href?: string
    separator?: ReactNode
    startContent?: ReactNode
    endContent?: ReactNode
  }
