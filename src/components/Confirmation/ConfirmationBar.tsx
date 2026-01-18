import { useCallback, useEffect, useState } from 'react'

import { DEFAULT_CANCEL_LABEL, DEFAULT_CONFIRM_LABEL } from './constants'
import { StyledActions, StyledContainer, StyledMessage } from './styled'
import type { ConfirmationState } from './types'
import { Button } from '../Button'

type ConfirmationBarProps = {
  confirmation: ConfirmationState
  onDone: () => void
}

export const ConfirmationBar = ({ confirmation, onDone }: ConfirmationBarProps) => {
  const [isExiting, setIsExiting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { message, onConfirm, onCancel, options } = confirmation
  const confirmLabel = options.confirmLabel || DEFAULT_CONFIRM_LABEL
  const cancelLabel = options.cancelLabel || DEFAULT_CANCEL_LABEL

  const exit = useCallback(
    (callback?: () => void) => {
      setIsExiting(true)
      setTimeout(() => {
        callback?.()
        onDone()
      }, 200)
    },
    [onDone],
  )

  const handleConfirm = useCallback(async () => {
    const result = onConfirm()

    if (result instanceof Promise) {
      setIsLoading(true)
      try {
        await result
      } finally {
        setIsLoading(false)
      }
    }

    exit()
  }, [exit, onConfirm])

  const handleCancel = useCallback(() => {
    if (isLoading) return
    exit(onCancel)
  }, [exit, isLoading, onCancel])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) {
        handleCancel()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleCancel, isLoading])

  return (
    <StyledContainer $isExiting={isExiting}>
      <StyledMessage>{message}</StyledMessage>
      <StyledActions>
        <Button variant="system" size="compact" onClick={handleCancel} disabled={isLoading}>
          {cancelLabel}
        </Button>
        <Button variant="danger" size="compact" onClick={handleConfirm} loading={isLoading}>
          {confirmLabel}
        </Button>
      </StyledActions>
    </StyledContainer>
  )
}
