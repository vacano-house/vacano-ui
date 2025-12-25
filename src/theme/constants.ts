import { createContext } from 'react'

import { themeLight } from './themes'
import type { ThemeContextValue } from './types'

export const ThemeContext = createContext<ThemeContextValue>({
  mode: 'light',
  theme: themeLight,
  setMode: () => {},
})
