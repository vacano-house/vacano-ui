import styled from '@emotion/styled'

import { DROPDOWN_CONTENT_PROPS } from './constants'

type StyledContainerProps = {
  $fullWidth?: boolean
}

type StyledTriggerProps = {
  $fullWidth?: boolean
}

type StyledContentProps = {
  $isOpen: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: inline-block;
  position: relative;
  min-width: 0;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
`

export const StyledTrigger = styled.div<StyledTriggerProps>`
  display: inline-flex;
  min-width: 0;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
`

export const StyledContent = styled.div<StyledContentProps>`
  z-index: 1000;
  width: max-content;
  border-radius: 12px;
  border: 1px solid ${DROPDOWN_CONTENT_PROPS.border};
  background-color: ${DROPDOWN_CONTENT_PROPS.background};
  box-shadow: ${DROPDOWN_CONTENT_PROPS.shadow};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`
