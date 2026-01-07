import { SpinnerSize } from './types'
import { alpha, COLORS } from '../../lib'

type SpinnerSizeProps = {
  size: string
  borderWidth: string
}

export const SPINNER_SIZE_PROPS: Record<SpinnerSize, SpinnerSizeProps> = {
  xs: { size: '16px', borderWidth: '2px' },
  sm: { size: '20px', borderWidth: '2px' },
  md: { size: '32px', borderWidth: '3px' },
  lg: { size: '48px', borderWidth: '4px' },
}

export const SPINNER_COLORS = {
  track: alpha(COLORS['black'], 15),
  indicator: COLORS['black'],
}
