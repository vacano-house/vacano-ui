import { useCallback, useState, type PropsWithChildren, type ReactNode } from 'react'

import { ConfirmationBar } from './ConfirmationBar'
import { ConfirmationContext } from './context'
import type { ConfirmationOptions, ConfirmationState } from './types'

const noop = () => {}

export const ConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<ConfirmationState | null>(null)

  const show = useCallback(
    (
      message: ReactNode,
      onConfirm: () => void,
      onCancel?: () => void,
      options?: ConfirmationOptions,
    ) => {
      setState({
        open: true,
        message,
        onConfirm,
        onCancel: onCancel || noop,
        options: options || {},
      })
    },
    [],
  )

  const hide = useCallback(() => {
    setState(null)
  }, [])

  return (
    <ConfirmationContext.Provider value={{ show, hide }}>
      {children}
      {state && <ConfirmationBar confirmation={state} onDone={hide} />}
    </ConfirmationContext.Provider>
  )
}
