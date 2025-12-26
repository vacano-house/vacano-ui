import type { ChangeEventHandler, InputHTMLAttributes, Ref } from 'react'

export type CheckboxState = 'warning' | 'error'

export type CheckboxClassnames = {
  container?: string
  input?: string
  box?: string
  icon?: string
  label?: string
}

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  classnames?: CheckboxClassnames
  'data-test-id'?: string
  indeterminate?: boolean
  label?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  ref?: Ref<HTMLInputElement>
  state?: CheckboxState
}
