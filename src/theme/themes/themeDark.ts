import { colors } from '../palette'
import type { Theme } from './types'

export const themeDark: Theme = {
  chip: {
    color: {
      default: colors.icyBlue,
      neutral: colors.icyBlue,
      success: colors.green,
      warning: colors.amber,
      error: colors.red,
    },
    backgroundColor: {
      default: colors.graphite,
      neutral: colors.graphite,
      success: colors.greenBg,
      warning: colors.amberBg,
      error: colors.redBg,
    },
  },
}
