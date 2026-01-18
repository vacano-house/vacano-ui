import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

type StyledTextProps = {
  $isEmpty?: boolean
}

export const StyledText = styled.span<StyledTextProps>`
  font-size: 14px;
  line-height: 1.4;
  color: ${({ $isEmpty }) => ($isEmpty ? COLORS['iron-grey'] : COLORS.black)};
  opacity: ${({ $isEmpty }) => ($isEmpty ? 0.6 : 1)};
  outline: none;

  &[contenteditable='true'] {
    cursor: text;
  }
`

type StyledButtonProps = {
  $disabled?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $disabled }) => ($disabled ? COLORS.gray : COLORS['iron-grey'])};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 0.7)};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  }
`
