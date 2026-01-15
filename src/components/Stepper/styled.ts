import styled from '@emotion/styled'

import { StepperOrientation } from './types'
import { COLORS } from '../../lib'

export const StyledContainer = styled.div<{ $orientation: StepperOrientation }>`
  display: flex;
  align-items: ${(props) => (props.$orientation === 'vertical' ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.$orientation === 'vertical' ? 'column' : 'row')};
`

export const StyledStepWrapper = styled.div<{ $orientation: StepperOrientation }>`
  display: flex;
  align-items: ${(props) => (props.$orientation === 'vertical' ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.$orientation === 'vertical' ? 'column' : 'row')};
  ${(props) => props.$orientation === 'horizontal' && 'flex: 1; min-width: 0;'}

  &:last-child {
    flex: 0;
  }
`

export const StyledStep = styled.button<{
  $active: boolean
  $completed: boolean
  $clickable: boolean
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  flex-shrink: 0;
`

export const StyledCircle = styled.div<{ $active: boolean; $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  ${(props) =>
    props.$active || props.$completed
      ? `
    background-color: ${COLORS.black};
    border: 2px solid ${COLORS.black};
    color: ${COLORS.white};
  `
      : `
    background-color: transparent;
    border: 2px solid ${COLORS.gray};
    color: ${COLORS['iron-grey']};
  `}
`

export const StyledLabel = styled.span<{ $active: boolean; $completed: boolean }>`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: ${(props) => (props.$active || props.$completed ? COLORS.black : COLORS['iron-grey'])};
  transition: color 0.2s ease;
`

export const StyledLine = styled.div<{ $completed: boolean; $orientation: StepperOrientation }>`
  background-color: ${(props) => (props.$completed ? COLORS.black : COLORS.gray)};
  transition: background-color 0.2s ease;

  ${(props) =>
    props.$orientation === 'vertical'
      ? `
    width: 2px;
    height: 24px;
    margin: 8px 0 8px 15px;
  `
      : `
    flex: 1;
    height: 2px;
    min-width: 16px;
    margin: 0 12px;
  `}
`
