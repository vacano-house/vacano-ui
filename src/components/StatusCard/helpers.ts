import { STATUS_CARD_TREND_COLORS } from './constants'
import { StatusCardTrend } from './types'

export const getTrendColor = (trend: StatusCardTrend) => {
  return STATUS_CARD_TREND_COLORS[trend] ?? STATUS_CARD_TREND_COLORS['neutral']
}
