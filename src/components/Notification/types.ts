export type NotificationVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

export type Notification = {
  id: string
  message: string
  variant: NotificationVariant
  duration: number
}

export type NotificationState = {
  current: Notification | null
  queue: Notification[]
}

export type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_CURRENT' }
  | { type: 'SHOW_NEXT' }

export type NotificationContextValue = {
  show: (message: string, variant?: NotificationVariant, duration?: number) => void
  hide: () => void
}
