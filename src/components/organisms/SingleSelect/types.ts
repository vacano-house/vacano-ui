import type { HTMLAttributes } from 'react'

import { VacanoComponentProps, VacanoValueItem } from '../../../lib'

export type SingleSelectPlacement = 'top' | 'bottom'

export type SingleSelectVariant = 'normal' | 'error'

export type SingleSelectClassNames = {
  trigger?: string
  placeholder?: string
  value?: string
  dropdown?: string
  search?: string
  list?: string
  option?: string
}

export type SingleSelectProps = VacanoComponentProps<HTMLDivElement, SingleSelectClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    // Value
    options: VacanoValueItem[]
    value: VacanoValueItem | null
    onChange: (value: VacanoValueItem | null) => void

    // Appearance
    disabled?: boolean
    label?: string
    placeholder?: string
    variant?: SingleSelectVariant

    // ValueSelector props
    height?: number | string
    searchable?: boolean

    // Dropdown behavior
    closeOnSelect?: boolean
    placement?: SingleSelectPlacement
    virtualized?: boolean
  }
