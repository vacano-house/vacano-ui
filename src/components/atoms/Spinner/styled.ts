import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import type { StyledSpinnerContainerProps } from './types'

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const getBorderWidth = (size: number) => Math.max(2, Math.round(size / 10))

export const StyledSpinnerContainer = styled.span<StyledSpinnerContainerProps>`
  display: inline-block;
  width: ${({ $size }) => $size}px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;

  /* Track (faint background circle) */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${({ $size }) => getBorderWidth($size)}px solid currentColor;
    opacity: 0.2;
  }

  /* Spinning arc */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${({ $size }) => getBorderWidth($size)}px solid transparent;
    border-right-color: currentColor;
    animation: ${rotate} 0.8s linear infinite;
  }
`
