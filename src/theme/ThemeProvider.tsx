import { createContext, useContext, useMemo, useState } from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { themeDark, themeLight, type Theme } from './themes'
import type { ThemeMode } from './types'

interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultMode?: ThemeMode
}

export function ThemeProvider({ children, defaultMode = 'light' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  const theme = useMemo(() => {
    switch (mode) {
      case 'light':
        return themeLight

      case 'dark':
        return themeDark

      default:
        return themeLight
    }
  }, [mode])

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      theme,
      mode,
      setMode,
      toggleMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme, mode],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
