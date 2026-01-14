import { useContext } from 'react'

import { SaveProgressContext } from './context'

export const useSaveProgress = () => {
  const context = useContext(SaveProgressContext)

  if (!context) {
    throw new Error('useSaveProgress must be used within SaveProgressProvider')
  }

  return context
}
