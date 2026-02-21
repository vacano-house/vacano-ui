import { StyledQueueCounter, StyledToastrBottomRow, StyledToastrContainer } from './styled'
import { ToastItem } from './ToastItem'
import type { ToastContainerProps } from './types'

export const ToastContainer = ({ toasts, queueCount, onHide }: ToastContainerProps) => {
  if (toasts.length === 0) {
    return null
  }

  const lastIndex = toasts.length - 1

  return (
    <StyledToastrContainer>
      {toasts.map((toast, index) => {
        if (index === lastIndex && queueCount > 0) {
          return (
            <StyledToastrBottomRow key={toast.id}>
              <ToastItem toast={toast} onHide={onHide} />
              <StyledQueueCounter>+{queueCount}</StyledQueueCounter>
            </StyledToastrBottomRow>
          )
        }

        return <ToastItem key={toast.id} toast={toast} onHide={onHide} />
      })}
    </StyledToastrContainer>
  )
}
