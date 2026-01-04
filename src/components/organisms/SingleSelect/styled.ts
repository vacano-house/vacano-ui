import styled from '@emotion/styled'

import { SINGLE_SELECT_PROPS } from './constants'
import { getSingleSelectVariantProps } from './helpers'
import { SingleSelectVariant } from './types'

export const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
`

type StyledTriggerProps = {
  $variant: SingleSelectVariant
  $disabled: boolean
  $focused: boolean
}

export const StyledTrigger = styled.div<StyledTriggerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 200px;
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 16px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.$focused
        ? getSingleSelectVariantProps(props.$variant).borderFocused
        : getSingleSelectVariantProps(props.$variant).border};
  background-color: ${(props) => getSingleSelectVariantProps(props.$variant).background};
  box-shadow: ${(props) =>
    props.$focused ? `0 0 0 3px ${getSingleSelectVariantProps(props.$variant).focusRing}` : 'none'};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
`

type StyledValueProps = {
  $variant: SingleSelectVariant
}

export const StyledValue = styled.span<StyledValueProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getSingleSelectVariantProps(props.$variant).value};
`

type StyledPlaceholderProps = {
  $variant: SingleSelectVariant
}

export const StyledPlaceholder = styled.span<StyledPlaceholderProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getSingleSelectVariantProps(props.$variant).placeholder};
`

type StyledDropdownProps = {
  $width: number
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
  width: ${(props) => props.$width}px;
  background: ${SINGLE_SELECT_PROPS.dropdown.background};
  border: 1px solid ${SINGLE_SELECT_PROPS.dropdown.border};
  border-radius: 12px;
  box-shadow: ${SINGLE_SELECT_PROPS.dropdown.shadow};
  overflow: hidden;
  z-index: 1000;
  outline: none;
`

export const StyledChevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$open ? 'rotate(180deg)' : 'rotate(0deg)')};

  & svg {
    width: 16px;
    height: 16px;
  }
`
