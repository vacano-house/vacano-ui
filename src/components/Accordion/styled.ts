import styled from '@emotion/styled'

import { type AccordionVariant } from './types'
import { COLORS } from '../../lib'

type StyledContainerProps = {
  $variant: AccordionVariant
}

type StyledItemProps = {
  $variant: AccordionVariant
  $disabled: boolean
}

type StyledTriggerProps = {
  $disabled: boolean
  $expanded: boolean
}

type StyledContentWrapperProps = {
  $expanded: boolean
}

type StyledIconProps = {
  $expanded: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $variant }) => ($variant === 'splitted' ? '8px' : '0')};
`

export const StyledItem = styled.div<StyledItemProps>`
  border-bottom: ${({ $variant }) =>
    $variant === 'outlined' ? `1px solid ${COLORS.gray}` : 'none'};
  border-radius: ${({ $variant }) => ($variant === 'splitted' ? '8px' : '0')};
  background-color: ${({ $variant }) => ($variant === 'splitted' ? '#f9fafb' : 'transparent')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:first-of-type {
    border-top: ${({ $variant }) =>
      $variant === 'outlined' ? `1px solid ${COLORS.gray}` : 'none'};
  }
`

export const StyledTrigger = styled.button<StyledTriggerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 16px;
  background: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  font-weight: 600;
  color: ${({ $expanded }) => ($expanded ? COLORS.black : COLORS['iron-grey'])};
  text-align: left;
  outline: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${COLORS.black};
  }
`

export const StyledIcon = styled.span<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${COLORS['iron-grey']};
  transition: transform 0.2s ease;
  transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
`

export const StyledContentWrapper = styled.div<StyledContentWrapperProps>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? '1fr' : '0fr')};
  transition: grid-template-rows 0.2s ease;
`

export const StyledContentInner = styled.div`
  overflow: hidden;
`

export const StyledContent = styled.div`
  padding: 0 16px 14px;
  font-size: 14px;
  line-height: 1.5;
  color: ${COLORS['iron-grey']};
`
