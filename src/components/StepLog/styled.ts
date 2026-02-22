import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { type StepLogStatus } from './types'
import { alpha, COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.gray};
  border-radius: 8px;
  overflow: hidden;
`

export const StyledStep = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray};
  }
`

type StyledHeaderProps = {
  $expanded: boolean
  $interactive: boolean
}

export const StyledHeader = styled.button<StyledHeaderProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${({ $expanded }) => ($expanded ? alpha(COLORS.black, 3) : 'transparent')};
  border: none;
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'default')};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.black};
  text-align: left;
  outline: none;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ $interactive }) =>
      $interactive ? alpha(COLORS.black, 3) : 'transparent'};
  }
`

export const StyledChevron = styled.span<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${COLORS['iron-grey']};
  transition: transform 0.15s ease;
  transform: rotate(${({ $expanded }) => ($expanded ? '90deg' : '0deg')});
`

export const StyledChevronPlaceholder = styled.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

const STATUS_COLORS: Record<StepLogStatus, string> = {
  success: COLORS.green,
  error: COLORS.red,
  running: COLORS['steel-blue'],
  pending: COLORS.gray,
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const runningStyle = css`
  animation: ${spin} 1s linear infinite;
`

export const StyledStatusIcon = styled.span<{ $status: StepLogStatus }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $status }) => STATUS_COLORS[$status]};
  ${({ $status }) => $status === 'running' && runningStyle}
`

export const StyledTitle = styled.span<{ $muted: boolean }>`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ $muted }) => ($muted ? COLORS['iron-grey'] : COLORS.black)};
`

export const StyledDuration = styled.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS['iron-grey']};
  font-variant-numeric: tabular-nums;
`

export const StyledLogWrapper = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? '1fr' : '0fr')};
  transition: grid-template-rows 0.15s ease;
`

export const StyledLogInner = styled.div`
  overflow: hidden;
`

export const StyledLog = styled.div`
  padding: 8px 0;
  background-color: ${COLORS.white};
  border-top: 1px solid ${COLORS.gray};
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 12px;
  line-height: 20px;
`

export const StyledLogLine = styled.div`
  display: flex;
  padding: 0 16px;

  &:hover {
    background-color: ${alpha(COLORS.black, 3)};
  }
`

export const StyledLineNumber = styled.span`
  flex-shrink: 0;
  width: 40px;
  text-align: right;
  padding-right: 16px;
  color: ${COLORS['iron-grey']};
  user-select: none;
`

export const StyledLineText = styled.span`
  flex: 1;
  min-width: 0;
  white-space: pre;
  color: ${COLORS.black};
`
