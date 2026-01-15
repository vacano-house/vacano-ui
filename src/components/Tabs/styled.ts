import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const StyledTab = styled.button<{ $active: boolean; $disabled: boolean }>`
  padding: 6px 16px;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => (props.$active ? COLORS.gray : 'transparent')};
  color: ${COLORS.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition:
    background-color 0.15s ease,
    opacity 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$active ? COLORS.gray : 'rgba(0, 0, 0, 0.05)')};
  }
`
