import type { ReactNode } from 'react'

export type NotifyConfirmationClassNames = 'label' | 'description' | 'actions'

export type NotifyConfirmationOptions = {
  confirmLabel?: string
  discardLabel?: string
}

export type NotifyConfirmationState = {
  open: boolean
  label: ReactNode
  description: ReactNode
  onConfirm: () => void | Promise<void>
  onDiscard: () => void
  options: NotifyConfirmationOptions
}

export type NotifyConfirmationContextValue = {
  show: (
    label: ReactNode,
    description: ReactNode,
    onConfirm: () => void | Promise<void>,
    onDiscard?: () => void,
    options?: NotifyConfirmationOptions,
  ) => void
  hide: () => void
}
