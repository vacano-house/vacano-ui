import { createContext } from 'react'

import type { NotifyConfirmationContextValue } from './types'

export const NotifyConfirmationContext = createContext<NotifyConfirmationContextValue | null>(null)
