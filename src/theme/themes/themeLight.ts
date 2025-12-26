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
  button: {
    primary: {
      color: colors.white,
      backgroundColor: colors.onyx,
      borderColor: colors.onyx,
      hover: {
        backgroundColor: colors.carbonBlack,
        borderColor: colors.carbonBlack,
      },
      active: {
        backgroundColor: colors.graphite,
        borderColor: colors.graphite,
      },
      focus: {
        outlineColor: colors.focusRingDark,
      },
      disabled: {
        color: colors.silver,
        backgroundColor: colors.snow,
        borderColor: colors.snow,
      },
      char: {
        color: colors.snow,
        backgroundColor: colors.slate,
      },
      icon: {
        color: colors.white,
      },
    },
    secondary: {
      color: colors.onyx,
      backgroundColor: colors.snow,
      borderColor: colors.cloud,
      hover: {
        backgroundColor: colors.cloud,
        borderColor: colors.mist,
      },
      active: {
        backgroundColor: colors.cloud,
        borderColor: colors.silver,
      },
      focus: {
        outlineColor: colors.focusRingDarkSubtle,
      },
      disabled: {
        color: colors.silver,
        backgroundColor: colors.snow,
        borderColor: colors.snow,
      },
      char: {
        color: colors.slate,
        backgroundColor: colors.mist,
      },
      icon: {
        color: colors.slate,
      },
    },
    ghost: {
      color: colors.onyx,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      hover: {
        backgroundColor: colors.hoverLight,
        borderColor: 'transparent',
      },
      active: {
        backgroundColor: colors.activeLight,
        borderColor: 'transparent',
      },
      focus: {
        outlineColor: colors.focusRingDarkSubtle,
      },
      disabled: {
        color: colors.silver,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      char: {
        color: colors.ash,
        backgroundColor: colors.snow,
      },
      icon: {
        color: colors.slate,
      },
    },
    danger: {
      color: colors.red,
      backgroundColor: 'transparent',
      borderColor: colors.redLight,
      hover: {
        backgroundColor: colors.redLight,
        borderColor: colors.redLight,
      },
      active: {
        backgroundColor: colors.redMedium,
        borderColor: colors.redMedium,
      },
      focus: {
        outlineColor: colors.focusRingDanger,
      },
      disabled: {
        color: colors.mist,
        backgroundColor: colors.snow,
        borderColor: colors.snow,
      },
      char: {
        color: colors.red,
        backgroundColor: colors.redLight,
      },
      icon: {
        color: colors.red,
      },
    },
  },
}
