import { colors, shadows } from '../palette'
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
  checkbox: {
    box: {
      backgroundColor: 'transparent',
      borderColor: colors.mist,
      checked: {
        backgroundColor: colors.onyx,
        borderColor: colors.onyx,
      },
      focus: {
        shadowColor: colors.focusRingDarkSubtle,
      },
    },
    icon: {
      color: colors.white,
    },
    label: {
      color: colors.onyx,
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
  checkboxCard: {
    container: {
      backgroundColor: colors.white,
      borderColor: colors.mist,
      hover: {
        borderColor: colors.silver,
      },
      checked: {
        backgroundColor: colors.white,
        borderColor: colors.onyx,
      },
      focus: {
        outlineColor: colors.focusRingDarkSubtle,
      },
      disabled: {
        backgroundColor: colors.snow,
        borderColor: colors.cloud,
      },
    },
    label: {
      color: colors.onyx,
      disabled: {
        color: colors.silver,
      },
    },
    description: {
      color: colors.slate,
      disabled: {
        color: colors.silver,
      },
    },
    state: {
      warning: {
        container: {
          borderColor: colors.amber,
          checked: {
            borderColor: colors.amber,
          },
        },
        label: {
          color: colors.amber,
        },
        description: {
          color: colors.amber,
        },
      },
      error: {
        container: {
          borderColor: colors.red,
          checked: {
            borderColor: colors.red,
          },
        },
        label: {
          color: colors.red,
        },
        description: {
          color: colors.red,
        },
      },
    },
  },
  checkboxGroup: {
    label: {
      color: colors.onyx,
    },
  },
  input: {
    wrapper: {
      backgroundColor: colors.inputBgLight,
      borderColor: colors.mist,
      focus: {
        outlineColor: colors.focusRingDarkSubtle,
      },
      disabled: {
        backgroundColor: colors.snow,
        borderColor: colors.cloud,
      },
    },
    label: {
      color: colors.slate,
    },
    input: {
      color: colors.onyx,
      placeholderColor: colors.silver,
      disabled: {
        color: colors.silver,
      },
    },
    icon: {
      color: colors.slate,
      disabled: {
        color: colors.silver,
      },
    },
    toggle: {
      color: colors.slate,
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
          color: colors.onyx,
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
          color: colors.onyx,
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
      borderColor: colors.mist,
      checked: {
        borderColor: colors.onyx,
      },
      focus: {
        shadowColor: colors.focusRingDarkSubtle,
      },
    },
    dot: {
      color: colors.onyx,
    },
    label: {
      color: colors.onyx,
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
  radioCard: {
    container: {
      backgroundColor: colors.white,
      borderColor: colors.mist,
      hover: {
        borderColor: colors.silver,
      },
      checked: {
        backgroundColor: colors.white,
        borderColor: colors.onyx,
      },
      focus: {
        outlineColor: colors.focusRingDarkSubtle,
      },
      disabled: {
        backgroundColor: colors.snow,
        borderColor: colors.cloud,
      },
    },
    label: {
      color: colors.onyx,
      disabled: {
        color: colors.silver,
      },
    },
    description: {
      color: colors.slate,
      disabled: {
        color: colors.silver,
      },
    },
    state: {
      warning: {
        container: {
          borderColor: colors.amber,
          checked: {
            borderColor: colors.amber,
          },
        },
        label: {
          color: colors.amber,
        },
        description: {
          color: colors.amber,
        },
      },
      error: {
        container: {
          borderColor: colors.red,
          checked: {
            borderColor: colors.red,
          },
        },
        label: {
          color: colors.red,
        },
        description: {
          color: colors.red,
        },
      },
    },
  },
  radioGroup: {
    label: {
      color: colors.onyx,
    },
  },
  dropdown: {
    content: {
      backgroundColor: colors.white,
      borderColor: colors.cloud,
      shadow: shadows.xl,
    },
  },
}
