import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type {
  ButtonVariant,
  StyledButtonCharProps,
  StyledButtonContainerProps,
  StyledButtonIconWrapperProps,
  StyledButtonTextProps,
} from './types'

const getButtonTheme = (theme: Theme, variant: ButtonVariant) => theme.button[variant]

export const StyledButtonContainer = styled.button<StyledButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: ${({ $iconOnly }) => ($iconOnly ? '0 6px' : '0 12px')};
  border-radius: 12px;
  border: 1px solid;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.5;
  cursor: pointer;
  user-select: none;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: ${({ $iconOnly }) => ($iconOnly ? '32px' : 'auto')};

  color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).color};
  background-color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).backgroundColor};
  border-color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).borderColor};

  &:hover:not(:disabled) {
    background-color: ${({ theme, $variant }) =>
      getButtonTheme(theme, $variant).hover.backgroundColor};
    border-color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).hover.borderColor};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme, $variant }) =>
      getButtonTheme(theme, $variant).active.backgroundColor};
    border-color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).active.borderColor};
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme, $variant }) => getButtonTheme(theme, $variant).focus.outlineColor};
    outline-offset: 1px;
  }

  &:disabled {
    cursor: ${({ $loading }) => ($loading ? 'wait' : 'not-allowed')};
    color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).disabled.color};
    background-color: ${({ theme, $variant }) =>
      getButtonTheme(theme, $variant).disabled.backgroundColor};
    border-color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).disabled.borderColor};
  }
`

export const StyledButtonContent = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

export const StyledButtonIconWrapper = styled.span<StyledButtonIconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).icon.color};

  button:disabled & {
    color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).disabled.color};
  }
`

export const StyledButtonText = styled.span<StyledButtonTextProps>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
`

export const StyledButtonChar = styled.span<StyledButtonCharProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).char.color};
  background-color: ${({ theme, $variant }) =>
    getButtonTheme(theme, $variant).char.backgroundColor};

  button:disabled & {
    color: ${({ theme, $variant }) => getButtonTheme(theme, $variant).disabled.color};
    background-color: transparent;
  }
`

export const StyledButtonLoader = styled.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
