import { useEffect, useState } from 'react'

import { StyledToast, StyledToastCloseButton, StyledToastMessage } from './styled'
import type { ToastItemProps } from './types'
import { X } from '../../icons/Lucide'

export const ToastItem = ({ toast, onHide }: ToastItemProps) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleRemove = () => {
    setIsExiting(true)
    setTimeout(() => {
      onHide(toast.id)
    }, 300)
  }

  useEffect(() => {
    if (toast.duration) {
      const timer = setTimeout(() => {
        handleRemove()
      }, toast.duration)

      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast.duration, toast.id])

  return (
    <StyledToast $variant={toast.variant} $isExiting={isExiting}>
      <StyledToastMessage>{toast.message}</StyledToastMessage>
      <StyledToastCloseButton onClick={handleRemove}>
        <X style={{ width: 16, height: 16 }} />
      </StyledToastCloseButton>
    </StyledToast>
  )
}
