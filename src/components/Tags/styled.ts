import styled from '@emotion/styled'

import { VARIANT_PROPS } from './constants'
import { TagsVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { FieldMessage } from '../FieldMessage'
import { alpha, COLORS } from '../../lib'

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledTrigger = styled.div<{
  $variant: TagsVariant
  $disabled: boolean
  $focused: boolean
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px dashed ${(props) => VARIANT_PROPS[props.$variant].border};
  border-radius: 8px;
  background: ${COLORS.white};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'text')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${(props) =>
      props.$disabled
        ? VARIANT_PROPS[props.$variant].border
        : props.$variant === 'error'
          ? COLORS.red
          : COLORS.black};
  }

  ${(props) =>
    props.$focused &&
    `
    outline: 2px solid ${props.$variant === 'error' ? COLORS.red : COLORS['steel-blue']};
    outline-offset: 2px;
  `}
`

export const StyledInput = styled.input<{ $disabled: boolean; $variant: TagsVariant }>`
  flex: 1;
  min-width: 80px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${COLORS.black};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'text')};

  &::placeholder {
    color: ${(props) => VARIANT_PROPS[props.$variant].placeholder};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const dropdownStyles = `
  z-index: 100;
  background-color: ${COLORS.white};
  border: 1px solid ${alpha(COLORS.black, 15)};
  border-radius: 8px;
  box-shadow: 0 4px 16px ${alpha(COLORS.black, 12)};
  max-height: 200px;
  overflow-y: auto;
`

const getDropdownTransform = ($open: boolean, $position: 'bottom' | 'top') => {
  if ($open) return 'translateY(0)'
  return $position === 'bottom' ? 'translateY(-8px)' : 'translateY(8px)'
}

const getDropdownTransition = `
  opacity 0.15s ease,
  transform 0.15s ease,
  visibility 0.15s;
`

export const StyledDropdown = styled.div<{ $open: boolean; $position: 'bottom' | 'top' }>`
  position: absolute;
  left: 0;
  right: 0;
  ${(props) =>
    props.$position === 'bottom' ? 'top: calc(100% + 4px);' : 'bottom: calc(100% + 4px);'}
  ${dropdownStyles}
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  transform: ${(props) => getDropdownTransform(props.$open, props.$position)};
  transition: ${getDropdownTransition};
`

export const StyledPortalDropdown = styled.div<{ $open: boolean; $position: 'bottom' | 'top' }>`
  position: fixed;
  ${dropdownStyles}
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  transform: ${(props) => getDropdownTransform(props.$open, props.$position)};
  transition: ${getDropdownTransition};
`

export const StyledOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${COLORS.black};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${COLORS.gray};
  }

  &:first-of-type {
    border-radius: 7px 7px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 7px 7px;
  }

  &:only-child {
    border-radius: 7px;
  }
`

export const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: ${COLORS['iron-grey']};
  font-size: 14px;
  text-align: center;
`

export const StyledMessage = styled(FieldMessage)`
  margin-left: 6px;
`
