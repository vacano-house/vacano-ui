# Theme Types

TypeScript types for the theming system.

## Import

```tsx
import type {
  ThemeMode,
  ThemeProviderProps,
  ThemeContextValue,
} from '@vacano/ui'
```

## Types

### ThemeMode

```ts
type ThemeMode = 'light' | 'dark'
```

Available theme modes.

| Value | Description |
|-------|-------------|
| `'light'` | Light color scheme with light backgrounds and dark text |
| `'dark'` | Dark color scheme with dark backgrounds and light text |

**Usage:**

```tsx
const [mode, setMode] = useState<ThemeMode>('light')
```

---

### ThemeProviderProps

```ts
interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}
```

Props for the `ThemeProvider` component.

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `children` | `ReactNode` | Yes | — | Application content |
| `defaultMode` | `ThemeMode` | No | `'light'` | Initial theme mode |

**Usage:**

```tsx
<ThemeProvider defaultMode="dark">
  <App />
</ThemeProvider>
```

---

### ThemeContextValue

```ts
interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}
```

Return type of the `useTheme` hook.

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `Theme` | Current theme object with design tokens |
| `mode` | `ThemeMode` | Current mode (`'light'` or `'dark'`) |
| `setMode` | `(mode: ThemeMode) => void` | Function to change mode |

**Usage:**

```tsx
const { theme, mode, setMode } = useTheme()
```

---

### Theme

The `Theme` type contains all design tokens organized by component. This is an internal type used by the theming system.

```ts
interface Theme {
  button: {
    primary: ButtonTheme
    secondary: ButtonTheme
    ghost: ButtonTheme
    danger: ButtonTheme
  }
  input: {
    background: string
    border: string
    color: string
    placeholder: string
    state: {
      warning: InputStateTheme
      error: InputStateTheme
    }
  }
  checkbox: {
    default: CheckboxTheme
    checked: CheckboxTheme
    state: {
      warning: CheckboxStateTheme
      error: CheckboxStateTheme
    }
  }
  // ... other components
}
```

::: tip
You typically don't need to use the `Theme` type directly. Component colors are handled automatically by the theming system.
:::

## Type Guards

### Check Theme Mode

```tsx
function isLightMode(mode: ThemeMode): mode is 'light' {
  return mode === 'light'
}

function isDarkMode(mode: ThemeMode): mode is 'dark' {
  return mode === 'dark'
}
```

## Common Patterns

### Type-Safe Theme Switching

```tsx
const toggleTheme = (current: ThemeMode): ThemeMode => {
  return current === 'light' ? 'dark' : 'light'
}

// Usage
const { mode, setMode } = useTheme()
setMode(toggleTheme(mode))
```

### Conditional Styling Based on Mode

```tsx
const { mode } = useTheme()

const styles = {
  background: mode === 'light' ? '#ffffff' : '#1a1a1a',
  color: mode === 'light' ? '#000000' : '#ffffff',
} as const
```

### localStorage with Type Safety

```tsx
const getStoredTheme = (): ThemeMode => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return 'light' // default
}

const storeTheme = (mode: ThemeMode): void => {
  localStorage.setItem('theme', mode)
}
```

## See Also

- [ThemeProvider](/api/theme-provider) — Context provider component
- [useTheme](/api/use-theme) — Theme access hook
- [Theming Guide](/guide/theming) — Complete theming documentation
