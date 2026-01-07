import styled from '@emotion/styled'

import { getPanelVariantColors } from './helpers'
import { PanelVariant } from './types'

type StyledContainerProps = {
  $variant: PanelVariant
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border: 1px dashed ${({ $variant }) => getPanelVariantColors($variant).border};
  border-radius: 16px;
  background-color: ${({ $variant }) => getPanelVariantColors($variant).background};
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
