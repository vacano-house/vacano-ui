import { useContext } from 'react'

import { ToastContext } from './context'

export const useToastr = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToastr must be used within ToastProvider')
  }

  return context
}
