import { DropdownAlign, DropdownPlacement } from './types'
import { alpha, COLORS } from '../../../lib'

export const DROPDOWN_DEFAULT_PLACEMENT: DropdownPlacement = 'bottom'
export const DROPDOWN_DEFAULT_ALIGN: DropdownAlign = 'start'
export const DROPDOWN_DEFAULT_OFFSET = 4

export const DROPDOWN_CONTENT_PROPS = {
  background: COLORS['white'],
  border: alpha(COLORS['black'], 10),
  shadow: `0 4px 16px ${alpha(COLORS['black'], 15)}`,
}
