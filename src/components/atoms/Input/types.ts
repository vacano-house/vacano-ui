import type { ChangeEventHandler, InputHTMLAttributes, ReactElement, Ref } from 'react'

import type { AnimatedIconName, AnimatedIconRef } from '../../../icons/Animated'

export type InputType = InputHTMLAttributes<HTMLInputElement>['type']

export type InputState = 'warning' | 'error'

export type InputClassnames = {
  container?: string
  label?: string
  wrapper?: string
  input?: string
  icon?: string
  toggle?: string
}

export type StyledInputContainerProps = {
  $fullWidth?: boolean
}

export type StyledInputWrapperProps = {
  $state?: InputState
  $disabled?: boolean
}

export type StyledInputFieldProps = {
  $state?: InputState
}

export type StyledInputLabelProps = {
  $state?: InputState
}

export type StyledInputIconWrapperProps = {
  $disabled?: boolean
  $state?: InputState
}

export type StyledInputToggleProps = {
  $state?: InputState
  $disabled?: boolean
}

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  type?: InputType
  label?: string
  icon?: AnimatedIconName | ReactElement
  iconRef?: Ref<AnimatedIconRef>
  state?: InputState
  fullWidth?: boolean
  className?: string
  classnames?: InputClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
