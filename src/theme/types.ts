import { ReactNode } from 'react'

import type { Theme } from './themes'

export type ThemeMode = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

export interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}
