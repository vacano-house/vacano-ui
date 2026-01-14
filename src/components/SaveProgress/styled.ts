import styled from '@emotion/styled'

import { alpha, COLORS, KEYFRAMES } from '../../lib'

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background-color: ${alpha(COLORS['iron-grey'], 10)};
  backdrop-filter: blur(8px);
  border-radius: 24px;
  animation: ${KEYFRAMES.fadeIn} 0.2s ease-out;
  pointer-events: none;
  color: ${COLORS['black']};
`

export const StyledMessage = styled.span`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`
