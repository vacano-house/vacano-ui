import { TOAST_VARIANT_COLORS } from './constants'
import { ToastVariant } from './types'

export const getToastVariantColors = (variant: ToastVariant) => {
  return TOAST_VARIANT_COLORS[variant] ?? TOAST_VARIANT_COLORS['default']
}
