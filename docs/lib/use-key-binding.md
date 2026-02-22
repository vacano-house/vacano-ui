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

## Signature

```tsx
useKeyBinding(keys: KeyboardEventKey[], cb?: () => void): void
```

## Parameters

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `keys` | `KeyboardEventKey[]` | Yes | Keys that must all be pressed simultaneously to trigger the callback. The hook re-subscribes when this array changes (it is a dependency of the internal `useEffect`). |
| `cb` | `() => void` | No | Callback fired when all keys are pressed. Optional -- if not provided, the key combination is tracked but nothing fires. The callback is stored in a ref (`useRef`) so it never causes re-subscription and is never stale. |

**Returns:** `void`

## Behavior

- Listens to `keydown`, `keyup`, and `blur` events on `window`.
- On `keydown`: adds the pressed key to an internal `Set<string>`. If all keys in the `keys` array are currently pressed, calls `e.preventDefault()` and invokes `cb()`.
- On `keyup`: removes the released key from the internal set.
- On `blur`: clears all pressed keys to prevent stuck keys when the window loses focus.
- Letter keys are normalized to uppercase (e.g. `'a'` becomes `'A'`), so key matching is case-insensitive for single letter keys.
- The `keys` array is used as the `useEffect` dependency, so the listeners are re-registered when it changes.
- The callback ref (`cbRef`) is updated on every render, preventing stale closure issues without triggering effect re-runs.

## Related

- [Keyboard](/lib/keyboard) - Key symbol display utilities (`getKeySymbols`)
- [KeysBindings](/components/keys-bindings) - Visual keyboard shortcut component
- [KeySymbol](/components/key-symbol) - Single key symbol display component
- [Types](/lib/types) - `KeyboardEventKey` type definition
