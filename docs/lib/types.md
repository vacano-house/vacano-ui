# Types

Shared TypeScript types used across the library.

*Also known as: typescript types, interfaces, type definitions, shared types, common types*

## When to use

- Use `VacanoComponentProps` as the base for custom component prop types.
- Use `VacanoComponentClassNames` for the classnames override pattern.
- Use `VacanoComponentSize` for the standard compact/default size variants.
- Use `VacanoInteractiveElementState` for state-based style definitions.
- Use `VacanoValueItem` for option lists in [Select](/components/select), [RadioGroup](/components/radio-group), [CheckboxGroup](/components/checkbox-group), and similar components.
- Use `KeyboardEventKey` with [useKeyBinding](/lib/use-key-binding) and [getKeySymbols](/lib/keyboard).
- Use `OperatingSystem` and `Browser` with [platform detection](/lib/platform).

## Import

```tsx
import type {
  VacanoComponentProps,
  VacanoComponentClassNames,
  VacanoComponentSize,
  VacanoInteractiveElementState,
  VacanoValueItem,
  KeyboardEventKey,
  OperatingSystem,
  Browser,
} from '@vacano/ui'
```

## VacanoComponentClassNames

Identity type alias used by `VacanoComponentProps` for the `classnames` prop. Passes through the generic type `T` as-is.

```tsx
type VacanoComponentClassNames<T> = T
```

This is used in component props to allow consumers to provide custom class names for specific sub-elements of a component.

## VacanoComponentProps

Base props interface for all Vacano components. Every component's props type extends this.

```tsx
type VacanoComponentProps<
  E extends HTMLElement | null,
  T extends Record<string, string> = Record<string, never>,
> = {
  'data-test-id'?: string
  className?: string
  classnames?: VacanoComponentClassNames<T>
  ref?: Ref<E>
}
```

| Generic | Constraint | Default | Description |
|---------|-----------|---------|-------------|
| `E` | `HTMLElement \| null` | -- | The underlying DOM element type for the `ref` prop |
| `T` | `Record<string, string>` | `Record<string, never>` | Shape of the `classnames` override object |

| Prop | Type | Description |
|------|------|-------------|
| `data-test-id` | `string` | Optional test ID attribute for testing frameworks |
| `className` | `string` | Optional root element class name |
| `classnames` | `T` | Optional object of class name overrides for sub-elements |
| `ref` | `Ref<E>` | React 19 ref prop (forwarded via `useImperativeHandle`) |

## VacanoComponentSize

Standard component size variants. Used by Button, Input, Select, and other interactive components.

```tsx
type VacanoComponentSize = 'compact' | 'default'
```

| Value | Description |
|-------|-------------|
| `'compact'` | Smaller, denser variant |
| `'default'` | Standard size variant |

## VacanoInteractiveElementState

State-based style definitions for interactive elements. Each property is an optional CSS class name string.

```tsx
type VacanoInteractiveElementState = {
  active?: string
  disabled?: string
  hover?: string
  static?: string
}
```

| Property | Type | Description |
|----------|------|-------------|
| `active` | `string` | Class name applied when the element is active/pressed |
| `disabled` | `string` | Class name applied when the element is disabled |
| `hover` | `string` | Class name applied on hover |
| `static` | `string` | Class name applied in the default/resting state |

## VacanoValueItem

Standard option item used by [Select](/components/select), [RadioGroup](/components/radio-group), [CheckboxGroup](/components/checkbox-group), and similar list-based components.

```tsx
type VacanoValueItem = {
  value: string
  label: string
  disabled?: boolean
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | `string` | Yes | The value used programmatically (submitted in forms, passed to onChange) |
| `label` | `string` | Yes | The display text shown to the user |
| `disabled` | `boolean` | No | Whether this option is disabled and unselectable |

## KeyboardEventKey

Union type of all supported keyboard key values. Based on [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values). Used by [useKeyBinding](/lib/use-key-binding) and [getKeySymbols](/lib/keyboard).

```tsx
type KeyboardEventKey =
  // Modifiers
  | 'Meta'
  | 'Control'
  | 'Alt'
  | 'Shift'
  // Letters (uppercase)
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N'
  | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U'
  | 'V' | 'W' | 'X' | 'Y' | 'Z'
  // Digits
  | '0' | '1' | '2' | '3' | '4'
  | '5' | '6' | '7' | '8' | '9'
  // Function keys
  | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6'
  | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12'
  // Navigation
  | 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
  | 'Home' | 'End' | 'PageUp' | 'PageDown'
  // Whitespace & Enter
  | ' ' | 'Enter' | 'Tab'
  // Editing
  | 'Backspace' | 'Delete' | 'Insert' | 'Escape'
  // Punctuation & Symbols
  | '`' | '-' | '=' | '[' | ']' | '\\'
  | ';' | "'" | ',' | '.' | '/'
  // Numpad
  | 'NumLock' | 'NumpadEnter'
  | 'NumpadAdd' | 'NumpadSubtract' | 'NumpadMultiply'
  | 'NumpadDivide' | 'NumpadDecimal'
  | 'Numpad0' | 'Numpad1' | 'Numpad2' | 'Numpad3' | 'Numpad4'
  | 'Numpad5' | 'Numpad6' | 'Numpad7' | 'Numpad8' | 'Numpad9'
  // System
  | 'CapsLock' | 'ScrollLock' | 'Pause'
  | 'PrintScreen' | 'ContextMenu'
```

### Key categories

| Category | Values |
|----------|--------|
| Modifiers | `Meta`, `Control`, `Alt`, `Shift` |
| Letters | `A` through `Z` (26 uppercase letters) |
| Digits | `0` through `9` |
| Function keys | `F1` through `F12` |
| Navigation | `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `PageUp`, `PageDown` |
| Whitespace & Enter | `' '` (space), `Enter`, `Tab` |
| Editing | `Backspace`, `Delete`, `Insert`, `Escape` |
| Punctuation & Symbols | `` ` ``, `-`, `=`, `[`, `]`, `\`, `;`, `'`, `,`, `.`, `/` |
| Numpad | `NumLock`, `NumpadEnter`, `NumpadAdd`, `NumpadSubtract`, `NumpadMultiply`, `NumpadDivide`, `NumpadDecimal`, `Numpad0`-`Numpad9` |
| System | `CapsLock`, `ScrollLock`, `Pause`, `PrintScreen`, `ContextMenu` |

## OperatingSystem

Return type of [getOperatingSystem](/lib/platform).

```tsx
type OperatingSystem = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'unknown'
```

| Value | Description |
|-------|-------------|
| `'windows'` | Microsoft Windows |
| `'macos'` | Apple macOS |
| `'linux'` | Linux distributions |
| `'ios'` | Apple iOS (iPhone, iPad, iPod) |
| `'android'` | Google Android |
| `'unknown'` | SSR environment or unrecognized user agent |

## Browser

Return type of [getBrowser](/lib/platform).

```tsx
type Browser = 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'unknown'
```

| Value | Description |
|-------|-------------|
| `'chrome'` | Google Chrome |
| `'firefox'` | Mozilla Firefox |
| `'safari'` | Apple Safari |
| `'edge'` | Microsoft Edge |
| `'opera'` | Opera |
| `'unknown'` | SSR environment or unrecognized user agent |

## Related

- [Platform](/lib/platform) - Functions returning `OperatingSystem` and `Browser`
- [useKeyBinding](/lib/use-key-binding) - Hook using `KeyboardEventKey`
- [Keyboard](/lib/keyboard) - Key symbol resolution using `KeyboardEventKey`
