import { TooltipPlacement } from './types'
import { alpha, COLORS } from '../../../lib'

export const TOOLTIP_DEFAULT_PLACEMENT: TooltipPlacement = 'top'
export const TOOLTIP_DEFAULT_DELAY = 300
export const TOOLTIP_OFFSET = 8

export const TOOLTIP_CONTENT_PROPS = {
  background: COLORS['black'],
  color: COLORS['white'],
  shadow: `0 2px 8px ${alpha(COLORS['black'], 20)}`,
}
