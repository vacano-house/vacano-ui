import { useCallback, useMemo, type MouseEvent, type ReactNode } from 'react'

import type { ButtonProps } from './types'

type UseButtonReturn = {
  iconOnly: boolean
  showSpinner: boolean | undefined
  showDots: boolean | undefined
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const useButton = (
  icon: ReactNode,
  children: ButtonProps['children'],
  char: ButtonProps['char'],
  loading: boolean | undefined,
  onClick: ButtonProps['onClick'],
): UseButtonReturn => {
  const iconOnly = useMemo(() => {
    return !!icon && !children && !char
  }, [icon, children, char])

  const showSpinner = useMemo(() => {
    return loading && iconOnly
  }, [loading, iconOnly])

  const showDots = useMemo(() => {
    return loading && !iconOnly
  }, [loading, iconOnly])

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    },
    [loading, onClick],
  )

  return {
    iconOnly,
    showSpinner,
    showDots,
    handleClick,
  }
}
