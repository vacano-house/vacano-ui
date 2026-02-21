import { useCallback, useReducer, type PropsWithChildren } from 'react'

import { ToastContext } from './context'
import { initialToastState, toastReducer } from './reducer'
import { ToastContainer } from './ToastContainer'
import type { ToastVariant } from './types'

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(toastReducer, initialToastState)

  const show = useCallback(
    (message: string, variant: ToastVariant = 'default', duration?: number) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      dispatch({
        type: 'ADD_TOAST',
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

  const hide = useCallback((id: string) => {
    dispatch({
      type: 'REMOVE_TOAST',
      payload: id,
    })
  }, [])

  return (
    <ToastContext.Provider value={{ show, hide }}>
      {children}
      <ToastContainer toasts={state.toasts} queueCount={state.queue.length} onHide={hide} />
    </ToastContext.Provider>
  )
}
