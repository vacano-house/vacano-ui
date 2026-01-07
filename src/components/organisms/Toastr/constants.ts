import { ToastVariant } from './types'
import { COLORS } from '../../../lib'

export const MAX_VISIBLE_TOASTS = 3

type ToastVariantColors = {
  background: string
  text: string
  border: string
}

export const TOAST_VARIANT_COLORS: Record<ToastVariant, ToastVariantColors> = {
  default: {
    background: '#374151',
    text: COLORS.white,
    border: '#374151',
  },
  success: {
    background: COLORS.green,
    text: COLORS.white,
    border: COLORS.green,
  },
  warning: {
    background: COLORS.yellow,
    text: COLORS.white,
    border: COLORS.yellow,
  },
  danger: {
    background: COLORS.red,
    text: COLORS.white,
    border: COLORS.red,
  },
}
