import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { COLORS } from '../../lib'

const orbit1 = keyframes`
  from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
`

const orbit2 = keyframes`
  from { transform: rotate(120deg) translateX(14px) rotate(-120deg); }
  to { transform: rotate(480deg) translateX(14px) rotate(-480deg); }
`

const orbit3 = keyframes`
  from { transform: rotate(240deg) translateX(26px) rotate(-240deg); }
  to { transform: rotate(600deg) translateX(26px) rotate(-600deg); }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 28px;
`

export const StyledIndicator = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledOrbitDot = styled.div<{ $index: number }>`
  position: absolute;
  width: ${(props) => (props.$index === 0 ? 6 : props.$index === 1 ? 4 : 3)}px;
  height: ${(props) => (props.$index === 0 ? 6 : props.$index === 1 ? 4 : 3)}px;
  border-radius: 50%;
  background: ${COLORS['black']};
  opacity: ${(props) => (props.$index === 0 ? 1 : props.$index === 1 ? 0.6 : 0.35)};
  animation: ${(props) => (props.$index === 0 ? orbit1 : props.$index === 1 ? orbit2 : orbit3)}
    ${(props) => (props.$index === 0 ? 3 : props.$index === 1 ? 2 : 4.5)}s linear infinite;
`

export const StyledScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  line-height: 1.5;
  text-align: center;
  max-width: 360px;
`
