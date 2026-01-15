import type { TextareaHTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type TextareaClassNames = {
  textarea?: string
  label?: string
}

export type TextareaVariant = 'normal' | 'error'

export type TextareaProps = VacanoComponentProps<HTMLTextAreaElement, TextareaClassNames> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
    fullWidth?: boolean
    label?: string
    variant?: TextareaVariant
  }
