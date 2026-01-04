import type { HTMLAttributes } from 'react'

import { MultiValueVariant } from '../../molecules'
import { VacanoComponentProps, VacanoValueItem } from '../../../lib'

export type MultiSelectPlacement = 'top' | 'bottom'

export type MultiSelectClassNames = {
  label?: string
  chips?: string
  chip?: string
  more?: string
  placeholder?: string
  dropdown?: string
  search?: string
  list?: string
  option?: string
}

export type MultiSelectProps = VacanoComponentProps<HTMLDivElement, MultiSelectClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    // Value
    options: VacanoValueItem[]
    value: VacanoValueItem[]
    onChange: (value: VacanoValueItem[]) => void

    // MultiValue props
    count?: number
    disabled?: boolean
    label?: string
    placeholder?: string
    variant?: MultiValueVariant

    // ValueSelector props
    height?: number | string
    searchable?: boolean

    // Dropdown behavior
    closeOnSelect?: boolean
    placement?: MultiSelectPlacement
    virtualized?: boolean
  }
