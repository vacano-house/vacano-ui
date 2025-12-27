import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  SelectState,
  StyledSelectChevronProps,
  StyledSelectContainerProps,
  StyledSelectContentProps,
  StyledSelectIconProps,
  StyledSelectLabelProps,
  StyledSelectOptionProps,
  StyledSelectTriggerProps,
  StyledSelectValueProps,
} from './types'

const getTriggerBackgroundColor = (theme: Theme, state?: SelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.select.trigger.disabled.backgroundColor
  }

  if (state === 'warning') {
    return theme.select.state.warning.trigger.backgroundColor
  }

  if (state === 'error') {
    return theme.select.state.error.trigger.backgroundColor
  }

  return theme.select.trigger.backgroundColor
}

const getTriggerBorderColor = (theme: Theme, state?: SelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.select.trigger.disabled.borderColor
  }

  if (state === 'warning') {
    return theme.select.state.warning.trigger.borderColor
  }

  if (state === 'error') {
    return theme.select.state.error.trigger.borderColor
  }

  return theme.select.trigger.borderColor
}

const getTriggerFocusOutlineColor = (theme: Theme, state?: SelectState) => {
  if (state === 'warning') {
    return theme.select.state.warning.trigger.focus.outlineColor
  }

  if (state === 'error') {
    return theme.select.state.error.trigger.focus.outlineColor
  }

  return theme.select.trigger.focus.outlineColor
}

const getLabelColor = (theme: Theme, state?: SelectState) => {
  if (state === 'warning') {
    return theme.select.state.warning.label.color
  }

  if (state === 'error') {
    return theme.select.state.error.label.color
  }

  return theme.select.label.color
}

const getValueColor = (
  theme: Theme,
  state?: SelectState,
  disabled?: boolean,
  isPlaceholder?: boolean,
) => {
  if (disabled) {
    return theme.select.value.disabled.color
  }

  if (isPlaceholder) {
    if (state === 'warning') {
      return theme.select.state.warning.value.placeholderColor
    }

    if (state === 'error') {
      return theme.select.state.error.value.placeholderColor
    }

    return theme.select.value.placeholderColor
  }

  if (state === 'warning') {
    return theme.select.state.warning.value.color
  }

  if (state === 'error') {
    return theme.select.state.error.value.color
  }

  return theme.select.value.color
}

const getIconColor = (theme: Theme, state?: SelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.select.icon.disabled.color
  }

  if (state === 'warning') {
    return theme.select.state.warning.icon.color
  }

  if (state === 'error') {
    return theme.select.state.error.icon.color
  }

  return theme.select.icon.color
}

const getChevronColor = (theme: Theme, state?: SelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.select.chevron.disabled.color
  }

  if (state === 'warning') {
    return theme.select.state.warning.chevron.color
  }

  if (state === 'error') {
    return theme.select.state.error.chevron.color
  }

  return theme.select.chevron.color
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: 0;
  max-width: ${({ $fullWidth }) => ($fullWidth ? 'none' : '320px')};
`

export const StyledSelectLabel = styled.label<StyledSelectLabelProps>`
  font-size: 11px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};
  margin-left: 2px;
`

export const StyledSelectTrigger = styled.button<StyledSelectTriggerProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: ${({ theme, $state, $disabled }) =>
    getTriggerBackgroundColor(theme, $state, $disabled)};
  border-radius: 10px;
  border: 1px solid
    ${({ theme, $state, $disabled }) => getTriggerBorderColor(theme, $state, $disabled)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.15s ease;
  font-family: inherit;
  text-align: left;
  width: 100%;

  &:focus-visible {
    outline: 2px solid ${({ theme, $state }) => getTriggerFocusOutlineColor(theme, $state)};
    outline-offset: 1px;
  }
`

export const StyledSelectIcon = styled.span<StyledSelectIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: ${({ theme, $state, $disabled }) => getIconColor(theme, $state, $disabled)};
`

export const StyledSelectValue = styled.span<StyledSelectValueProps>`
  flex: 1;
  min-width: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme, $state, $disabled, $isPlaceholder }) =>
    getValueColor(theme, $state, $disabled, $isPlaceholder)};
`

export const StyledSelectChevron = styled.span<StyledSelectChevronProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  color: ${({ theme, $state, $disabled }) => getChevronColor(theme, $state, $disabled)};
  transition: transform 0.15s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const StyledSelectContent = styled.div<StyledSelectContentProps>`
  z-index: 1000;
  max-height: ${({ $maxHeight }) => $maxHeight}px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.select.content.borderColor};
  background-color: ${({ theme }) => theme.select.content.backgroundColor};
  box-shadow: ${({ theme }) => theme.select.content.shadow};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`

export const StyledSelectSearch = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.select.search.borderColor};
`

export const StyledSelectSearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  font-family: inherit;
  color: ${({ theme }) => theme.select.search.color};
  background-color: ${({ theme }) => theme.select.search.backgroundColor};
  border: 1px solid ${({ theme }) => theme.select.search.borderColor};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.select.search.placeholderColor};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.select.trigger.focus.outlineColor};
    outline-offset: 1px;
  }
`

export const StyledSelectList = styled.div`
  padding: 4px;
  overflow-y: auto;
  max-height: inherit;
`

export const StyledSelectOption = styled.div<StyledSelectOptionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.select.option.selected.color : theme.select.option.color};
  background-color: ${({ theme, $isSelected, $isHighlighted }) => {
    if ($isSelected) {
      return theme.select.option.selected.backgroundColor
    }

    if ($isHighlighted) {
      return theme.select.option.hover.backgroundColor
    }

    return theme.select.option.backgroundColor
  }};

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.select.option.selected.backgroundColor
        : theme.select.option.hover.backgroundColor};
  }
`

export const StyledSelectOptionCheck = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`

export const StyledSelectEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.select.empty.color};
`
