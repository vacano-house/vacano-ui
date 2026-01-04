import styled from '@emotion/styled'

import { MULTI_SELECT_PROPS } from './constants'

export const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`

export const StyledTrigger = styled.div<{ $disabled: boolean }>`
  outline: none;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`

type StyledDropdownProps = {
  $width: number
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
  width: ${(props) => props.$width}px;
  background: ${MULTI_SELECT_PROPS.dropdown.background};
  border: 1px solid ${MULTI_SELECT_PROPS.dropdown.border};
  border-radius: 12px;
  box-shadow: ${MULTI_SELECT_PROPS.dropdown.shadow};
  overflow: hidden;
  z-index: 1000;
  outline: none;
`
