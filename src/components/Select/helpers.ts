import { SELECT_SIZE_PROPS, SELECT_VARIANT_PROPS } from './constants'
import { SelectVariant } from './types'
import { VacanoComponentSize } from '../../lib'

export const getSelectSizeProps = (size: VacanoComponentSize) => {
  return SELECT_SIZE_PROPS[size] ?? SELECT_SIZE_PROPS['default']
}

export const getSelectVariantProps = (variant: SelectVariant) => {
  return SELECT_VARIANT_PROPS[variant] ?? SELECT_VARIANT_PROPS['normal']
}
