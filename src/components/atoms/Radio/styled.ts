import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type { RadioState } from './types'

export type StyledRadioContainerProps = {
  $disabled?: boolean
  $state?: RadioState
}

export type StyledRadioCircleProps = {
  $checked?: boolean
  $state?: RadioState
}

export type StyledRadioDotProps = {
  $visible?: boolean
  $state?: RadioState
}

export type StyledRadioLabelProps = {
  $state?: RadioState
}

const getCircleBorderColor = (theme: Theme, checked?: boolean, state?: RadioState) => {
  if (checked) {
    if (state === 'warning') {
      return theme.radio.state.warning.circle.checked.borderColor
    }

    if (state === 'error') {
      return theme.radio.state.error.circle.checked.borderColor
    }

    return theme.radio.circle.checked.borderColor
  }

  if (state === 'warning') {
    return theme.radio.state.warning.circle.borderColor
  }

  if (state === 'error') {
    return theme.radio.state.error.circle.borderColor
  }

  return theme.radio.circle.borderColor
}

const getCircleFocusShadowColor = (theme: Theme, state?: RadioState) => {
  if (state === 'warning') {
    return theme.radio.state.warning.circle.focus.shadowColor
  }

  if (state === 'error') {
    return theme.radio.state.error.circle.focus.shadowColor
  }

  return theme.radio.circle.focus.shadowColor
}

const getDotColor = (theme: Theme, state?: RadioState) => {
  if (state === 'warning') {
    return theme.radio.state.warning.dot.color
  }

  if (state === 'error') {
    return theme.radio.state.error.dot.color
  }

  return theme.radio.dot.color
}

const getLabelColor = (theme: Theme, state?: RadioState) => {
  if (state === 'warning') {
    return theme.radio.state.warning.label.color
  }

  if (state === 'error') {
    return theme.radio.state.error.label.color
  }

  return theme.radio.label.color
}

export const StyledRadioContainer = styled.label<StyledRadioContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:has(input:focus-visible) > span:first-of-type {
    box-shadow: 0 0 0 3px ${({ theme, $state }) => getCircleFocusShadowColor(theme, $state)};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}
`

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const StyledRadioCircle = styled.span<StyledRadioCircleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid
    ${({ theme, $checked, $state }) => getCircleBorderColor(theme, $checked, $state)};
  background-color: transparent;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
`

export const StyledRadioDot = styled.span<StyledRadioDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, $state }) => getDotColor(theme, $state)};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'scale(1)' : 'scale(0)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
`

export const StyledRadioLabel = styled.span<StyledRadioLabelProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};
  user-select: none;
  font-weight: 500;
`
