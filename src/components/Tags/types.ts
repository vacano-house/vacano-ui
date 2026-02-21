import type { ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type TagsOption = {
  value: string
  label: string
}

export type TagsVariant = 'normal' | 'error'

export type TagsCreateKey = 'Tab' | 'Enter'

export type TagsClassNames = {
  trigger?: string
  chip?: string
  input?: string
  dropdown?: string
  option?: string
  empty?: string
}

export type TagsProps = VacanoComponentProps<HTMLDivElement, TagsClassNames> & {
  value: string[]
  onChange: (value: string[]) => void
  options?: TagsOption[]
  label?: string
  placeholder?: string
  variant?: TagsVariant
  disabled?: boolean
  freeSolo?: boolean
  createKey?: TagsCreateKey
  emptyMessage?: ReactNode
  portalRenderNode?: HTMLElement | null
  message?: string
}
