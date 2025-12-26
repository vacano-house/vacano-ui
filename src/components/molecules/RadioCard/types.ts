import type { ChangeEventHandler, InputHTMLAttributes, Ref } from 'react'

export type RadioCardState = 'warning' | 'error'

export type RadioCardClassnames = {
  container?: string
  radio?: string
  content?: string
  label?: string
  description?: string
}

export type StyledRadioCardContainerProps = {
  $checked?: boolean
  $disabled?: boolean
  $fullWidth?: boolean
  $state?: RadioCardState
}

export type StyledRadioCardLabelProps = {
  $state?: RadioCardState
}

export type StyledRadioCardDescriptionProps = {
  $state?: RadioCardState
}

export type RadioCardProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  description?: string
  fullWidth?: boolean
  state?: RadioCardState
  className?: string
  classnames?: RadioCardClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
