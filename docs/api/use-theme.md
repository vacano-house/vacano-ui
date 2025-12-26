# useTheme

Hook to access the current theme and control theme mode.

## Import

```tsx
import { useTheme } from '@vacano/ui'
```

## Usage

```tsx
import { useTheme } from '@vacano/ui'

function ThemeToggle() {
  const { mode, setMode, theme } = useTheme()

  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Current: {mode}
    </button>
  )
}
```

## Return Value

### ThemeContextValue

```ts
interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}
```

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `Theme` | Current theme object with all design tokens |
| `mode` | `ThemeMode` | Current theme mode (`'light'` or `'dark'`) |
| `setMode` | `(mode: ThemeMode) => void` | Function to change theme mode |

## Properties

### theme

The complete theme object containing all design tokens for the current mode:

```ts
const { theme } = useTheme()

// Access theme values
theme.button.primary.background
theme.input.border
theme.checkbox.checked.background
```

### mode

Current theme mode as a string:

```ts
const { mode } = useTheme()

console.log(mode) // 'light' or 'dark'
```

### setMode

Function to switch between theme modes:

```ts
const { setMode } = useTheme()

// Switch to dark mode
setMode('dark')

// Switch to light mode
setMode('light')
```

## Error Handling

`useTheme` must be used within a `ThemeProvider`. If used outside, it throws an error:

```ts
// This will throw:
// "useTheme must be used within a ThemeProvider"
function ComponentOutsideProvider() {
  const { mode } = useTheme() // Error!
}
```

## Examples

### Theme Toggle Button

```tsx
function ThemeToggle() {
  const { mode, setMode } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </Button>
  )
}
```

### Theme-Aware Component

```tsx
function ThemedCard() {
  const { mode } = useTheme()

  return (
    <div style={{
      background: mode === 'light' ? '#fff' : '#1a1a1a',
      color: mode === 'light' ? '#000' : '#fff',
    }}>
      Content
    </div>
  )
}
```

### Persist Theme to localStorage

```tsx
function ThemeSwitcher() {
  const { mode, setMode } = useTheme()

  const handleChange = (newMode: ThemeMode) => {
    setMode(newMode)
    localStorage.setItem('theme', newMode)
  }

  return (
    <select
      value={mode}
      onChange={(e) => handleChange(e.target.value as ThemeMode)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}
```

## See Also

- [ThemeProvider](/api/theme-provider) — Required context provider
- [Theme Types](/api/theme-types) — All theme-related types
- [Theming Guide](/guide/theming) — Complete theming guide
