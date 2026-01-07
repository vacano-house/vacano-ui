export type ToastVariant = 'default' | 'success' | 'warning' | 'danger'

export type Toast = {
  id: string
  message: string
  variant: ToastVariant
  duration?: number
}

export type ToastState = {
  toasts: Toast[]
  queue: Toast[]
}

export type ToastAction =
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'SHOW_NEXT_FROM_QUEUE' }

export type ToastContextValue = {
  addToast: (message: string, variant?: ToastVariant, duration?: number) => void
  removeToast: (id: string) => void
}

export type ToastItemProps = {
  toast: Toast
  onRemove: (id: string) => void
}

export type ToastContainerProps = {
  toasts: Toast[]
  queueCount: number
  removeToast: (id: string) => void
}
