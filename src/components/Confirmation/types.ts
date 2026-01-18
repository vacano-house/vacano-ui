import type { ReactNode } from 'react'

export type ConfirmationOptions = {
  confirmLabel?: string
  cancelLabel?: string
}

export type ConfirmationState = {
  open: boolean
  message: ReactNode
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  options: ConfirmationOptions
}

export type ConfirmationContextValue = {
  show: (
    message: ReactNode,
    onConfirm: () => void | Promise<void>,
    onCancel?: () => void,
    options?: ConfirmationOptions,
  ) => void
  hide: () => void
}
