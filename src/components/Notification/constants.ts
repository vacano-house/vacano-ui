import { NotificationVariant } from './types'
import { COLORS } from '../../lib'

export const DEFAULT_NOTIFICATION_DURATION = 5000

type NotificationVariantColors = {
  background: string
  text: string
}

export const NOTIFICATION_VARIANT_COLORS: Record<NotificationVariant, NotificationVariantColors> = {
  default: {
    background: '#374151',
    text: COLORS.white,
  },
  success: {
    background: COLORS.green,
    text: COLORS.white,
  },
  warning: {
    background: COLORS.yellow,
    text: COLORS.white,
  },
  danger: {
    background: COLORS.red,
    text: COLORS.white,
  },
  info: {
    background: COLORS['steel-blue'],
    text: COLORS.white,
  },
}
