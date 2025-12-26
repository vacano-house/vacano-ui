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
  button: {
    primary: {
      color: colors.black,
      backgroundColor: colors.white,
      borderColor: colors.white,
      hover: {
        backgroundColor: colors.cloud,
        borderColor: colors.cloud,
      },
      active: {
        backgroundColor: colors.mist,
        borderColor: colors.mist,
      },
      focus: {
        outlineColor: colors.focusRingLight,
      },
      disabled: {
        color: colors.ash,
        backgroundColor: colors.graphite,
        borderColor: colors.graphite,
      },
      char: {
        color: colors.slate,
        backgroundColor: colors.cloud,
      },
      icon: {
        color: colors.black,
      },
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.graphite,
      borderColor: colors.slate,
      hover: {
        backgroundColor: colors.slate,
        borderColor: colors.ash,
      },
      active: {
        backgroundColor: colors.ash,
        borderColor: colors.silver,
      },
      focus: {
        outlineColor: colors.focusRingLightSubtle,
      },
      disabled: {
        color: colors.ash,
        backgroundColor: colors.carbonBlack,
        borderColor: colors.carbonBlack,
      },
      char: {
        color: colors.mist,
        backgroundColor: colors.slate,
      },
      icon: {
        color: colors.cloud,
      },
    },
    ghost: {
      color: colors.white,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      hover: {
        backgroundColor: colors.hoverDark,
        borderColor: 'transparent',
      },
      active: {
        backgroundColor: colors.activeDark,
        borderColor: 'transparent',
      },
      focus: {
        outlineColor: colors.focusRingLightSubtle,
      },
      disabled: {
        color: colors.ash,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      char: {
        color: colors.mist,
        backgroundColor: colors.graphite,
      },
      icon: {
        color: colors.cloud,
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
        color: colors.ash,
        backgroundColor: colors.carbonBlack,
        borderColor: colors.carbonBlack,
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
