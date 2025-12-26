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
  checkbox: {
    box: {
      backgroundColor: 'transparent',
      borderColor: colors.ash,
      checked: {
        backgroundColor: colors.white,
        borderColor: colors.white,
      },
      focus: {
        shadowColor: colors.focusRingLightSubtle,
      },
    },
    icon: {
      color: colors.black,
    },
    label: {
      color: colors.white,
    },
    state: {
      warning: {
        box: {
          borderColor: colors.amber,
          checked: {
            backgroundColor: colors.amber,
            borderColor: colors.amber,
          },
          focus: {
            shadowColor: colors.focusRingWarning,
          },
        },
        label: {
          color: colors.amber,
        },
      },
      error: {
        box: {
          borderColor: colors.red,
          checked: {
            backgroundColor: colors.red,
            borderColor: colors.red,
          },
          focus: {
            shadowColor: colors.focusRingError,
          },
        },
        label: {
          color: colors.red,
        },
      },
    },
  },
  checkboxGroup: {
    label: {
      color: colors.white,
    },
  },
  input: {
    wrapper: {
      backgroundColor: colors.inputBgDark,
      borderColor: colors.slate,
      focus: {
        outlineColor: colors.focusRingLightSubtle,
      },
      disabled: {
        backgroundColor: colors.graphite,
        borderColor: colors.slate,
      },
    },
    label: {
      color: colors.cloud,
    },
    input: {
      color: colors.white,
      placeholderColor: colors.ash,
      disabled: {
        color: colors.ash,
      },
    },
    icon: {
      color: colors.cloud,
      disabled: {
        color: colors.ash,
      },
    },
    toggle: {
      color: colors.cloud,
    },
    state: {
      warning: {
        wrapper: {
          backgroundColor: colors.inputBgWarning,
          borderColor: colors.amber,
          focus: {
            outlineColor: colors.focusRingWarning,
          },
        },
        label: {
          color: colors.amber,
        },
        input: {
          color: colors.white,
          placeholderColor: colors.amber,
        },
        icon: {
          color: colors.amber,
        },
      },
      error: {
        wrapper: {
          backgroundColor: colors.inputBgError,
          borderColor: colors.red,
          focus: {
            outlineColor: colors.focusRingError,
          },
        },
        label: {
          color: colors.red,
        },
        input: {
          color: colors.white,
          placeholderColor: colors.red,
        },
        icon: {
          color: colors.red,
        },
      },
    },
  },
  radio: {
    circle: {
      borderColor: colors.ash,
      checked: {
        borderColor: colors.white,
      },
      focus: {
        shadowColor: colors.focusRingLightSubtle,
      },
    },
    dot: {
      color: colors.white,
    },
    label: {
      color: colors.white,
    },
    state: {
      warning: {
        circle: {
          borderColor: colors.amber,
          checked: {
            borderColor: colors.amber,
          },
          focus: {
            shadowColor: colors.focusRingWarning,
          },
        },
        dot: {
          color: colors.amber,
        },
        label: {
          color: colors.amber,
        },
      },
      error: {
        circle: {
          borderColor: colors.red,
          checked: {
            borderColor: colors.red,
          },
          focus: {
            shadowColor: colors.focusRingError,
          },
        },
        dot: {
          color: colors.red,
        },
        label: {
          color: colors.red,
        },
      },
    },
  },
  radioGroup: {
    label: {
      color: colors.white,
    },
  },
}
