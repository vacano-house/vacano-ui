import styled from '@emotion/styled'

import { getChipVariantProps } from './helpers'
import { ChipVariant } from './types'

type StyledContainerProps = {
  $variant: ChipVariant
  $deletable: boolean
}

type StyledDeleteProps = {
  $variant: ChipVariant
}

export const StyledContainer = styled.span<StyledContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${(props) => (props.$deletable ? '7px' : '10px')} 0 10px;
  border-radius: 12px;
  height: 24px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  background-color: ${(props) => getChipVariantProps(props.$variant).background};
  color: ${(props) => getChipVariantProps(props.$variant).color};
`

export const StyledDelete = styled.button<StyledDeleteProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-left: 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${(props) => getChipVariantProps(props.$variant).deleteHover};
  }

  & svg {
    width: 14px;
    height: 14px;
  }
`

export const StyledLabel = styled.span`
  flex: 1 0 auto;
`
