import { MultiValueVariant } from './types'
import { ChipVariant } from '../../atoms'
import { alpha, COLORS } from '../../../lib'

export const MULTI_VALUE_CHIP_VARIANT: Record<MultiValueVariant, ChipVariant> = {
  normal: 'black',
  error: 'red',
}

export const MULTI_VALUE_VARIANT_PROPS: Record<
  MultiValueVariant,
  {
    border: string
    background: string
    placeholder: string
  }
> = {
  normal: {
    border: alpha(COLORS['black'], 60),
    background: alpha(COLORS['black'], 2),
    placeholder: alpha(COLORS['black'], 40),
  },
  error: {
    border: alpha(COLORS['red'], 60),
    background: alpha(COLORS['red'], 2),
    placeholder: alpha(COLORS['red'], 40),
  },
}
