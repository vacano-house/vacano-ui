# KeysBindings

Keyboard shortcut display component.

*Also known as: keyboard shortcut display, hotkey indicator, shortcut badge*

<a href="/storybook/?path=/story/components-keysbindings--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying keyboard shortcuts visually. Often used inside Buttons or Tooltips.
- For single key display, use KeySymbol.

## Import

```tsx
import { KeysBindings } from '@vacano/ui'
```

## Usage

```tsx
<KeysBindings keys={['Meta', 'S']} />
```

## Common Shortcuts

```tsx
// Save
<KeysBindings keys={['Meta', 'S']} />

// Copy
<KeysBindings keys={['Meta', 'C']} />

// Paste
<KeysBindings keys={['Meta', 'V']} />

// Undo
<KeysBindings keys={['Meta', 'Z']} />

// Find
<KeysBindings keys={['Meta', 'F']} />
```

## Single Key

```tsx
<KeysBindings keys={['Enter']} />
<KeysBindings keys={['Escape']} />
<KeysBindings keys={['Tab']} />
```

## Multiple Modifiers

```tsx
<KeysBindings keys={['Meta', 'Shift', 'S']} />
<KeysBindings keys={['Control', 'Alt', 'Delete']} />
```

## Variants

```tsx
<KeysBindings keys={['Meta', 'K']} variant="dark" />
<KeysBindings keys={['Meta', 'K']} variant="light" />
```

## Platform-Aware

The component automatically displays the correct symbols for the current platform:

- **macOS**: `⌘` for Meta, `⌥` for Alt, `⌃` for Control
- **Windows/Linux**: `Win` for Meta, `Alt` for Alt, `Ctrl` for Control

## Available Keys

All keys from `KeyboardEventKey` type are supported:

- Modifiers: `Meta`, `Control`, `Alt`, `Shift`
- Letters: `A`-`Z`
- Numbers: `0`-`9`
- Function keys: `F1`-`F12`
- Navigation: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `PageUp`, `PageDown`
- Editing: `Backspace`, `Delete`, `Insert`, `Escape`
- Whitespace: `Enter`, `Tab`, ` ` (space)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `keys` | `KeyboardEventKey[]` | - | Array of keys |
| `variant` | `'dark' \| 'light'` | `'dark'` | Color variant |
| `className` | `string` | - | CSS class name |
| `classnames` | `KeysBindingsClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `item` | Individual key item |

## Related

- [KeySymbol](/components/key-symbol) - Single keyboard key display
- [Button](/components/button) - Button with keyboard shortcut support
