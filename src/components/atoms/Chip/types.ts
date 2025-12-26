import type { HTMLAttributes } from 'react'

export type ChipStatus = 'neutral' | 'success' | 'warning' | 'error'

export type ChipClassnames = {
  container?: string
  text?: string
}

export type StyledChipContainerProps = {
  $status?: ChipStatus
  $fullWidth?: boolean
}

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  classnames?: ChipClassnames
  'data-test-id'?: string
  fullWidth?: boolean
  status?: ChipStatus
}
