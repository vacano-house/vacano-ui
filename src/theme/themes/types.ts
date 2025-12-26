type ButtonVariantTheme = {
  color: string
  backgroundColor: string
  borderColor: string
  hover: {
    backgroundColor: string
    borderColor: string
  }
  active: {
    backgroundColor: string
    borderColor: string
  }
  focus: {
    outlineColor: string
  }
  disabled: {
    color: string
    backgroundColor: string
    borderColor: string
  }
  char: {
    color: string
    backgroundColor: string
  }
  icon: {
    color: string
  }
}

type CheckboxStateTheme = {
  box: {
    borderColor: string
    checked: {
      backgroundColor: string
      borderColor: string
    }
    focus: {
      shadowColor: string
    }
  }
  label: {
    color: string
  }
}

type CheckboxTheme = {
  box: {
    backgroundColor: string
    borderColor: string
    checked: {
      backgroundColor: string
      borderColor: string
    }
    focus: {
      shadowColor: string
    }
  }
  icon: {
    color: string
  }
  label: {
    color: string
  }
  state: {
    warning: CheckboxStateTheme
    error: CheckboxStateTheme
  }
}

type RadioStateTheme = {
  circle: {
    borderColor: string
    checked: {
      borderColor: string
    }
    focus: {
      shadowColor: string
    }
  }
  dot: {
    color: string
  }
  label: {
    color: string
  }
}

type RadioTheme = {
  circle: {
    borderColor: string
    checked: {
      borderColor: string
    }
    focus: {
      shadowColor: string
    }
  }
  dot: {
    color: string
  }
  label: {
    color: string
  }
  state: {
    warning: RadioStateTheme
    error: RadioStateTheme
  }
}

type RadioGroupTheme = {
  label: {
    color: string
  }
}

type CheckboxGroupTheme = {
  label: {
    color: string
  }
}

type InputStateTheme = {
  wrapper: {
    backgroundColor: string
    borderColor: string
    focus: {
      outlineColor: string
    }
  }
  label: {
    color: string
  }
  input: {
    color: string
    placeholderColor: string
  }
  icon: {
    color: string
  }
}

type InputTheme = {
  wrapper: {
    backgroundColor: string
    borderColor: string
    focus: {
      outlineColor: string
    }
    disabled: {
      backgroundColor: string
      borderColor: string
    }
  }
  label: {
    color: string
  }
  input: {
    color: string
    placeholderColor: string
    disabled: {
      color: string
    }
  }
  icon: {
    color: string
    disabled: {
      color: string
    }
  }
  toggle: {
    color: string
  }
  state: {
    warning: InputStateTheme
    error: InputStateTheme
  }
}

export type Theme = {
  chip: {
    color: {
      default: string
      neutral: string
      success: string
      warning: string
      error: string
    }
    backgroundColor: {
      default: string
      neutral: string
      success: string
      warning: string
      error: string
    }
  }
  button: {
    primary: ButtonVariantTheme
    secondary: ButtonVariantTheme
    ghost: ButtonVariantTheme
    danger: ButtonVariantTheme
  }
  checkbox: CheckboxTheme
  checkboxGroup: CheckboxGroupTheme
  input: InputTheme
  radio: RadioTheme
  radioGroup: RadioGroupTheme
}
