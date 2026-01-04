import styled from '@emotion/styled'

import { getMultiValueVariantProps } from './helpers'
import { MultiValueVariant } from './types'
import { FieldLabel } from '../../atoms'

type StyledChipsProps = {
  $variant: MultiValueVariant
  $disabled: boolean
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledChips = styled.div<StyledChipsProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-width: 200px;
  min-height: 40px;
  padding: 6px 14px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid ${(props) => getMultiValueVariantProps(props.$variant).border};
  background-color: ${(props) => getMultiValueVariantProps(props.$variant).background};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`

type StyledPlaceholderProps = {
  $variant: MultiValueVariant
}

export const StyledPlaceholder = styled.span<StyledPlaceholderProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getMultiValueVariantProps(props.$variant).placeholder};
`
