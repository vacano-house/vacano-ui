import { colors } from '../palette'
import type { Theme } from './types'

export const themeLight: Theme = {
  chip: {
    color: {
      default: colors.grey,
      neutral: colors.blue,
      success: colors.green,
      warning: colors.amber,
      error: colors.red,
    },
    backgroundColor: {
      default: colors.greyBg,
      neutral: colors.blueBg,
      success: colors.greenBg,
      warning: colors.amberBg,
      error: colors.redBg,
    },
  },
}
