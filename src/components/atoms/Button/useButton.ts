import {
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type Ref,
} from 'react'

import type { AnimatedIconRef } from '../../../icons/Animated/types'
import type { ButtonProps } from './types'

type UseButtonReturn = {
  isAnimatedIcon: boolean
  isLucideIcon: boolean
  iconOnly: boolean
  showSpinner: boolean | undefined
  showDots: boolean | undefined
  isHovered: boolean
  effectiveIconRef: Ref<AnimatedIconRef>
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const useButton = (
  icon: ButtonProps['icon'],
  iconRef: Ref<AnimatedIconRef> | undefined,
  children: ButtonProps['children'],
  char: ButtonProps['char'],
  loading: boolean | undefined,
  disabled: boolean | undefined,
  onClick: ButtonProps['onClick'],
): UseButtonReturn => {
  const [isHovered, setIsHovered] = useState(false)
  const internalIconRef = useRef<AnimatedIconRef>(null)

  const isAnimatedIcon = useMemo(() => {
    return typeof icon === 'string' && icon.startsWith('animated-')
  }, [icon])

  const isLucideIcon = useMemo(() => {
    return isValidElement(icon)
  }, [icon])

  const iconOnly = useMemo(() => {
    return !!icon && !children && !char
  }, [icon, children, char])

  const showSpinner = useMemo(() => {
    return loading && iconOnly
  }, [loading, iconOnly])

  const showDots = useMemo(() => {
    return loading && !iconOnly
  }, [loading, iconOnly])

  const effectiveIconRef = useMemo(() => {
    return iconRef ?? internalIconRef
  }, [iconRef])

  const handleMouseEnter = useCallback(() => {
    if (disabled || loading) return
    setIsHovered(true)

    if (isAnimatedIcon && effectiveIconRef && 'current' in effectiveIconRef) {
      effectiveIconRef.current?.play()
    }
  }, [disabled, loading, isAnimatedIcon, effectiveIconRef])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    },
    [loading, onClick],
  )

  return {
    isAnimatedIcon,
    isLucideIcon,
    iconOnly,
    showSpinner,
    showDots,
    isHovered,
    effectiveIconRef,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  }
}
