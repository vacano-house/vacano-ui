import styled from '@emotion/styled'

import { BadgeColor, BadgePlacement, BadgeShape, BadgeSize, BadgeVariant } from './types'
import { COLORS } from '../../lib'

const COLOR_MAP: Record<BadgeColor, { bg: string; text: string; border: string; flatBg: string }> =
  {
    default: { bg: COLORS.black, text: COLORS.white, border: COLORS.black, flatBg: COLORS.gray },
    success: { bg: COLORS.green, text: COLORS.white, border: COLORS.green, flatBg: '#dcfce7' },
    warning: { bg: COLORS.yellow, text: COLORS.black, border: COLORS.yellow, flatBg: '#fef9c3' },
    danger: { bg: COLORS.red, text: COLORS.white, border: COLORS.red, flatBg: '#fee2e2' },
  }

const SIZE_MAP: Record<
  BadgeSize,
  { minWidth: number; height: number; fontSize: number; padding: string; dotSize: number }
> = {
  sm: { minWidth: 16, height: 16, fontSize: 10, padding: '0 4px', dotSize: 8 },
  md: { minWidth: 20, height: 20, fontSize: 11, padding: '0 5px', dotSize: 10 },
  lg: { minWidth: 24, height: 24, fontSize: 12, padding: '0 6px', dotSize: 12 },
}

const getPlacement = ($placement: BadgePlacement, $shape: BadgeShape) => {
  const offset = $shape === 'circle' ? '10%' : '0%'

  switch ($placement) {
    case 'top-right':
      return `top: 0; right: 0; transform: translate(50%, -50%) translate(-${offset}, ${offset});`
    case 'top-left':
      return `top: 0; left: 0; transform: translate(-50%, -50%) translate(${offset}, ${offset});`
    case 'bottom-right':
      return `bottom: 0; right: 0; transform: translate(50%, 50%) translate(-${offset}, -${offset});`
    case 'bottom-left':
      return `bottom: 0; left: 0; transform: translate(-50%, 50%) translate(${offset}, -${offset});`
  }
}

const getVariantStyles = ($variant: BadgeVariant, $color: BadgeColor) => {
  const c = COLOR_MAP[$color]

  switch ($variant) {
    case 'solid':
      return `background-color: ${c.bg}; color: ${c.text};`
    case 'flat':
      return `background-color: ${c.flatBg}; color: ${$color === 'default' ? COLORS.black : c.bg};`
    case 'bordered':
      return `background-color: transparent; color: ${c.border}; border: 1.5px solid ${c.border};`
  }
}

export const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
`

type StyledBadgeProps = {
  $color: BadgeColor
  $dot: boolean
  $invisible: boolean
  $placement: BadgePlacement
  $shape: BadgeShape
  $showOutline: boolean
  $size: BadgeSize
  $variant: BadgeVariant
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  font-weight: 600;
  border-radius: 999px;
  z-index: 1;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  ${({ $dot, $size }) =>
    $dot
      ? `
    width: ${SIZE_MAP[$size].dotSize}px;
    height: ${SIZE_MAP[$size].dotSize}px;
    min-width: auto;
    padding: 0;
  `
      : `
    min-width: ${SIZE_MAP[$size].minWidth}px;
    height: ${SIZE_MAP[$size].height}px;
    font-size: ${SIZE_MAP[$size].fontSize}px;
    padding: ${SIZE_MAP[$size].padding};
  `}

  ${({ $variant, $color }) => getVariantStyles($variant, $color)}

  ${({ $placement, $shape }) => getPlacement($placement, $shape)}

  ${({ $showOutline }) =>
    $showOutline &&
    `
    box-shadow: 0 0 0 2px ${COLORS.white};
  `}

  ${({ $invisible }) =>
    $invisible &&
    `
    opacity: 0;
    transform: scale(0);
  `}
`
