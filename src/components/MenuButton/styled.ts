import styled from '@emotion/styled'

import { COLORS } from '../../lib'

const SIZES = {
  default: { box: 40, line: 22, weight: 2.5, gap: 6 },
  compact: { box: 32, line: 18, weight: 2, gap: 5 },
} as const

export const StyledButton = styled.button<{ $size: 'default' | 'compact'; $disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => SIZES[$size].box}px;
  height: ${({ $size }) => SIZES[$size].box}px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  outline: none;
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${COLORS.gray};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${COLORS['steel-blue']};
  }
`

export const StyledLines = styled.div<{ $size: 'default' | 'compact'; $open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $size }) => SIZES[$size].gap}px;
`

export const StyledLine = styled.span<{
  $size: 'default' | 'compact'
  $position: 'top' | 'middle' | 'bottom'
  $open: boolean
}>`
  display: block;
  width: ${({ $size }) => SIZES[$size].line}px;
  height: ${({ $size }) => SIZES[$size].weight}px;
  background-color: ${COLORS.black};
  border-radius: 2px;
  transition:
    transform 0.3s ease,
    opacity 0.2s ease;
  transform-origin: center;

  ${({ $position, $size, $open }) => {
    const { gap, weight } = SIZES[$size]
    const offset = gap + weight

    if ($position === 'top') {
      return $open ? `transform: translateY(${offset}px) rotate(45deg);` : ''
    }

    if ($position === 'middle') {
      return $open ? 'opacity: 0;' : ''
    }

    if ($position === 'bottom') {
      return $open ? `transform: translateY(-${offset}px) rotate(-45deg);` : ''
    }
  }}
`
