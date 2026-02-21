# useKeyBinding

React hook for handling keyboard shortcuts. Supports single keys and multi-key combinations.

*Also known as: keyboard shortcut, hotkey, key binding, shortcut handler, key listener, key combo*

## When to use

- Use `useKeyBinding` to handle keyboard shortcuts like Cmd+K, Ctrl+S, Escape. For displaying shortcuts in the UI, see [KeysBindings](/components/keys-bindings). For converting keys to symbols, see [getKeySymbols](/lib/keyboard).

## Import

```tsx
import { useKeyBinding } from '@vacano/ui'
```

## Usage

```tsx
import { useKeyBinding } from '@vacano/ui'

function SearchDialog() {
  const [open, setOpen] = useState(false)

  useKeyBinding(['Meta', 'K'], () => {
    setOpen(true)
  })

  return open ? <Dialog /> : null
}
```

## Multi-key Combinations

```tsx
// Cmd+Shift+P (macOS) / Ctrl+Shift+P (Windows)
useKeyBinding(['Meta', 'Shift', 'P'], () => {
  openCommandPalette()
})

// Cmd+S — save
useKeyBinding(['Meta', 'S'], () => {
  save()
})

// Escape — close
useKeyBinding(['Escape'], () => {
  close()
})
```

## Parameters

| Param | Type | Description |
|-------|------|-------------|
| `keys` | `KeyboardEventKey[]` | Keys that must be pressed simultaneously |
| `cb` | `() => void` | Callback fired when all keys are pressed |

## Behavior

- Calls `preventDefault()` when the shortcut matches
- Case-insensitive for letter keys (`a` matches `A`)
- Clears pressed keys on window `blur` to prevent stuck keys
- The callback ref is updated on every render (no stale closures)

## Related

- [Keyboard](/lib/keyboard) - Key symbol display utilities (`getKeySymbols`)
- [KeysBindings](/components/keys-bindings) - Visual keyboard shortcut component
- [KeySymbol](/components/key-symbol) - Single key symbol display component
- [Types](/lib/types) - `KeyboardEventKey` type definition
