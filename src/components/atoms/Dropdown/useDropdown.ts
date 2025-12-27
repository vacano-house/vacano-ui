import { useCallback, useMemo, useState } from 'react'

import {
  autoUpdate,
  flip,
  offset as offsetMiddleware,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  type Placement,
} from '@floating-ui/react'

import {
  DEFAULT_DROPDOWN_PROP_ALIGN,
  DEFAULT_DROPDOWN_PROP_OFFSET,
  DEFAULT_DROPDOWN_PROP_PLACEMENT,
} from './constants'
import type { DropdownAlign, DropdownPlacement } from './types'

export type UseDropdownReturn = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  refs: {
    setReference: (node: HTMLElement | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
  floatingStyles: React.CSSProperties
  getReferenceProps: () => Record<string, unknown>
  getFloatingProps: () => Record<string, unknown>
}

const getFloatingPlacement = (placement: DropdownPlacement, align: DropdownAlign): Placement => {
  return `${placement}-${align}`
}

export const useDropdown = (
  placement: DropdownPlacement = DEFAULT_DROPDOWN_PROP_PLACEMENT,
  align: DropdownAlign = DEFAULT_DROPDOWN_PROP_ALIGN,
  offset: number = DEFAULT_DROPDOWN_PROP_OFFSET,
  controlledOpen?: boolean,
  onOpenChange?: (open: boolean) => void,
): UseDropdownReturn => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setIsOpen = useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(open)
      }
      onOpenChange?.(open)
    },
    [isControlled, onOpenChange],
  )

  const floatingPlacement = useMemo(
    () => getFloatingPlacement(placement, align),
    [placement, align],
  )

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: floatingPlacement,
    middleware: [offsetMiddleware(offset), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)

  const dismiss = useDismiss(context, {
    escapeKey: true,
    outsidePress: true,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])

  return {
    isOpen,
    setIsOpen,
    refs: {
      setReference: refs.setReference,
      setFloating: refs.setFloating,
    },
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  }
}
