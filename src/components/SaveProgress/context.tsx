import { createContext } from 'react'

import type { SaveProgressContextValue } from './types'

export const SaveProgressContext = createContext<SaveProgressContextValue | null>(null)
