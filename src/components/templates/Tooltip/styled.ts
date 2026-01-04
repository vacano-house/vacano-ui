import styled from '@emotion/styled'

import { TOOLTIP_CONTENT_PROPS } from './constants'

type StyledContentProps = {
  $isOpen: boolean
}

export const StyledContainer = styled.span`
  display: inline-flex;
`

export const StyledTrigger = styled.span`
  display: inline-flex;
`

export const StyledContent = styled.div<StyledContentProps>`
  z-index: 1000;
  max-width: 300px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${TOOLTIP_CONTENT_PROPS.background};
  box-shadow: ${TOOLTIP_CONTENT_PROPS.shadow};
  color: ${TOOLTIP_CONTENT_PROPS.color};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: none;
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`
