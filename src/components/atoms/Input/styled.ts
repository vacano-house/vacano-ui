import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  InputState,
  StyledInputContainerProps,
  StyledInputFieldProps,
  StyledInputIconWrapperProps,
  StyledInputLabelProps,
  StyledInputToggleProps,
  StyledInputWrapperProps,
} from './types'

const getWrapperBackgroundColor = (theme: Theme, state?: InputState, disabled?: boolean) => {
  if (disabled) {
    return theme.input.wrapper.disabled.backgroundColor
  }

  if (state === 'warning') {
    return theme.input.state.warning.wrapper.backgroundColor
  }

  if (state === 'error') {
    return theme.input.state.error.wrapper.backgroundColor
  }

  return theme.input.wrapper.backgroundColor
}

const getWrapperBorderColor = (theme: Theme, state?: InputState, disabled?: boolean) => {
  if (disabled) {
    return theme.input.wrapper.disabled.borderColor
  }

  if (state === 'warning') {
    return theme.input.state.warning.wrapper.borderColor
  }

  if (state === 'error') {
    return theme.input.state.error.wrapper.borderColor
  }

  return theme.input.wrapper.borderColor
}

const getWrapperFocusOutlineColor = (theme: Theme, state?: InputState) => {
  if (state === 'warning') {
    return theme.input.state.warning.wrapper.focus.outlineColor
  }

  if (state === 'error') {
    return theme.input.state.error.wrapper.focus.outlineColor
  }

  return theme.input.wrapper.focus.outlineColor
}

const getLabelColor = (theme: Theme, state?: InputState) => {
  if (state === 'warning') {
    return theme.input.state.warning.label.color
  }

  if (state === 'error') {
    return theme.input.state.error.label.color
  }

  return theme.input.label.color
}

const getInputColor = (theme: Theme, state?: InputState) => {
  if (state === 'warning') {
    return theme.input.state.warning.input.color
  }

  if (state === 'error') {
    return theme.input.state.error.input.color
  }

  return theme.input.input.color
}

const getInputPlaceholderColor = (theme: Theme, state?: InputState) => {
  if (state === 'warning') {
    return theme.input.state.warning.input.placeholderColor
  }

  if (state === 'error') {
    return theme.input.state.error.input.placeholderColor
  }

  return theme.input.input.placeholderColor
}

const getIconColor = (theme: Theme, state?: InputState, disabled?: boolean) => {
  if (disabled) {
    return theme.input.icon.disabled.color
  }

  if (state === 'warning') {
    return theme.input.state.warning.icon.color
  }

  if (state === 'error') {
    return theme.input.state.error.icon.color
  }

  return theme.input.icon.color
}

const getToggleColor = (theme: Theme, state?: InputState) => {
  if (state === 'warning') {
    return theme.input.state.warning.icon.color
  }

  if (state === 'error') {
    return theme.input.state.error.icon.color
  }

  return theme.input.toggle.color
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: 0;
  max-width: ${({ $fullWidth }) => ($fullWidth ? 'none' : '320px')};
`

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  font-size: 11px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};
  margin-left: 2px;
`

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: ${({ theme, $state, $disabled }) =>
    getWrapperBackgroundColor(theme, $state, $disabled)};
  border-radius: 10px;
  border: 1px solid
    ${({ theme, $state, $disabled }) => getWrapperBorderColor(theme, $state, $disabled)};
  transition: border-color 0.15s ease;

  &:has(:focus-visible) {
    outline: 2px solid ${({ theme, $state }) => getWrapperFocusOutlineColor(theme, $state)};
    outline-offset: 1px;
  }

  ${({ $disabled }) =>
    $disabled &&
    `
      cursor: not-allowed;
    `}
`

export const StyledInputField = styled.input<StyledInputFieldProps>`
  grid-column: 2;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme, $state }) => getInputColor(theme, $state)};
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme, $state }) => getInputPlaceholderColor(theme, $state)};
  }

  &:disabled {
    color: ${({ theme }) => theme.input.input.disabled.color};
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &[type='number'] {
    appearance: textfield;
  }
`

export const StyledInputIconWrapper = styled.span<StyledInputIconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: ${({ theme, $state, $disabled }) => getIconColor(theme, $state, $disabled)};
`

export const StyledInputToggle = styled.button<StyledInputToggleProps>`
  display: grid;
  place-items: center;
  margin-left: 8px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, $state }) => getToggleColor(theme, $state)};

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}
`

export const StyledInputToggleIcon = styled.svg`
  width: 16px;
  height: 16px;
`
