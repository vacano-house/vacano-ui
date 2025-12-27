import type { HTMLAttributes, ReactNode } from 'react'

export type SelectOption = {
  label: string
  value: string
}

export type SelectState = 'warning' | 'error'

export type SelectPlacement = 'top' | 'bottom'

export type SelectClassnames = {
  container?: string
  label?: string
  trigger?: string
  content?: string
  search?: string
  list?: string
  option?: string
  empty?: string
}

export type StyledSelectContainerProps = {
  $fullWidth?: boolean
}

export type StyledSelectTriggerProps = {
  $state?: SelectState
  $disabled?: boolean
  $isOpen?: boolean
}

export type StyledSelectLabelProps = {
  $state?: SelectState
}

export type StyledSelectValueProps = {
  $isPlaceholder?: boolean
  $state?: SelectState
  $disabled?: boolean
}

export type StyledSelectIconProps = {
  $state?: SelectState
  $disabled?: boolean
}

export type StyledSelectChevronProps = {
  $state?: SelectState
  $disabled?: boolean
  $isOpen?: boolean
}

export type StyledSelectContentProps = {
  $isOpen: boolean
  $maxHeight: number
}

export type StyledSelectOptionProps = {
  $isSelected?: boolean
  $isHighlighted?: boolean
}

export type SelectProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  icon?: ReactNode
  state?: SelectState
  disabled?: boolean
  fullWidth?: boolean
  placement?: SelectPlacement
  maxHeight?: number
  virtualized?: boolean
  searchable?: boolean
  portalRenderNode?: HTMLElement | null
  classnames?: SelectClassnames
  'data-test-id'?: string
}
