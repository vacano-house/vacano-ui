import styled from '@emotion/styled'

import { getPanelVariantColors } from './helpers'
import { PanelVariant } from './types'
import { COLORS } from '../../lib'

type StyledContainerProps = {
  $variant: PanelVariant
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border: 1px dashed ${({ $variant }) => getPanelVariantColors($variant).border};
  border-radius: 16px;
  background-color: ${({ $variant }) => getPanelVariantColors($variant).background};
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
`

export const StyledLabel = styled.div`
  position: absolute;
  top: -1px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 0 0 8px 8px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.4;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

type StyledTitleProps = {
  $variant: PanelVariant
}

export const StyledTitle = styled.div<StyledTitleProps>`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ $variant }) => getPanelVariantColors($variant).title};
`

type StyledDescriptionProps = {
  $variant: PanelVariant
}

export const StyledDescription = styled.div<StyledDescriptionProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ $variant }) => getPanelVariantColors($variant).description};
`

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
