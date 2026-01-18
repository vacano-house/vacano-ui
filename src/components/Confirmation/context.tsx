import { createContext } from 'react'

import type { ConfirmationContextValue } from './types'

export const ConfirmationContext = createContext<ConfirmationContextValue | null>(null)
