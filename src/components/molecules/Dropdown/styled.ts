import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  StyledDropdownContainerProps,
  StyledDropdownContentProps,
  StyledDropdownTriggerProps,
} from './types'

const getDropdownContentBackground = (theme: Theme) => theme.dropdown.content.backgroundColor
const getDropdownContentBorder = (theme: Theme) => theme.dropdown.content.borderColor
const getDropdownContentShadow = (theme: Theme) => theme.dropdown.content.shadow

export const StyledDropdownContainer = styled.div<StyledDropdownContainerProps>`
  display: inline-block;
  position: relative;
  min-width: 0;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`

export const StyledDropdownTrigger = styled.div<StyledDropdownTriggerProps>`
  display: inline-flex;
  min-width: 0;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`

export const StyledDropdownContent = styled.div<StyledDropdownContentProps>`
  z-index: 1000;
  width: max-content;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => getDropdownContentBorder(theme)};
  background-color: ${({ theme }) => getDropdownContentBackground(theme)};
  box-shadow: ${({ theme }) => getDropdownContentShadow(theme)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`
