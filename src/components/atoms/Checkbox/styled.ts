import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type { CheckboxState } from './types'

export type StyledCheckboxContainerProps = {
  $disabled?: boolean
  $state?: CheckboxState
}

export type StyledCheckboxBoxProps = {
  $checked?: boolean
  $indeterminate?: boolean
  $state?: CheckboxState
}

export type StyledCheckboxIconProps = {
  $visible?: boolean
}

export type StyledCheckboxLabelProps = {
  $state?: CheckboxState
}

const getBoxBorderColor = (
  theme: Theme,
  checked?: boolean,
  indeterminate?: boolean,
  state?: CheckboxState,
) => {
  if (checked || indeterminate) {
    if (state === 'warning') return theme.checkbox.state.warning.box.checked.borderColor
    if (state === 'error') return theme.checkbox.state.error.box.checked.borderColor
    return theme.checkbox.box.checked.borderColor
  }

  if (state === 'warning') return theme.checkbox.state.warning.box.borderColor
  if (state === 'error') return theme.checkbox.state.error.box.borderColor
  return theme.checkbox.box.borderColor
}

const getBoxBackgroundColor = (
  theme: Theme,
  checked?: boolean,
  indeterminate?: boolean,
  state?: CheckboxState,
) => {
  if (checked || indeterminate) {
    if (state === 'warning') return theme.checkbox.state.warning.box.checked.backgroundColor
    if (state === 'error') return theme.checkbox.state.error.box.checked.backgroundColor
    return theme.checkbox.box.checked.backgroundColor
  }

  return theme.checkbox.box.backgroundColor
}

const getBoxFocusShadowColor = (theme: Theme, state?: CheckboxState) => {
  if (state === 'warning') return theme.checkbox.state.warning.box.focus.shadowColor
  if (state === 'error') return theme.checkbox.state.error.box.focus.shadowColor
  return theme.checkbox.box.focus.shadowColor
}

const getLabelColor = (theme: Theme, state?: CheckboxState) => {
  if (state === 'warning') return theme.checkbox.state.warning.label.color
  if (state === 'error') return theme.checkbox.state.error.label.color
  return theme.checkbox.label.color
}

export const StyledCheckboxContainer = styled.label<StyledCheckboxContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:has(input:focus-visible) > span:first-of-type {
    box-shadow: 0 0 0 3px ${({ theme, $state }) => getBoxFocusShadowColor(theme, $state)};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}
`

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const StyledCheckboxBox = styled.span<StyledCheckboxBoxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  border: 1.5px solid
    ${({ theme, $checked, $indeterminate, $state }) =>
      getBoxBorderColor(theme, $checked, $indeterminate, $state)};
  background-color: ${({ theme, $checked, $indeterminate, $state }) =>
    getBoxBackgroundColor(theme, $checked, $indeterminate, $state)};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
`

export const StyledCheckboxIcon = styled.span<StyledCheckboxIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.checkbox.icon.color};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'scale(1)' : 'scale(0.5)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
`

export const StyledCheckboxLabel = styled.span<StyledCheckboxLabelProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};
  user-select: none;
  font-weight: 500;
`
