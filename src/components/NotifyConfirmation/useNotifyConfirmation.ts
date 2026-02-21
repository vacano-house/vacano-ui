import { useContext } from 'react'

import { NotifyConfirmationContext } from './context'

export const useNotifyConfirmation = () => {
  const context = useContext(NotifyConfirmationContext)

  if (!context) {
    throw new Error('useNotifyConfirmation must be used within NotifyConfirmationProvider')
  }

  return context
}
