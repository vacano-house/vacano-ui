import { TEXTAREA_VARIANT_PROPS } from './constants'
import { TextareaVariant } from './types'

export const getTextareaVariantProps = (variant: TextareaVariant) => {
  return TEXTAREA_VARIANT_PROPS[variant] ?? TEXTAREA_VARIANT_PROPS['normal']
}
