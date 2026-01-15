import styled from '@emotion/styled'

import { getButtonSizeProps, getButtonVariantProps, getButtonWidthProps } from './helpers'
import { ButtonVariant } from './types'
import { LoaderCircle } from '../../icons/Lucide'
import { KEYFRAMES, VacanoComponentSize } from '../../lib'

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
  border: 1px solid ${(props) => getButtonVariantProps(props.$variant).borderColor.static};

  &:hover:not(:disabled) {
    color: ${(props) => getButtonVariantProps(props.$variant).color.hover};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.hover};
    border-color: ${(props) => getButtonVariantProps(props.$variant).borderColor.hover};
  }

  &:active:not(:disabled) {
    color: ${(props) => getButtonVariantProps(props.$variant).color.active};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.active};
    border-color: ${(props) => getButtonVariantProps(props.$variant).borderColor.active};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => getButtonVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getButtonVariantProps(props.$variant).background.disabled};
    border-color: ${(props) => getButtonVariantProps(props.$variant).borderColor.disabled};
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
  animation: ${KEYFRAMES.rotate} 0.8s linear infinite;
`
