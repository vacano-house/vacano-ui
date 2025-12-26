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
}
