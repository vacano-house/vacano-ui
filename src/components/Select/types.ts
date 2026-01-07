import { VacanoComponentProps, VacanoComponentSize } from '../../lib'

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type SelectVariant = 'normal' | 'error'

export type SelectClassNames = {
  label?: string
  trigger?: string
  dropdown?: string
  option?: string
}

export type SelectProps = VacanoComponentProps<HTMLDivElement, SelectClassNames> & {
  value: string
  options: SelectOption[]
  onChange?: (value: string) => void
  label?: string
  placeholder?: string
  variant?: SelectVariant
  size?: VacanoComponentSize
  disabled?: boolean
  fullWidth?: boolean
  portalRenderNode?: HTMLElement | null
}
