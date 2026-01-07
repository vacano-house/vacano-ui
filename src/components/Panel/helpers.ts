import { PANEL_VARIANT_COLORS } from './constants'
import { PanelVariant } from './types'

export const getPanelVariantColors = (variant: PanelVariant) => {
  return PANEL_VARIANT_COLORS[variant] ?? PANEL_VARIANT_COLORS['light']
}
