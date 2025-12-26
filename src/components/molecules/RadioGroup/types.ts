export type RadioGroupOption = {
  label: string
  value: string
}

export type RadioGroupClassnames = {
  container?: string
  label?: string
  options?: string
  radio?: string
}

export type RadioGroupProps = {
  value: string
  options: RadioGroupOption[]
  onChange: (value: string) => void
  label?: string
  name?: string
  disabled?: boolean
  className?: string
  classnames?: RadioGroupClassnames
  'data-test-id'?: string
}
