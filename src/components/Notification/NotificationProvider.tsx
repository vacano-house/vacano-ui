import { useCallback, useReducer, type PropsWithChildren } from 'react'

import { DEFAULT_NOTIFICATION_DURATION } from './constants'
import { NotificationContext } from './context'
import { NotificationBar } from './NotificationBar'
import { initialNotificationState, notificationReducer } from './reducer'
import { StyledNotificationContainer } from './styled'
import type { NotificationVariant } from './types'

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(notificationReducer, initialNotificationState)

  const show = useCallback(
    (
      message: string,
      variant: NotificationVariant = 'default',
      duration: number = DEFAULT_NOTIFICATION_DURATION,
    ) => {
      const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id,
          message,
          variant,
          duration,
        },
      })
    },
    [],
  )

  const hide = useCallback(() => {
    dispatch({ type: 'REMOVE_CURRENT' })
  }, [])

  const handleRemove = useCallback(() => {
    dispatch({ type: 'REMOVE_CURRENT' })
  }, [])

  const handleShowNext = useCallback(() => {
    // Small delay before showing next notification
    setTimeout(() => {
      dispatch({ type: 'SHOW_NEXT' })
    }, 100)
  }, [])

  return (
    <NotificationContext.Provider value={{ show, hide }}>
      {children}
      <StyledNotificationContainer>
        {state.current && (
          <NotificationBar
            key={state.current.id}
            notification={state.current}
            onRemove={handleRemove}
            onAnimationEnd={handleShowNext}
          />
        )}
      </StyledNotificationContainer>
    </NotificationContext.Provider>
  )
}
