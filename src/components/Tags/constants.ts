import { TagsVariant } from './types'
import { alpha, COLORS } from '../../lib'

type VariantProps = {
  border: string
  placeholder: string
}

export const VARIANT_PROPS: Record<TagsVariant, VariantProps> = {
  normal: {
    border: COLORS['iron-grey'],
    placeholder: COLORS['iron-grey'],
  },
  error: {
    border: COLORS.red,
    placeholder: alpha(COLORS.red, 40),
  },
}
