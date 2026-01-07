import { BUTTON_SIZE_PROPS, BUTTON_VARIANT_PROPS } from './constants'
import { ButtonVariant } from './types'
import { VacanoComponentSize } from '../../lib'

export const getButtonVariantProps = (variant: ButtonVariant) => {
  const result = BUTTON_VARIANT_PROPS[variant]
  if (!result) {
    return BUTTON_VARIANT_PROPS['normal']
  }

  return result
}

export const getButtonSizeProps = (size: VacanoComponentSize) => {
  const result = BUTTON_SIZE_PROPS[size]
  if (!result) {
    return BUTTON_SIZE_PROPS['default']
  }

  return result
}

export const getButtonWidthProps = (fullWidth: boolean) => {
  if (fullWidth) {
    return 'auto'
  }

  return 'fit-content'
}
