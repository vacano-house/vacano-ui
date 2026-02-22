import styled from '@emotion/styled'

import { CardRadius, CardShadow } from './types'
import { alpha, COLORS } from '../../lib'

const SHADOW_MAP: Record<CardShadow, string> = {
  none: 'none',
  sm: `0 1px 2px ${alpha(COLORS.black, 5)}`,
  md: `0 4px 14px ${alpha(COLORS.black, 10)}`,
  lg: `0 10px 30px ${alpha(COLORS.black, 15)}`,
}

const RADIUS_MAP: Record<CardRadius, string> = {
  none: '0',
  sm: '8px',
  md: '12px',
  lg: '16px',
}

type StyledCardProps = {
  $blurred: boolean
  $border: boolean
  $disabled: boolean
  $footerBlurred: boolean
  $fullWidth: boolean
  $hoverable: boolean
  $pressable: boolean
  $radius: CardRadius
  $shadow: CardShadow
}

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ $blurred }) => ($blurred ? alpha(COLORS.white, 70) : COLORS.white)};
  border-radius: ${({ $radius }) => RADIUS_MAP[$radius]};
  border: ${({ $border }) => ($border ? `1px solid ${alpha(COLORS['iron-grey'], 15)}` : 'none')};
  box-shadow: ${({ $shadow }) => SHADOW_MAP[$shadow]};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: ${({ $pressable }) => ($pressable ? 'pointer' : 'default')};
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  ${({ $blurred }) =>
    $blurred &&
    `
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}

  ${({ $hoverable, $pressable }) =>
    ($hoverable || $pressable) &&
    `
    &:hover {
      box-shadow: ${SHADOW_MAP.lg};
    }
  `}

  ${({ $pressable }) =>
    $pressable &&
    `
    user-select: none;

    &:active {
      transform: scale(0.98);
    }
  `}
`

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 16px 0;
  z-index: 1;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 16px;
  z-index: 1;
`

type StyledCardFooterProps = {
  $blurred: boolean
}

export const StyledCardFooter = styled.div<StyledCardFooterProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px;
  z-index: 1;

  ${({ $blurred }) =>
    $blurred &&
    `
    padding: 12px 16px;
    background-color: ${alpha(COLORS.white, 60)};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-top: 1px solid ${alpha(COLORS['iron-grey'], 15)};
  `}
`
