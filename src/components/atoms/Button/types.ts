import type { ButtonHTMLAttributes, ReactElement, Ref } from 'react'

import type { AnimatedIconName, AnimatedIconRef } from '../../../icons/Animated'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

export type ButtonClassnames = {
  container?: string
  content?: string
  icon?: string
  text?: string
  char?: string
  loader?: string
}

export type StyledButtonContainerProps = {
  $variant: ButtonVariant
  $fullWidth?: boolean
  $loading?: boolean
  $iconOnly?: boolean
}

export type StyledButtonTextProps = {
  $loading?: boolean
}

export type StyledButtonCharProps = {
  $variant: ButtonVariant
  $loading?: boolean
}

export type StyledButtonIconWrapperProps = {
  $variant: ButtonVariant
  $loading?: boolean
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  char?: string
  children?: string
  classnames?: ButtonClassnames
  'data-test-id'?: string
  fullWidth?: boolean
  icon?: AnimatedIconName | ReactElement
  iconRef?: Ref<AnimatedIconRef>
  loading?: boolean
  variant?: ButtonVariant
}
