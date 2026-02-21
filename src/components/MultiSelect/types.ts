import type { ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type MultiSelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type MultiSelectVariant = 'normal' | 'error'

export type MultiSelectClassNames = {
  trigger?: string
  chips?: string
  chip?: string
  placeholder?: string
  modal?: string
  search?: string
  options?: string
  option?: string
  empty?: string
}

export type MultiSelectProps = VacanoComponentProps<HTMLDivElement, MultiSelectClassNames> & {
  value: string[]
  options: MultiSelectOption[]
  onChange: (value: string[]) => void
  label?: string
  placeholder?: string
  variant?: MultiSelectVariant
  disabled?: boolean
  maxVisible?: number
  emptyMessage?: ReactNode
  searchPlaceholder?: string
  modalTitle?: string
  message?: string
}
