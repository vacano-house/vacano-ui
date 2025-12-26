import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type { ChipStatus, StyledChipContainerProps } from './types'

const getChipContainerColor = (theme: Theme, status?: ChipStatus) => {
  switch (status) {
    case 'neutral':
      return theme.chip.color.neutral
    case 'success':
      return theme.chip.color.success
    case 'warning':
      return theme.chip.color.warning
    case 'error':
      return theme.chip.color.error

    default:
      return theme.chip.color.default
  }
}

const getChipContainerBackgroundColor = (theme: Theme, status?: ChipStatus) => {
  switch (status) {
    case 'neutral':
      return theme.chip.backgroundColor.neutral
    case 'success':
      return theme.chip.backgroundColor.success
    case 'warning':
      return theme.chip.backgroundColor.warning
    case 'error':
      return theme.chip.backgroundColor.error

    default:
      return theme.chip.backgroundColor.default
  }
}

export const StyledChipContainer = styled.span<StyledChipContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  min-width: 0;
  max-width: ${({ $fullWidth }) => ($fullWidth ? 'none' : '200px')};
  color: ${({ theme, $status }) => getChipContainerColor(theme, $status)};
  background-color: ${({ theme, $status }) => getChipContainerBackgroundColor(theme, $status)};
`

export const StyledChipText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
