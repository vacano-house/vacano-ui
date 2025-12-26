import type { ChangeEventHandler, InputHTMLAttributes, Ref } from 'react'

export type RadioState = 'warning' | 'error'

export type RadioClassnames = {
  container?: string
  input?: string
  circle?: string
  dot?: string
  label?: string
}

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  classnames?: RadioClassnames
  'data-test-id'?: string
  label?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  ref?: Ref<HTMLInputElement>
  state?: RadioState
}
