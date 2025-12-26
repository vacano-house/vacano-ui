# ThemeProvider

Context provider that enables theming for all Vacano UI components.

## Import

```tsx
import { ThemeProvider } from '@vacano/ui'
```

## Usage

Wrap your application root with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@vacano/ui'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## Props

### ThemeProviderProps

```ts
interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `ReactNode` | — | **Required.** Application content to be wrapped |
| `defaultMode` | `ThemeMode` | `'light'` | Initial theme mode |

## Related Types

### ThemeMode

```ts
type ThemeMode = 'light' | 'dark'
```

Available theme modes:

| Value | Description |
|-------|-------------|
| `'light'` | Light color scheme |
| `'dark'` | Dark color scheme |

## What ThemeProvider Does

1. **Creates Theme Context** — Provides theme values to all child components
2. **Manages Theme State** — Tracks current theme mode (light/dark)
3. **Injects Global Styles** — Applies base CSS reset and typography
4. **Wraps with Emotion ThemeProvider** — Makes theme available via Emotion's `useTheme`

## Example

### With Default Light Theme

```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

### With Dark Theme Default

```tsx
<ThemeProvider defaultMode="dark">
  <App />
</ThemeProvider>
```

### With Persisted Theme

```tsx
function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) || 'light'
  })

  return (
    <ThemeProvider defaultMode={mode}>
      <AppContent />
    </ThemeProvider>
  )
}
```

## See Also

- [useTheme](/api/use-theme) — Hook to access theme context
- [Theme Types](/api/theme-types) — All theme-related types
- [Theming Guide](/guide/theming) — Complete theming guide
