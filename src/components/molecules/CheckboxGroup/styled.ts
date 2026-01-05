import styled from '@emotion/styled'

import { CHECKBOX_GROUP_PROPS } from './constants'

type StyledLabelProps = {
  $disabled?: boolean
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StyledLabel = styled.span<StyledLabelProps>`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) =>
    props.$disabled ? CHECKBOX_GROUP_PROPS.label.disabledColor : CHECKBOX_GROUP_PROPS.label.color};
  margin-bottom: 4px;
`

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
