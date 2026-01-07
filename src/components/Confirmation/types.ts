import type { CSSProperties, ReactNode } from 'react'

import { KeyboardEventKey, VacanoComponentProps } from '../../lib'

export type ConfirmationClassNames = {
  message?: string
  actions?: string
  confirmButton?: string
  cancelButton?: string
}

export type ConfirmationProps = VacanoComponentProps<HTMLDivElement, ConfirmationClassNames> & {
  cancelBindings?: KeyboardEventKey[]
  cancelLabel?: string
  confirmLabel?: string
  loading?: boolean
  message: ReactNode
  onCancel?: () => void
  onConfirm?: () => void
  open?: boolean
  style?: CSSProperties
  submitBindings?: KeyboardEventKey[]
}
