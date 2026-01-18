import { useContext } from 'react'

import { ConfirmationContext } from './context'

export const useConfirmation = () => {
  const context = useContext(ConfirmationContext)

  if (!context) {
    throw new Error('useConfirmation must be used within ConfirmationProvider')
  }

  return context
}
