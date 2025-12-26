export type CheckboxGroupOption = {
  label: string
  value: string
}

export type CheckboxGroupClassnames = {
  container?: string
  label?: string
  options?: string
  checkbox?: string
}

export type CheckboxGroupProps = {
  options: CheckboxGroupOption[]
  value: string[]
  onChange: (values: string[]) => void
  label?: string
  disabled?: boolean
  className?: string
  classnames?: CheckboxGroupClassnames
  'data-test-id'?: string
}
