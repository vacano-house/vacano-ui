import { useCallback, useMemo, useState } from 'react'

import { SaveProgressContext } from './context'
import { StyledContainer, StyledMessage } from './styled'
import type { SaveProgressProviderProps } from './types'
import { Spinner } from '../Spinner'

export const SaveProgressProvider = ({
  children,
  defaultMessage = 'Saving',
}: SaveProgressProviderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState(defaultMessage)

  const show = useCallback(
    (customMessage?: string) => {
      setMessage(customMessage ?? defaultMessage)
      setIsVisible(true)
    },
    [defaultMessage],
  )

  const hide = useCallback(() => {
    setIsVisible(false)
  }, [])

  const value = useMemo(() => ({ isVisible, show, hide }), [isVisible, show, hide])

  return (
    <SaveProgressContext.Provider value={value}>
      {children}
      {isVisible && (
        <StyledContainer>
          <Spinner size="sm" />
          <StyledMessage>{message}</StyledMessage>
        </StyledContainer>
      )}
    </SaveProgressContext.Provider>
  )
}
