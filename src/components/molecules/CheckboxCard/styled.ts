import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  CheckboxCardState,
  StyledCheckboxCardContainerProps,
  StyledCheckboxCardDescriptionProps,
  StyledCheckboxCardLabelProps,
} from './types'

const getContainerBackgroundColor = (theme: Theme, checked?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme.checkboxCard.container.disabled.backgroundColor
  }

  if (checked) {
    return theme.checkboxCard.container.checked.backgroundColor
  }

  return theme.checkboxCard.container.backgroundColor
}

const getContainerBorderColor = (
  theme: Theme,
  state?: CheckboxCardState,
  checked?: boolean,
  disabled?: boolean,
) => {
  if (disabled) {
    return theme.checkboxCard.container.disabled.borderColor
  }

  if (state === 'warning') {
    return checked
      ? theme.checkboxCard.state.warning.container.checked.borderColor
      : theme.checkboxCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return checked
      ? theme.checkboxCard.state.error.container.checked.borderColor
      : theme.checkboxCard.state.error.container.borderColor
  }

  if (checked) {
    return theme.checkboxCard.container.checked.borderColor
  }

  return theme.checkboxCard.container.borderColor
}

const getContainerHoverBorderColor = (
  theme: Theme,
  state?: CheckboxCardState,
  checked?: boolean,
) => {
  if (state === 'warning') {
    return checked
      ? theme.checkboxCard.state.warning.container.checked.borderColor
      : theme.checkboxCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return checked
      ? theme.checkboxCard.state.error.container.checked.borderColor
      : theme.checkboxCard.state.error.container.borderColor
  }

  if (checked) {
    return theme.checkboxCard.container.checked.borderColor
  }

  return theme.checkboxCard.container.hover.borderColor
}

const getContainerFocusOutlineColor = (theme: Theme, state?: CheckboxCardState) => {
  if (state === 'warning') {
    return theme.checkboxCard.state.warning.container.borderColor
  }

  if (state === 'error') {
    return theme.checkboxCard.state.error.container.borderColor
  }

  return theme.checkboxCard.container.focus.outlineColor
}

const getLabelColor = (theme: Theme, state?: CheckboxCardState, disabled?: boolean) => {
  if (disabled) {
    return theme.checkboxCard.label.disabled.color
  }

  if (state === 'warning') {
    return theme.checkboxCard.state.warning.label.color
  }

  if (state === 'error') {
    return theme.checkboxCard.state.error.label.color
  }

  return theme.checkboxCard.label.color
}

const getDescriptionColor = (theme: Theme, state?: CheckboxCardState, disabled?: boolean) => {
  if (disabled) {
    return theme.checkboxCard.description.disabled.color
  }

  if (state === 'warning') {
    return theme.checkboxCard.state.warning.description.color
  }

  if (state === 'error') {
    return theme.checkboxCard.state.error.description.color
  }

  return theme.checkboxCard.description.color
}

export const StyledCheckboxCardContainer = styled.label<StyledCheckboxCardContainerProps>`
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

  .vacano_checkbox_container {
    pointer-events: none;
  }
`

export const StyledCheckboxCardInput = styled.input`
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

export const StyledCheckboxCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

export const StyledCheckboxCardLabel = styled.span<StyledCheckboxCardLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};

  label[data-disabled='true'] & {
    color: ${({ theme }) => theme.checkboxCard.label.disabled.color};
  }
`

export const StyledCheckboxCardDescription = styled.span<StyledCheckboxCardDescriptionProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme, $state }) => getDescriptionColor(theme, $state)};

  label[data-disabled='true'] & {
    color: ${({ theme }) => theme.checkboxCard.description.disabled.color};
  }
`
