import { NOTIFICATION_VARIANT_COLORS } from './constants'
import { NotificationVariant } from './types'

export const getNotificationVariantColors = (variant: NotificationVariant) => {
  return NOTIFICATION_VARIANT_COLORS[variant] ?? NOTIFICATION_VARIANT_COLORS['default']
}
