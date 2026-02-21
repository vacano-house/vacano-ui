# Types

Shared TypeScript types used across the library.

*Also known as: typescript types, interfaces, type definitions, shared types, common types*

## When to use

- Use `VacanoComponentProps` as the base for custom component prop types.
- Use `VacanoValueItem` for option lists in [Select](/components/select), [RadioGroup](/components/radio-group), [CheckboxGroup](/components/checkbox-group), and similar components.
- Use `KeyboardEventKey` with [useKeyBinding](/lib/use-key-binding) and [getKeySymbols](/lib/keyboard).

## Import

```tsx
import type {
  VacanoComponentProps,
  VacanoComponentSize,
  VacanoValueItem,
  KeyboardEventKey,
  OperatingSystem,
  Browser,
} from '@vacano/ui'
```

## VacanoComponentProps

Base props interface for all Vacano components.

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

## VacanoComponentSize

Standard component size variants.

```tsx
type VacanoComponentSize = 'compact' | 'default'
```

## VacanoValueItem

Standard option item for [Select](/components/select), [RadioGroup](/components/radio-group), [CheckboxGroup](/components/checkbox-group), and similar components.

```tsx
type VacanoValueItem = {
  value: string
  label: string
  disabled?: boolean
}
```

## VacanoInteractiveElementState

State-based class names for interactive elements.

```tsx
type VacanoInteractiveElementState = {
  active?: string
  disabled?: string
  hover?: string
  static?: string
}
```

## KeyboardEventKey

Union type of all supported keyboard key values. Based on [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values). Used by [useKeyBinding](/lib/use-key-binding) and [getKeySymbols](/lib/keyboard).

```tsx
type KeyboardEventKey =
  | 'Meta' | 'Control' | 'Alt' | 'Shift'       // Modifiers
  | 'A' | 'B' | 'C' | ... | 'Z'                // Letters
  | '0' | '1' | ... | '9'                       // Digits
  | 'F1' | 'F2' | ... | 'F12'                   // Function keys
  | 'ArrowUp' | 'ArrowDown' | ...               // Navigation
  | 'Enter' | 'Tab' | ' '                       // Whitespace
  | 'Backspace' | 'Delete' | 'Escape'           // Editing
  | 'NumpadEnter' | 'Numpad0' | ...             // Numpad
  | ...                                          // Punctuation, System
```

## OperatingSystem

Used by [getOperatingSystem](/lib/platform).

```tsx
type OperatingSystem = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'unknown'
```

## Browser

Used by [getBrowser](/lib/platform).

```tsx
type Browser = 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'unknown'
```

## Related

- [Platform](/lib/platform) - Functions returning `OperatingSystem` and `Browser`
- [useKeyBinding](/lib/use-key-binding) - Hook using `KeyboardEventKey`
- [Keyboard](/lib/keyboard) - Key symbol resolution using `KeyboardEventKey`
