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

type CheckboxCardStateTheme = {
  container: {
    borderColor: string
    checked: {
      borderColor: string
    }
  }
  label: {
    color: string
  }
  description: {
    color: string
  }
}

type CheckboxCardTheme = {
  container: {
    backgroundColor: string
    borderColor: string
    hover: {
      borderColor: string
    }
    checked: {
      backgroundColor: string
      borderColor: string
    }
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
    disabled: {
      color: string
    }
  }
  description: {
    color: string
    disabled: {
      color: string
    }
  }
  state: {
    warning: CheckboxCardStateTheme
    error: CheckboxCardStateTheme
  }
}

type RadioCardStateTheme = {
  container: {
    borderColor: string
    checked: {
      borderColor: string
    }
  }
  label: {
    color: string
  }
  description: {
    color: string
  }
}

type RadioCardTheme = {
  container: {
    backgroundColor: string
    borderColor: string
    hover: {
      borderColor: string
    }
    checked: {
      backgroundColor: string
      borderColor: string
    }
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
    disabled: {
      color: string
    }
  }
  description: {
    color: string
    disabled: {
      color: string
    }
  }
  state: {
    warning: RadioCardStateTheme
    error: RadioCardStateTheme
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

type DropdownTheme = {
  content: {
    backgroundColor: string
    borderColor: string
    shadow: string
  }
}

type SelectStateTheme = {
  trigger: {
    backgroundColor: string
    borderColor: string
    focus: {
      outlineColor: string
    }
  }
  label: {
    color: string
  }
  value: {
    color: string
    placeholderColor: string
  }
  icon: {
    color: string
  }
  chevron: {
    color: string
  }
}

type SelectTheme = {
  trigger: {
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
  value: {
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
  chevron: {
    color: string
    disabled: {
      color: string
    }
  }
  content: {
    backgroundColor: string
    borderColor: string
    shadow: string
  }
  option: {
    color: string
    backgroundColor: string
    hover: {
      backgroundColor: string
    }
    selected: {
      backgroundColor: string
      color: string
    }
    check: {
      color: string
    }
  }
  search: {
    backgroundColor: string
    borderColor: string
    color: string
    placeholderColor: string
  }
  empty: {
    color: string
  }
  state: {
    warning: SelectStateTheme
    error: SelectStateTheme
  }
}

type MultiSelectStateTheme = {
  trigger: {
    backgroundColor: string
    borderColor: string
    focus: {
      outlineColor: string
    }
  }
  label: {
    color: string
  }
  chip: {
    backgroundColor: string
    color: string
    remove: {
      color: string
    }
  }
  icon: {
    color: string
  }
  chevron: {
    color: string
  }
}

type MultiSelectTheme = {
  trigger: {
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
  placeholder: {
    color: string
    disabled: {
      color: string
    }
  }
  chip: {
    backgroundColor: string
    color: string
    remove: {
      color: string
      hover: {
        color: string
      }
    }
    disabled: {
      backgroundColor: string
      color: string
      remove: {
        color: string
      }
    }
  }
  icon: {
    color: string
    disabled: {
      color: string
    }
  }
  chevron: {
    color: string
    disabled: {
      color: string
    }
  }
  content: {
    backgroundColor: string
    borderColor: string
    shadow: string
  }
  option: {
    color: string
    backgroundColor: string
    hover: {
      backgroundColor: string
    }
    selected: {
      backgroundColor: string
      color: string
    }
    check: {
      color: string
    }
  }
  search: {
    backgroundColor: string
    borderColor: string
    color: string
    placeholderColor: string
  }
  empty: {
    color: string
  }
  state: {
    warning: MultiSelectStateTheme
    error: MultiSelectStateTheme
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
  checkboxCard: CheckboxCardTheme
  checkboxGroup: CheckboxGroupTheme
  input: InputTheme
  radio: RadioTheme
  radioCard: RadioCardTheme
  radioGroup: RadioGroupTheme
  dropdown: DropdownTheme
  select: SelectTheme
  multiSelect: MultiSelectTheme
}
