import styled from '@emotion/styled'

import { COLORS } from '../../../constants'
import { LoaderCircle } from '../../../icons/Lucide'
import { rotate } from '../../../keyframes'
import { Colors } from '../../../lib/utils'
import { VacanoComponentSize } from '../../../types'
import { getButtonSizeProps, getButtonVariantProps, getButtonWidthProps } from './helpers'
import { ButtonVariant } from './types'

type StyledButtonProps = {
  $variant: ButtonVariant
  $size: VacanoComponentSize
  $fullWidth: boolean
  $iconOnly: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  gap: 6px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    !props.$iconOnly
      ? getButtonWidthProps(Boolean(props.$fullWidth))
      : getButtonSizeProps(props.$size).height};
  color: ${(props) => getButtonVariantProps(props.$variant).color.static};
  background-color: ${(props) => getButtonVariantProps(props.$variant).background.static};
  height: ${(props) => getButtonSizeProps(props.$size).height};
  padding: ${(props) => (!props.$iconOnly ? getButtonSizeProps(props.$size).padding : '0')};
  border-radius: ${(props) => getButtonSizeProps(props.$size).radius};

  &:hover:not(:disabled) {
    color: ${(props) => getButtonVariantProps(props.$variant).color.hover};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.hover};
  }

  &:active:not(:disabled) {
    color: ${(props) => getButtonVariantProps(props.$variant).color.active};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.active};
  }

  &:focus-visible {
    outline-color: ${Colors.alpha(COLORS['iron-grey'], 30)};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => getButtonVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.disabled};
  }
`

export const StyledIcon = styled.div<{ $size: VacanoComponentSize }>`
  display: grid;
  place-items: center;
  width: ${(props) => getButtonSizeProps(props.$size).iconSize};
  height: ${(props) => getButtonSizeProps(props.$size).iconSize};

  & svg {
    width: ${(props) => getButtonSizeProps(props.$size).iconSize};
    height: ${(props) => getButtonSizeProps(props.$size).iconSize};
  }
`

export const StyledLabel = styled.span`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledLoading = styled(LoaderCircle)<{ $size: VacanoComponentSize }>`
  width: ${(props) => getButtonSizeProps(props.$size).iconSize};
  height: ${(props) => getButtonSizeProps(props.$size).iconSize};
  animation: ${rotate} 0.8s linear infinite;
`

export const StyledBindings = styled.div`
  display: flex;
  gap: 3px;
`
