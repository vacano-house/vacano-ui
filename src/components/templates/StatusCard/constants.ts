import { StatusCardTrend } from './types'
import { COLORS } from '../../../lib'

export const STATUS_CARD_TREND_COLORS: Record<StatusCardTrend, string> = {
  positive: COLORS.green,
  negative: COLORS.red,
  neutral: COLORS['iron-grey'],
}
