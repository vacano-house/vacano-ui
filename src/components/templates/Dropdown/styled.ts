import styled from '@emotion/styled'

import { DropdownAlign } from './types'
import { COLORS } from '../../../lib'

export const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const StyledTrigger = styled.div`
  cursor: pointer;
`

const contentStyles = `
  z-index: 100;
  min-width: 160px;
  padding: 8px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const StyledContent = styled.div<{ $align: DropdownAlign; $open: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  ${({ $align }) => ($align === 'left' ? 'left: 0;' : 'right: 0;')}
  ${contentStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`

export const StyledPortalContent = styled.div<{ $open: boolean }>`
  position: fixed;
  ${contentStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`
