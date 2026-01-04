import { CHECKBOX_STATE_PROPS } from './constants'
import { CheckboxVariant } from './types'

export const getCheckboxVariantProps = (variant: CheckboxVariant) => {
  return CHECKBOX_STATE_PROPS[variant] ?? CHECKBOX_STATE_PROPS['normal']
}
