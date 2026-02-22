import styled from '@emotion/styled'

import { type AlertRadius, type AlertVariant } from './types'
import { COLORS } from '../../lib'

const RADIUS: Record<AlertRadius, string> = {
  none: '0',
  sm: '8px',
  md: '12px',
  lg: '16px',
  full: '9999px',
}

const ICON_COLORS: Record<AlertVariant, string> = {
  normal: COLORS.black,
  success: COLORS.green,
  warning: COLORS.yellow,
  danger: COLORS.red,
}

export const StyledContainer = styled.div<{ $radius: AlertRadius; $center: boolean }>`
  display: flex;
  align-items: ${({ $center }) => ($center ? 'center' : 'flex-start')};
  gap: 12px;
  padding: 16px;
  border-radius: ${({ $radius }) => RADIUS[$radius]};
  background-color: ${COLORS.gray};
`

export const StyledIcon = styled.div<{ $variant: AlertVariant }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLORS.white};
  box-shadow:
    0 0 0 4px ${COLORS.gray},
    0 0 0 5px rgba(0, 0, 0, 0.06);

  &::after {
    content: '';
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ $variant }) => ICON_COLORS[$variant]};
    color: ${COLORS.white};
  }

  > span svg {
    width: 16px;
    height: 16px;
  }
`

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`

export const StyledTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.black};
  line-height: 1.4;
`

export const StyledDescription = styled.div`
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  line-height: 1.5;
`
