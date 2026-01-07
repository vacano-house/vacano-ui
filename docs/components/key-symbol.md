# KeySymbol

Single keyboard key symbol display.

<a href="https://ui.vacano.io/components/?path=/docs/atoms-keysymbol--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { KeySymbol } from '@vacano/ui'
```

## Usage

```tsx
<KeySymbol symbol="⌘" />
```

## Common Symbols

```tsx
// macOS
<KeySymbol symbol="⌘" />  {/* Command */}
<KeySymbol symbol="⌥" />  {/* Option */}
<KeySymbol symbol="⌃" />  {/* Control */}
<KeySymbol symbol="⇧" />  {/* Shift */}

// Navigation
<KeySymbol symbol="↑" />  {/* Up */}
<KeySymbol symbol="↓" />  {/* Down */}
<KeySymbol symbol="←" />  {/* Left */}
<KeySymbol symbol="→" />  {/* Right */}

// Actions
<KeySymbol symbol="⌫" />  {/* Backspace */}
<KeySymbol symbol="⌦" />  {/* Delete */}
<KeySymbol symbol="⇥" />  {/* Tab */}
<KeySymbol symbol="Esc" />
<KeySymbol symbol="Enter" />
```

## Variants

```tsx
<KeySymbol symbol="K" variant="dark" />
<KeySymbol symbol="K" variant="light" />
```

## In Context

```tsx
<span>
  Press <KeySymbol symbol="⌘" /> + <KeySymbol symbol="K" /> to open search
</span>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `symbol` | `string` | **required** | Key symbol to display |
| `variant` | `'dark' \| 'light'` | `'dark'` | Color variant |
| `className` | `string` | - | CSS class name |
