# Keyboard

Keyboard key to display symbol resolution. Platform-aware — returns macOS symbols (⌘, ⌥) on Mac and standard labels (Win, Alt) on other platforms.

*Also known as: key symbols, hotkey display, shortcut symbols, keyboard symbols, key labels*

## When to use

- Use `getKeySymbols` to convert `KeyboardEventKey` values to user-facing symbols. For handling keyboard shortcuts, see [useKeyBinding](/lib/use-key-binding). For displaying shortcuts in the UI, see [KeysBindings](/components/keys-bindings) and [KeySymbol](/components/key-symbol).

## Import

```tsx
import { getKeySymbols } from '@vacano/ui'
```

## getKeySymbols

Converts an array of `KeyboardEventKey` values to display symbols.

```tsx
import { getKeySymbols } from '@vacano/ui'

// On macOS:
getKeySymbols(['Meta', 'Shift', 'K'])
// → ['⌘', '⇧', 'K']

// On Windows/Linux:
getKeySymbols(['Meta', 'Shift', 'K'])
// → ['Win', '⇧', 'K']

// No keys
getKeySymbols([])        // → []
getKeySymbols(undefined) // → []
```

| Param | Type | Description |
|-------|------|-------------|
| `keys` | `KeyboardEventKey[]` | Array of keyboard keys |

**Returns:** `string[]` — Display symbols. Keys without a mapping in [KEY_SYMBOLS](/lib/constants#key-symbols) are returned as-is.

## Related

- [Constants — KEY_SYMBOLS](/lib/constants#key-symbols) - Symbol mapping table
- [useKeyBinding](/lib/use-key-binding) - Keyboard shortcut handler hook
- [KeysBindings](/components/keys-bindings) - Visual keyboard shortcut component
- [KeySymbol](/components/key-symbol) - Single key symbol display component
- [Types](/lib/types) - `KeyboardEventKey` type definition
