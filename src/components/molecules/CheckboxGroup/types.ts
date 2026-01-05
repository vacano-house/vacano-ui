import { VacanoComponentProps } from '../../../lib'

export type CheckboxGroupOption = {
  label: string
  value: string
}

export type CheckboxGroupClassNames = {
  label?: string
  options?: string
  checkbox?: string
}

export type CheckboxGroupProps = VacanoComponentProps<HTMLDivElement, CheckboxGroupClassNames> & {
  options: CheckboxGroupOption[]
  value: string[]
  onChange: (values: string[]) => void
  label?: string
  disabled?: boolean
}
