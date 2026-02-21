import { useCallback, useState, type PropsWithChildren, type ReactNode } from 'react'

import { NotifyConfirmationContext } from './context'
import { NotifyConfirmationBar } from './NotifyConfirmationBar'
import type { NotifyConfirmationOptions, NotifyConfirmationState } from './types'

const noop = () => {}

export const NotifyConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<NotifyConfirmationState | null>(null)

  const show = useCallback(
    (
      label: ReactNode,
      description: ReactNode,
      onConfirm: () => void | Promise<void>,
      onDiscard?: () => void,
      options?: NotifyConfirmationOptions,
    ) => {
      setState({
        open: true,
        label,
        description,
        onConfirm,
        onDiscard: onDiscard || noop,
        options: options || {},
      })
    },
    [],
  )

  const hide = useCallback(() => {
    setState(null)
  }, [])

  return (
    <NotifyConfirmationContext.Provider value={{ show, hide }}>
      {children}
      {state && <NotifyConfirmationBar confirmation={state} onDone={hide} />}
    </NotifyConfirmationContext.Provider>
  )
}
