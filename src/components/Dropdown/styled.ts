import styled from '@emotion/styled'

import { DropdownAlign, DropdownPosition } from './types'
import { COLORS, Z_INDEX } from '../../lib'

export const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const StyledTrigger = styled.div`
  cursor: pointer;
`

const contentStyles = `
  min-width: 160px;
  padding: 8px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const getTransform = ($open: boolean, $position: DropdownPosition) => {
  if (!$open) {
    return $position === 'bottom' ? 'translateY(-8px)' : 'translateY(8px)'
  }
  return 'translateY(0)'
}

export const StyledContent = styled.div<{
  $align: DropdownAlign
  $open: boolean
  $position: DropdownPosition
}>`
  position: absolute;
  ${({ $position }) =>
    $position === 'bottom' ? 'top: calc(100% + 4px);' : 'bottom: calc(100% + 4px);'}
  ${({ $align }) => ($align === 'left' ? 'left: 0;' : 'right: 0;')}
  z-index: ${Z_INDEX.dropdown};
  ${contentStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open, $position }) => getTransform($open, $position)};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`

export const StyledPortalContent = styled.div<{ $open: boolean; $position: DropdownPosition }>`
  position: fixed;
  z-index: ${Z_INDEX.portalDropdown};
  ${contentStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open, $position }) => getTransform($open, $position)};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`
