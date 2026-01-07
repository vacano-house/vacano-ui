import { PanelVariant } from './types'
import { alpha, COLORS } from '../../lib'

type PanelVariantColors = {
  background: string
  border: string
  title: string
  description: string
}

export const PANEL_VARIANT_COLORS: Record<PanelVariant, PanelVariantColors> = {
  light: {
    background: COLORS.white,
    border: alpha(COLORS.black, 30),
    title: COLORS.black,
    description: COLORS['iron-grey'],
  },
  dark: {
    background: alpha(COLORS.white, 5),
    border: alpha(COLORS.white, 30),
    title: COLORS.white,
    description: '#9ca3af',
  },
}
