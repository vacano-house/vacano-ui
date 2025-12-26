# Theming

Vacano UI comes with built-in light and dark themes. The theming system is built on top of Emotion and provides a simple API for theme switching.

## ThemeProvider

All Vacano UI components must be wrapped in a `ThemeProvider`:

```tsx
import { ThemeProvider } from '@vacano/ui'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Your application content |
| `defaultMode` | `'light' \| 'dark'` | `'light'` | Initial theme mode |

## useTheme Hook

Use the `useTheme` hook to access the current theme and switch between modes:

```tsx
import { useTheme } from '@vacano/ui'

function ThemeToggle() {
  const { mode, setMode } = useTheme()

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={toggleTheme}>
      Current: {mode}
    </button>
  )
}
```

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `Theme` | Current theme object with all design tokens |
| `mode` | `'light' \| 'dark'` | Current theme mode |
| `setMode` | `(mode: ThemeMode) => void` | Function to change theme mode |

## Theme Structure

The theme object contains design tokens for all components. Each component has its own section with colors for different states and variants.

```ts
interface Theme {
  button: {
    primary: { background: string; color: string; ... }
    secondary: { background: string; color: string; ... }
    ghost: { background: string; color: string; ... }
    danger: { background: string; color: string; ... }
  }
  input: {
    background: string
    border: string
    state: {
      warning: { ... }
      error: { ... }
    }
  }
  // ... other components
}
```

## Example: Theme Switcher

Here's a complete example of a theme switcher component:

```tsx
import { useTheme, Button } from '@vacano/ui'
import { Sun, Moon } from '@vacano/ui/icons'

function ThemeSwitcher() {
  const { mode, setMode } = useTheme()

  return (
    <Button
      variant="ghost"
      icon={mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  )
}
```

## Persisting Theme Preference

The `ThemeProvider` doesn't persist the theme preference by default. You can implement persistence using localStorage:

```tsx
import { useState, useEffect } from 'react'
import { ThemeProvider, ThemeMode } from '@vacano/ui'

function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as ThemeMode) || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ThemeProvider defaultMode={mode}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

## System Preference Detection

You can detect the user's system preference:

```tsx
import { useState, useEffect } from 'react'
import { ThemeProvider, ThemeMode } from '@vacano/ui'

function App() {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setMode(mediaQuery.matches ? 'dark' : 'light')

    const handler = (e: MediaQueryListEvent) => {
      setMode(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <ThemeProvider defaultMode={mode}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

## Types

### ThemeMode

```ts
type ThemeMode = 'light' | 'dark'
```

### ThemeProviderProps

```ts
interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}
```

### ThemeContextValue

```ts
interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}
```
