import { TagsVariant } from './types'
import { COLORS } from '../../lib'

type VariantProps = {
  border: string
  label: string
}

export const VARIANT_PROPS: Record<TagsVariant, VariantProps> = {
  normal: {
    border: COLORS['iron-grey'],
    label: COLORS.black,
  },
  error: {
    border: COLORS.red,
    label: COLORS.red,
  },
}
