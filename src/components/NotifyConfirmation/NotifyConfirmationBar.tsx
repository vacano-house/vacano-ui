import { useCallback, useEffect, useState } from 'react'

import { DEFAULT_CONFIRM_LABEL, DEFAULT_DISCARD_LABEL } from './constants'
import { StyledActions, StyledContainer, StyledDescription, StyledLabel } from './styled'
import type { NotifyConfirmationState } from './types'
import { Button } from '../Button'

type NotifyConfirmationBarProps = {
  confirmation: NotifyConfirmationState
  onDone: () => void
}

export const NotifyConfirmationBar = ({ confirmation, onDone }: NotifyConfirmationBarProps) => {
  const [isExiting, setIsExiting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { label, description, onConfirm, onDiscard, options } = confirmation
  const confirmLabel = options.confirmLabel || DEFAULT_CONFIRM_LABEL
  const discardLabel = options.discardLabel || DEFAULT_DISCARD_LABEL

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

  const handleDiscard = useCallback(() => {
    if (isLoading) return
    exit(onDiscard)
  }, [exit, isLoading, onDiscard])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) {
        handleDiscard()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleDiscard, isLoading])

  return (
    <StyledContainer $isExiting={isExiting}>
      <StyledLabel>{label}</StyledLabel>
      <StyledDescription>{description}</StyledDescription>
      <StyledActions>
        <Button variant="transparent" size="compact" onClick={handleDiscard} disabled={isLoading}>
          {discardLabel}
        </Button>
        <Button variant="system" size="compact" onClick={handleConfirm} loading={isLoading}>
          {confirmLabel}
        </Button>
      </StyledActions>
    </StyledContainer>
  )
}
