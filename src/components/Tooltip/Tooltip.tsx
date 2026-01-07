import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { StyledContent, StyledPortalContent, StyledWrapper } from './styled'
import { TooltipPlacement, TooltipProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('tooltip')

const TOOLTIP_GAP = 8

type PortalPosition = {
  top: number
  left: number
}

export const Tooltip = ({
  children,
  className,
  classnames,
  content,
  delay = 200,
  placement = 'top',
  portalRenderNode,
  ref,
  variant = 'dark',
  ...rest
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null)
  const [actualPlacement, setActualPlacement] = useState<TooltipPlacement>(placement)
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({ top: 0, left: 0 })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return

    const triggerRect = wrapperRef.current.getBoundingClientRect()
    const contentWidth = contentRef.current?.offsetWidth ?? 100
    const contentHeight = contentRef.current?.offsetHeight ?? 30

    const spaceTop = triggerRect.top - TOOLTIP_GAP
    const spaceBottom = window.innerHeight - triggerRect.bottom - TOOLTIP_GAP
    const spaceLeft = triggerRect.left - TOOLTIP_GAP
    const spaceRight = window.innerWidth - triggerRect.right - TOOLTIP_GAP

    let newPlacement = placement

    // Auto-adjust placement if not enough space
    if (placement === 'top' && spaceTop < contentHeight && spaceBottom > spaceTop) {
      newPlacement = 'bottom'
    } else if (placement === 'bottom' && spaceBottom < contentHeight && spaceTop > spaceBottom) {
      newPlacement = 'top'
    } else if (placement === 'left' && spaceLeft < contentWidth && spaceRight > spaceLeft) {
      newPlacement = 'right'
    } else if (placement === 'right' && spaceRight < contentWidth && spaceLeft > spaceRight) {
      newPlacement = 'left'
    }

    setActualPlacement(newPlacement)

    if (portalRenderNode) {
      let top: number
      let left: number

      switch (newPlacement) {
        case 'top':
          top = triggerRect.top - contentHeight - TOOLTIP_GAP
          left = triggerRect.left + triggerRect.width / 2 - contentWidth / 2
          break
        case 'bottom':
          top = triggerRect.bottom + TOOLTIP_GAP
          left = triggerRect.left + triggerRect.width / 2 - contentWidth / 2
          break
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - contentHeight / 2
          left = triggerRect.left - contentWidth - TOOLTIP_GAP
          break
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - contentHeight / 2
          left = triggerRect.right + TOOLTIP_GAP
          break
        default:
          top = 0
          left = 0
      }

      // Clamp to viewport
      const padding = 8
      left = Math.max(padding, Math.min(left, window.innerWidth - contentWidth - padding))
      top = Math.max(padding, Math.min(top, window.innerHeight - contentHeight - padding))

      setPortalPosition({ top, left })
    }
  }, [placement, portalRenderNode])

  useLayoutEffect(() => {
    if (visible) {
      updatePosition()
    }
  }, [visible, updatePosition])

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setVisible(true)
    }, delay)
    setTimeoutId(id)
  }

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setVisible(false)
  }

  const tooltipContent = portalRenderNode ? (
    createPortal(
      <StyledPortalContent
        ref={contentRef}
        className={css('content', classnames?.content)}
        $placement={actualPlacement}
        $variant={variant}
        $visible={visible}
        style={{ top: portalPosition.top, left: portalPosition.left }}
      >
        {content}
      </StyledPortalContent>,
      portalRenderNode,
    )
  ) : (
    <StyledContent
      ref={contentRef}
      className={css('content', classnames?.content)}
      $placement={actualPlacement}
      $variant={variant}
      $visible={visible}
    >
      {content}
    </StyledContent>
  )

  return (
    <StyledWrapper
      {...rest}
      ref={(node) => {
        ;(wrapperRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      className={css('wrapper', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {tooltipContent}
    </StyledWrapper>
  )
}
