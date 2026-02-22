# Utilities

Shared utilities, hooks, constants, and types for building UIs with Vacano.

*Also known as: lib, helpers, utils, shared, tools, common*

## When to use

- Use utilities alongside Vacano UI components for colors, responsive design, keyboard shortcuts, and platform detection.
- Available from both `@vacano/ui` and `@vacano/ui/lib`.
- Validation utilities are available as a namespace export: `import { validation } from '@vacano/ui/lib'`.

## Import

```tsx
// From main package
import { COLORS, mediaUp, useKeyBinding } from '@vacano/ui'

// From dedicated export
import { COLORS, mediaUp, useKeyBinding } from '@vacano/ui/lib'

// Validation namespace
import { validation } from '@vacano/ui/lib'
```

## Constants

- [BREAKPOINTS](/lib/constants#breakpoints) - Responsive breakpoint values (`sm`, `md`, `lg`, `xl`, `2xl`)
- [COLORS](/lib/constants#colors) - Design system color palette (`black`, `white`, `red`, `green`, `yellow`, `gray`, `steel-blue`, `iron-grey`, `baltic-blue`)
- [KEYFRAMES](/lib/constants#keyframes) - Reusable Emotion CSS animations (`rotate`, `fadeIn`, `fadeOut`, `slideInLeft`, `slideOutLeft`, `slideInRight`, `slideOutRight`, `slideInTop`, `slideOutTop`, `slideInBottom`, `slideOutBottom`, `scaleIn`, `slideInTopFade`, `slideOutTopFade`, `slideInBottomFade`, `slideOutBottomFade`)
- [KEY_SYMBOLS](/lib/constants#key-symbols) - Keyboard key to symbol mappings (`Meta` -> `⌘`, `Control` -> `⌃`, etc.)

## Utils

- [Colors](/lib/colors) - HEX color manipulation (`alpha`, `toHEX`, `isValid`)
- [Media](/lib/media) - Responsive media query helpers (`mediaUp`, `mediaDown`, `mediaBetween`)
- [Platform](/lib/platform) - OS and browser detection (`getOperatingSystem`, `getBrowser`)
- [Keyboard](/lib/keyboard) - Keyboard symbol resolution (`getKeySymbols`)
- `newClassNameGetter` - Internal utility for generating BEM-style class names with `vacano_` prefix

## Hooks

- [useKeyBinding](/lib/use-key-binding) - Keyboard shortcut handler

## Validation

- [Validation](/lib/validation) - Yup schema factories (`email`, `phone`, `url`, `password`, `slug`, `noSpaces`, `minAge`, `hexColor`, `ipv4`, `creditCard`)

## Types

- [Types](/lib/types) - Shared TypeScript types (`VacanoComponentProps`, `VacanoComponentClassNames`, `VacanoComponentSize`, `VacanoInteractiveElementState`, `VacanoValueItem`, `KeyboardEventKey`, `OperatingSystem`, `Browser`)

## Module Structure

The `@vacano/ui/lib` entry point re-exports from the following internal modules:

| Module | Exports |
|--------|---------|
| `hooks` | `useKeyBinding` |
| `utils` | `alpha`, `toHEX`, `isValid`, `mediaUp`, `mediaDown`, `mediaBetween`, `getOperatingSystem`, `getBrowser`, `getKeySymbols`, `newClassNameGetter` |
| `constants` | `BREAKPOINTS`, `COLORS`, `KEYFRAMES`, `KEY_SYMBOLS` |
| `types` | `VacanoComponentProps`, `VacanoComponentClassNames`, `VacanoComponentSize`, `VacanoInteractiveElementState`, `VacanoValueItem`, `KeyboardEventKey`, `OperatingSystem`, `Browser` |
| `validation` (namespace) | `email`, `phone`, `url`, `password`, `slug`, `noSpaces`, `minAge`, `hexColor`, `ipv4`, `creditCard` |
