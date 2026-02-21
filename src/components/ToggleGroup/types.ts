import type { ToggleVariant } from '../Toggle'
import { VacanoComponentProps } from '../../lib'

export type ToggleGroupOption = {
  label: string
  value: string
}

export type ToggleGroupClassNames = {
  label?: string
  options?: string
  toggle?: string
}

export type ToggleGroupProps = VacanoComponentProps<HTMLDivElement, ToggleGroupClassNames> & {
  options: ToggleGroupOption[]
  value: string[]
  onChange: (values: string[]) => void
  label?: string
  disabled?: boolean
  variant?: ToggleVariant
}
