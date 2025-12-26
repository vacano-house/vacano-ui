import type { ChangeEventHandler, InputHTMLAttributes, Ref } from 'react'

export type CheckboxCardState = 'warning' | 'error'

export type CheckboxCardClassnames = {
  container?: string
  checkbox?: string
  content?: string
  label?: string
  description?: string
}

export type StyledCheckboxCardContainerProps = {
  $checked?: boolean
  $disabled?: boolean
  $fullWidth?: boolean
  $state?: CheckboxCardState
}

export type StyledCheckboxCardLabelProps = {
  $state?: CheckboxCardState
}

export type StyledCheckboxCardDescriptionProps = {
  $state?: CheckboxCardState
}

export type CheckboxCardProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  description?: string
  fullWidth?: boolean
  state?: CheckboxCardState
  className?: string
  classnames?: CheckboxCardClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
