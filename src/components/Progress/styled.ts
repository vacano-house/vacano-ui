import styled from '@emotion/styled'

import { PROGRESS_SIZE_PROPS } from './constants'
import { COLORS, VacanoComponentSize } from '../../lib'

export const StyledTrack = styled.div<{ $size: VacanoComponentSize }>`
  width: 100%;
  height: ${({ $size }) => PROGRESS_SIZE_PROPS[$size].height}px;
  border-radius: ${({ $size }) => PROGRESS_SIZE_PROPS[$size].radius}px;
  background-color: ${COLORS['gray']};
  overflow: hidden;
`

export const StyledBar = styled.div<{ $size: VacanoComponentSize; $value: number }>`
  height: 100%;
  width: ${({ $value }) => Math.min(100, Math.max(0, $value))}%;
  border-radius: ${({ $size }) => PROGRESS_SIZE_PROPS[$size].radius}px;
  background-color: ${COLORS.black};
  transition: width 0.2s ease;
`
