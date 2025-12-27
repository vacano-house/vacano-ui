import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  MultiSelectState,
  StyledMultiSelectChevronProps,
  StyledMultiSelectChipProps,
  StyledMultiSelectChipRemoveProps,
  StyledMultiSelectContainerProps,
  StyledMultiSelectContentProps,
  StyledMultiSelectIconProps,
  StyledMultiSelectLabelProps,
  StyledMultiSelectOptionCheckProps,
  StyledMultiSelectOptionProps,
  StyledMultiSelectPlaceholderProps,
  StyledMultiSelectTriggerProps,
} from './types'

const getTriggerBackgroundColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.trigger.disabled.backgroundColor
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.trigger.backgroundColor
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.trigger.backgroundColor
  }

  return theme.multiSelect.trigger.backgroundColor
}

const getTriggerBorderColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.trigger.disabled.borderColor
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.trigger.borderColor
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.trigger.borderColor
  }

  return theme.multiSelect.trigger.borderColor
}

const getTriggerFocusOutlineColor = (theme: Theme, state?: MultiSelectState) => {
  if (state === 'warning') {
    return theme.multiSelect.state.warning.trigger.focus.outlineColor
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.trigger.focus.outlineColor
  }

  return theme.multiSelect.trigger.focus.outlineColor
}

const getLabelColor = (theme: Theme, state?: MultiSelectState) => {
  if (state === 'warning') {
    return theme.multiSelect.state.warning.label.color
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.label.color
  }

  return theme.multiSelect.label.color
}

const getPlaceholderColor = (theme: Theme, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.placeholder.disabled.color
  }

  return theme.multiSelect.placeholder.color
}

const getChipBackgroundColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.chip.disabled.backgroundColor
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.chip.backgroundColor
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.chip.backgroundColor
  }

  return theme.multiSelect.chip.backgroundColor
}

const getChipColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.chip.disabled.color
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.chip.color
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.chip.color
  }

  return theme.multiSelect.chip.color
}

const getChipRemoveColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.chip.disabled.remove.color
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.chip.remove.color
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.chip.remove.color
  }

  return theme.multiSelect.chip.remove.color
}

const getIconColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.icon.disabled.color
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.icon.color
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.icon.color
  }

  return theme.multiSelect.icon.color
}

const getChevronColor = (theme: Theme, state?: MultiSelectState, disabled?: boolean) => {
  if (disabled) {
    return theme.multiSelect.chevron.disabled.color
  }

  if (state === 'warning') {
    return theme.multiSelect.state.warning.chevron.color
  }

  if (state === 'error') {
    return theme.multiSelect.state.error.chevron.color
  }

  return theme.multiSelect.chevron.color
}

export const StyledMultiSelectContainer = styled.div<StyledMultiSelectContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: 120px;
  max-width: ${({ $fullWidth }) => ($fullWidth ? 'none' : '320px')};
`

export const StyledMultiSelectLabel = styled.label<StyledMultiSelectLabelProps>`
  font-size: 11px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme, $state }) => getLabelColor(theme, $state)};
  margin-left: 2px;
`

export const StyledMultiSelectTrigger = styled.button<StyledMultiSelectTriggerProps>`
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 4px 12px 4px 8px;
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
  gap: 4px;

  &:focus-visible {
    outline: 2px solid ${({ theme, $state }) => getTriggerFocusOutlineColor(theme, $state)};
    outline-offset: 1px;
  }
`

export const StyledMultiSelectIcon = styled.span<StyledMultiSelectIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme, $state, $disabled }) => getIconColor(theme, $state, $disabled)};
`

export const StyledMultiSelectChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  min-width: 0;
  min-height: 24px;
  align-items: center;
`

export const StyledMultiSelectChip = styled.span<StyledMultiSelectChipProps>`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 4px 0 8px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  min-width: 0;
  max-width: 100%;
  background-color: ${({ theme, $state, $disabled }) =>
    getChipBackgroundColor(theme, $state, $disabled)};
  color: ${({ theme, $state, $disabled }) => getChipColor(theme, $state, $disabled)};
`

export const StyledMultiSelectChipLabel = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledMultiSelectChipRemove = styled.span<StyledMultiSelectChipRemoveProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  border-radius: 4px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, $state, $disabled }) => getChipRemoveColor(theme, $state, $disabled)};
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme, $disabled }) =>
      $disabled
        ? theme.multiSelect.chip.disabled.remove.color
        : theme.multiSelect.chip.remove.hover.color};
  }
`

export const StyledMultiSelectPlaceholder = styled.span<StyledMultiSelectPlaceholderProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme, $disabled }) => getPlaceholderColor(theme, $disabled)};
`

export const StyledMultiSelectChevron = styled.span<StyledMultiSelectChevronProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  color: ${({ theme, $state, $disabled }) => getChevronColor(theme, $state, $disabled)};
  transition: transform 0.15s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const StyledMultiSelectContent = styled.div<StyledMultiSelectContentProps>`
  z-index: 1000;
  max-height: ${({ $maxHeight }) => $maxHeight}px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.multiSelect.content.borderColor};
  background-color: ${({ theme }) => theme.multiSelect.content.backgroundColor};
  box-shadow: ${({ theme }) => theme.multiSelect.content.shadow};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`

export const StyledMultiSelectSearch = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.multiSelect.search.borderColor};
`

export const StyledMultiSelectSearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  font-family: inherit;
  color: ${({ theme }) => theme.multiSelect.search.color};
  background-color: transparent;
  outline: none;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.multiSelect.search.placeholderColor};
  }
`

export const StyledMultiSelectList = styled.div`
  padding: 4px;
  overflow-y: auto;
  max-height: inherit;
`

export const StyledMultiSelectOption = styled.div<StyledMultiSelectOptionProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  color: ${({ theme }) => theme.multiSelect.option.color};
  background-color: ${({ theme, $isHighlighted }) =>
    $isHighlighted
      ? theme.multiSelect.option.hover.backgroundColor
      : theme.multiSelect.option.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.multiSelect.option.hover.backgroundColor};
  }
`

export const StyledMultiSelectOptionCheck = styled.span<StyledMultiSelectOptionCheckProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.multiSelect.option.check.color};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.15)};
`

export const StyledMultiSelectOptionLabel = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledMultiSelectEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.multiSelect.empty.color};
`
