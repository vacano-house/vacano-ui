import { useMemo, useState } from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { ThemeContext } from './constants'
import { themeDark, themeLight } from './themes'
import type { ThemeContextValue, ThemeMode, ThemeProviderProps } from './types'

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
    }),
    [theme, mode],
  )

  return (
    <ThemeContext value={contextValue}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext>
  )
}
