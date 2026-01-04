import { useMemo, useState } from 'react'

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from '@floating-ui/react'

import { TOOLTIP_DEFAULT_DELAY, TOOLTIP_DEFAULT_PLACEMENT, TOOLTIP_OFFSET } from './constants'
import { TooltipPlacement } from './types'

export type UseTooltipReturn = {
  isOpen: boolean
  refs: {
    setReference: (node: HTMLElement | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
  floatingStyles: React.CSSProperties
  getReferenceProps: () => Record<string, unknown>
  getFloatingProps: () => Record<string, unknown>
}

const getFloatingPlacement = (placement: TooltipPlacement): Placement => {
  return placement
}

export const useTooltip = (
  placement: TooltipPlacement = TOOLTIP_DEFAULT_PLACEMENT,
  delay: number = TOOLTIP_DEFAULT_DELAY,
  disabled: boolean = false,
): UseTooltipReturn => {
  const [isOpen, setIsOpen] = useState(false)

  const floatingPlacement = useMemo(() => getFloatingPlacement(placement), [placement])

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen && !disabled,
    onOpenChange: setIsOpen,
    placement: floatingPlacement,
    middleware: [offset(TOOLTIP_OFFSET), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    delay: {
      open: delay,
      close: 0,
    },
    enabled: !disabled,
  })

  const focus = useFocus(context, {
    enabled: !disabled,
  })

  const dismiss = useDismiss(context)

  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])

  return {
    isOpen: isOpen && !disabled,
    refs: {
      setReference: refs.setReference,
      setFloating: refs.setFloating,
    },
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  }
}
