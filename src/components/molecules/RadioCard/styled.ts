import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  RadioCardState,
  StyledRadioCardContainerProps,
  StyledRadioCardDescriptionProps,
  StyledRadioCardLabelProps,
} from './types'

const getContainerBackgroundColor = (theme: Theme, checked?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme.radioCard.container.disabled.backgroundColor
  }

  if (checked) {
    return theme.radioCard.container.checked.backgroundColor
  }

  return theme.radioCard.container.backgroundColor
}

const getContainerBorderColor = (
  theme: Theme,
  state?: RadioCardState,
  checked?: boolean,
  disabled?: boolean,
) => {
  if (disabled) {
    return theme.radioCard.container.disabled.borderColor
  }

  if (state === 'warning') {
    return checked
      ? theme.radioCard.state.warning.container.checked.borderColor
      : theme.radioCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return checked
      ? theme.radioCard.state.error.container.checked.borderColor
      : theme.radioCard.state.error.container.borderColor
  }

  if (checked) {
    return theme.radioCard.container.checked.borderColor
  }

  return theme.radioCard.container.borderColor
}

const getContainerHoverBorderColor = (theme: Theme, state?: RadioCardState, checked?: boolean) => {
  if (state === 'warning') {
    return checked
      ? theme.radioCard.state.warning.container.checked.borderColor
      : theme.radioCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return checked
      ? theme.radioCard.state.error.container.checked.borderColor
      : theme.radioCard.state.error.container.borderColor
  }

  if (checked) {
    return theme.radioCard.container.checked.borderColor
  }

  return theme.radioCard.container.hover.borderColor
}

const getContainerFocusOutlineColor = (theme: Theme, state?: RadioCardState) => {
  if (state === 'warning') {
    return theme.radioCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return theme.radioCard.state.error.container.borderColor
  }

  return theme.radioCard.container.focus.outlineColor
}

const getLabelColor = (theme: Theme, state?: RadioCardState, disabled?: boolean) => {
  if (disabled) {
    return theme.radioCard.label.disabled.color
  }

  if (state === 'warning') {
    return theme.radioCard.state.warning.label.color
  }

  if (state === 'error') {
    return theme.radioCard.state.error.label.color
  }

  return theme.radioCard.label.color
}

const getDescriptionColor = (theme: Theme, state?: RadioCardState, disabled?: boolean) => {
  if (disabled) {
    return theme.radioCard.description.disabled.color
  }

  if (state === 'warning') {
    return theme.radioCard.state.warning.description.color
  }

  if (state === 'error') {
    return theme.radioCard.state.error.description.color
  }

  return theme.radioCard.description.color
}

export const StyledRadioCardContainer = styled.label<StyledRadioCardContainerProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
  padding: 12px;
  background-color: ${({ theme, $checked, $disabled }) =>
    getContainerBackgroundColor(theme, $checked, $disabled)};
  border: 1px solid
    ${({ theme, $state, $checked, $disabled }) =>
      getContainerBorderColor(theme, $state, $checked, $disabled)};
  border-radius: 12px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: 0;

  &:hover:not([data-disabled='true']) {
    border-color: ${({ theme, $state, $checked }) =>
      getContainerHoverBorderColor(theme, $state, $checked)};
  }

  &:has(:focus-visible) {
    outline: 2px solid ${({ theme, $state }) => getContainerFocusOutlineColor(theme, $state)};
    outline-offset: 1px;
  }

  .vacano_radio_container {
    pointer-events: none;
  }
`

export const StyledRadioCardInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const StyledRadioCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

export const StyledRadioCardLabel = styled.span<StyledRadioCardLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};

  label[data-disabled='true'] & {
    color: ${({ theme }) => theme.radioCard.label.disabled.color};
  }
`

export const StyledRadioCardDescription = styled.span<StyledRadioCardDescriptionProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme, $state }) => getDescriptionColor(theme, $state)};

  label[data-disabled='true'] & {
    color: ${({ theme }) => theme.radioCard.description.disabled.color};
  }
`
