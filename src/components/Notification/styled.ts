import styled from '@emotion/styled'

import { getNotificationVariantColors } from './helpers'
import type { NotificationVariant } from './types'
import { KEYFRAMES } from '../../lib'

export const StyledNotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
`

type StyledNotificationBarProps = {
  $variant: NotificationVariant
  $isExiting: boolean
}

export const StyledNotificationBar = styled.div<StyledNotificationBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 44px;
  padding: 12px 48px;
  background-color: ${({ $variant }) => getNotificationVariantColors($variant).background};
  color: ${({ $variant }) => getNotificationVariantColors($variant).text};
  animation: ${({ $isExiting }) =>
      $isExiting ? KEYFRAMES.slideOutTopFade : KEYFRAMES.slideInTopFade}
    0.3s ease-out forwards;
  pointer-events: auto;
`

export const StyledNotificationMessage = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
`

export const StyledNotificationCloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const StyledNotificationWrapper = styled.div`
  position: relative;
`
