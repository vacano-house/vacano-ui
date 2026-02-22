import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { SkeletonAnimation, SkeletonRadius } from './types'

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`

const wave = keyframes`
  0% { transform: translateX(-100%); }
  60% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
`

const pulseStyle = css`
  animation: ${pulse} 1.5s ease-in-out infinite;
`

const waveStyle = css`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: ${wave} 1.6s linear infinite;
  }
`

const ANIMATION_STYLES: Record<SkeletonAnimation, ReturnType<typeof css> | null> = {
  pulse: pulseStyle,
  wave: waveStyle,
  none: null,
}

const RADIUS_MAP: Record<SkeletonRadius, string> = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
}

type StyledSkeletonProps = {
  $width: number | string
  $height: number | string
  $radius: SkeletonRadius
  $animation: SkeletonAnimation
  $circle: boolean
}

const resolveSize = (value: number | string) => (typeof value === 'number' ? `${value}px` : value)

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  overflow: hidden;
  background-color: #e5e7eb;
  width: ${({ $width, $circle, $height }) =>
    $circle ? resolveSize($height) : resolveSize($width)};
  height: ${({ $height }) => resolveSize($height)};
  border-radius: ${({ $circle, $radius }) => ($circle ? '50%' : RADIUS_MAP[$radius])};
  ${({ $animation }) => ANIMATION_STYLES[$animation]}
`
