import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { COLORS } from '../../lib'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
`

type StyledContainerProps = {
  $isExiting: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: fixed;
  bottom: 24px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: ${COLORS.white};
  border: 1px dashed ${COLORS.gray};
  border-radius: 12px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  animation: ${({ $isExiting }) => ($isExiting ? slideOut : slideIn)} 0.2s ease-out forwards;
  z-index: 1000;
`

export const StyledMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.black};
  white-space: nowrap;
`

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
