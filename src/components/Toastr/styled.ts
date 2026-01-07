import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { getToastVariantColors } from './helpers'
import type { ToastVariant } from './types'
import { COLORS } from '../../lib'

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

export const StyledToastrContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
  width: auto;
  max-width: 90vw;
`

type StyledToastProps = {
  $variant: ToastVariant
  $isExiting: boolean
}

export const StyledToast = styled.div<StyledToastProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 32px;
  padding: 8px 8px 8px 16px;
  background-color: ${({ $variant }) => getToastVariantColors($variant).background};
  color: ${({ $variant }) => getToastVariantColors($variant).text};
  border: 1px solid ${({ $variant }) => getToastVariantColors($variant).border};
  border-radius: 96px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${({ $isExiting }) => ($isExiting ? slideOut : slideIn)} 0.3s ease-out;
  pointer-events: auto;
  max-width: 500px;
`

export const StyledToastMessage = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledToastCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }
`

export const StyledToastrBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`

export const StyledQueueCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 8px 16px;
  background-color: #374151;
  color: ${COLORS.white};
  border-radius: 96px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  margin-left: auto;
`
