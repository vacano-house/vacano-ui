import { cloneElement, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { StyledContainer, StyledContent, StyledPortalContent, StyledTrigger } from './styled'
import { DropdownPosition, DropdownProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('dropdown')

type PortalPosition = {
  top: number
  left: number
}

const DROPDOWN_GAP = 4
const DROPDOWN_MIN_HEIGHT = 100

export const Dropdown = ({
  align = 'left',
  children,
  className,
  classnames,
  onClose,
  onOpen,
  open: controlledOpen,
  portalRenderNode,
  ref,
  trigger,
  ...rest
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({ top: 0, left: 0 })
  const [position, setPosition] = useState<DropdownPosition>('bottom')
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const contentHeight = contentRef.current?.offsetHeight ?? DROPDOWN_MIN_HEIGHT
    const contentWidth = contentRef.current?.offsetWidth ?? 160

    const spaceBelow = window.innerHeight - triggerRect.bottom - DROPDOWN_GAP
    const spaceAbove = triggerRect.top - DROPDOWN_GAP

    const newPosition: DropdownPosition =
      spaceBelow < contentHeight && spaceAbove > spaceBelow ? 'top' : 'bottom'
    setPosition(newPosition)

    if (portalRenderNode) {
      let left: number
      if (align === 'left') {
        left = triggerRect.left
      } else {
        left = triggerRect.right - contentWidth
      }

      const top =
        newPosition === 'bottom'
          ? triggerRect.bottom + DROPDOWN_GAP
          : triggerRect.top - contentHeight - DROPDOWN_GAP

      setPortalPosition({ top, left })
    }
  }, [align, portalRenderNode])

  const handleToggle = useCallback(() => {
    if (isControlled) {
      if (open) {
        onClose?.()
      } else {
        onOpen?.()
      }
    } else {
      setInternalOpen((prev) => {
        const next = !prev
        if (next) {
          onOpen?.()
        } else {
          onClose?.()
        }
        return next
      })
    }
  }, [isControlled, open, onClose, onOpen])

  const handleClose = useCallback(() => {
    if (isControlled) {
      onClose?.()
    } else {
      setInternalOpen(false)
      onClose?.()
    }
  }, [isControlled, onClose])

  useLayoutEffect(() => {
    if (open) {
      updatePosition()
    }
  }, [open, updatePosition])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
      const isOutsideContent = contentRef.current && !contentRef.current.contains(target)

      if (portalRenderNode) {
        if (isOutsideContainer && isOutsideContent) {
          handleClose()
        }
      } else {
        if (isOutsideContainer) {
          handleClose()
        }
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    const handleScroll = () => {
      if (open && portalRenderNode) {
        updatePosition()
      }
    }

    const handleResize = () => {
      if (open && portalRenderNode) {
        updatePosition()
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)

      if (portalRenderNode) {
        window.addEventListener('scroll', handleScroll, true)
        window.addEventListener('resize', handleResize)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [open, handleClose, portalRenderNode, updatePosition])

  const content = portalRenderNode ? (
    createPortal(
      <StyledPortalContent
        ref={contentRef}
        $open={open}
        $position={position}
        className={css('content', classnames?.content)}
        style={{ top: portalPosition.top, left: portalPosition.left }}
      >
        {children}
      </StyledPortalContent>,
      portalRenderNode,
    )
  ) : (
    <StyledContent
      ref={contentRef}
      $align={align}
      $open={open}
      $position={position}
      className={css('content', classnames?.content)}
    >
      {children}
    </StyledContent>
  )

  return (
    <StyledContainer {...rest} ref={ref ?? containerRef} className={css('container', className)}>
      <StyledTrigger
        ref={triggerRef}
        onClick={handleToggle}
        className={css('trigger', classnames?.trigger)}
      >
        {cloneElement(trigger)}
      </StyledTrigger>
      {content}
    </StyledContainer>
  )
}
