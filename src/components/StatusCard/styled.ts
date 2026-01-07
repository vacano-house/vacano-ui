import styled from '@emotion/styled'

import { getTrendColor } from './helpers'
import { StatusCardTrend } from './types'
import { COLORS } from '../../lib'

type StyledContainerProps = {
  $border: boolean
  $shadow: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  background-color: ${COLORS.white};
  border-radius: 16px;
  border: ${({ $border }) => ($border ? '1px solid #e5e7eb' : 'none')};
  box-shadow: ${({ $shadow }) => ($shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none')};
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const StyledLabel = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${COLORS['iron-grey']};
`

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: ${COLORS['iron-grey']};

  & svg {
    width: 18px;
    height: 18px;
  }
`

export const StyledValue = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: ${COLORS.black};
`

type StyledTrendProps = {
  $variant: StatusCardTrend
}

export const StyledTrend = styled.p<StyledTrendProps>`
  margin: 0;
  font-size: 12px;
  color: ${({ $variant }) => getTrendColor($variant)};
`
