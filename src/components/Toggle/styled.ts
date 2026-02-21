import styled from '@emotion/styled'

import { getToggleVariantProps } from './helpers'
import { ToggleVariant } from './types'

type StyledContainerProps = {
  $disabled: boolean
  $variant: ToggleVariant
}

type StyledTrackProps = {
  $checked: boolean
  $variant: ToggleVariant
}

type StyledThumbProps = {
  $checked: boolean
  $variant: ToggleVariant
}

type StyledLabelProps = {
  $variant: ToggleVariant
}

export const StyledContainer = styled.label<StyledContainerProps>`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const StyledTrack = styled.span<StyledTrackProps>`
  position: relative;
  flex-shrink: 0;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.$checked
        ? getToggleVariantProps(props.$variant).track.borderChecked
        : getToggleVariantProps(props.$variant).track.border};
  background-color: ${(props) =>
    props.$checked
      ? getToggleVariantProps(props.$variant).track.backgroundChecked
      : getToggleVariantProps(props.$variant).track.background};
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
`

export const StyledThumb = styled.span<StyledThumbProps>`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.$checked ? '18px' : '2px')};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$checked
      ? getToggleVariantProps(props.$variant).thumb.backgroundChecked
      : getToggleVariantProps(props.$variant).thumb.background};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: left 0.2s ease;
`

export const StyledLabel = styled.span<StyledLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: ${(props) => getToggleVariantProps(props.$variant).label};
  user-select: none;

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`
