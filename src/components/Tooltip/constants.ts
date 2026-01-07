import { TooltipVariant } from './types'
import { COLORS } from '../../lib'

type TooltipVariantColors = {
  background: string
  text: string
  border?: string
}

export const TOOLTIP_VARIANT_COLORS: Record<TooltipVariant, TooltipVariantColors> = {
  dark: {
    background: COLORS.black,
    text: COLORS.white,
  },
  light: {
    background: COLORS.white,
    text: COLORS.black,
    border: COLORS.gray,
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
}
