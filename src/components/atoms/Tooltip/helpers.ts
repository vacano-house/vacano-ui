import { TOOLTIP_VARIANT_COLORS } from './constants'
import { TooltipVariant } from './types'

export const getTooltipVariantColors = (variant: TooltipVariant) => {
  return TOOLTIP_VARIANT_COLORS[variant] ?? TOOLTIP_VARIANT_COLORS['dark']
}
