import styled from '@emotion/styled'

import { alpha, COLORS, KEYFRAMES } from '../../../lib'

type StyledOverlayProps = {
  $animated: boolean
}

type StyledContentProps = {
  $animated: boolean
  $width: string
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${alpha(COLORS['black'], 50)};
  animation: ${KEYFRAMES.fadeIn} ${(props) => (props.$animated ? '0.15s' : '0s')} ease-out forwards;
`

export const StyledContent = styled.div<StyledContentProps>`
  position: relative;
  z-index: 1001;
  width: ${(props) => props.$width};
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  overflow: auto;
  background-color: ${COLORS['white']};
  border-radius: 16px;
  box-shadow: 0 8px 32px ${alpha(COLORS['black'], 20)};
  animation: ${KEYFRAMES.scaleIn} ${(props) => (props.$animated ? '0.15s' : '0s')} ease-out forwards;
`
