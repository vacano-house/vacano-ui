import type { HTMLAttributes, ReactNode } from 'react'

export type MultiSelectOption = {
  label: string
  value: string
}

export type MultiSelectState = 'warning' | 'error'

export type MultiSelectPlacement = 'top' | 'bottom'

export type MultiSelectClassnames = {
  container?: string
  label?: string
  trigger?: string
  chips?: string
  chip?: string
  chipRemove?: string
  content?: string
  search?: string
  list?: string
  option?: string
  empty?: string
}

export type MultiSelectProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: MultiSelectOption[]
  value: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  icon?: ReactNode
  state?: MultiSelectState
  disabled?: boolean
  fullWidth?: boolean
  placement?: MultiSelectPlacement
  maxHeight?: number
  virtualized?: boolean
  searchable?: boolean
  portalRenderNode?: HTMLElement | null
  classnames?: MultiSelectClassnames
  'data-test-id'?: string
}

export type StyledMultiSelectContainerProps = {
  $fullWidth?: boolean
}

export type StyledMultiSelectLabelProps = {
  $state?: MultiSelectState
}

export type StyledMultiSelectTriggerProps = {
  $state?: MultiSelectState
  $disabled?: boolean
  $isOpen?: boolean
  $hasValue?: boolean
}

export type StyledMultiSelectIconProps = {
  $state?: MultiSelectState
  $disabled?: boolean
}

export type StyledMultiSelectChipProps = {
  $state?: MultiSelectState
  $disabled?: boolean
}

export type StyledMultiSelectChipRemoveProps = {
  $state?: MultiSelectState
  $disabled?: boolean
}

export type StyledMultiSelectPlaceholderProps = {
  $disabled?: boolean
}

export type StyledMultiSelectChevronProps = {
  $state?: MultiSelectState
  $disabled?: boolean
  $isOpen?: boolean
}

export type StyledMultiSelectContentProps = {
  $isOpen: boolean
  $maxHeight: number
}

export type StyledMultiSelectOptionProps = {
  $isHighlighted?: boolean
}

export type StyledMultiSelectOptionCheckProps = {
  $isSelected?: boolean
}
