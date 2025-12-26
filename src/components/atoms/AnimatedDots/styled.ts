import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import type { StyledAnimatedDotsContainerProps } from './types'

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`

export const StyledAnimatedDotsContainer = styled.span<StyledAnimatedDotsContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $size }) => Math.round($size * 0.6)}px;
`

export const StyledAnimatedDot = styled.span<StyledAnimatedDotsContainerProps & { $delay: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: currentColor;
  animation: ${pulse} 0.8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`
