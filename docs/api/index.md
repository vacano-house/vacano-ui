# API Reference

Complete TypeScript API reference for Vacano UI.

## Exports

All types and components are exported from the main package:

```tsx
import {
  // Components
  Button,
  Input,
  Checkbox,
  Radio,
  Chip,
  Spinner,
  Loader,
  RadioGroup,
  CheckboxGroup,
  RadioCard,
  CheckboxCard,

  // Theme
  ThemeProvider,
  useTheme,

  // Types
  type ButtonProps,
  type ButtonVariant,
  type InputProps,
  type CheckboxProps,
  // ... etc
} from '@vacano/ui'
```

Icons are exported from a separate entry point:

```tsx
import { Search, Settings, User } from '@vacano/ui/icons'
import type { IconLucideProps } from '@vacano/ui/icons'
```

## Sections

### Theme
- [ThemeProvider](/api/theme-provider) — Context provider for theming
- [useTheme](/api/use-theme) — Hook to access and control theme
- [Theme Types](/api/theme-types) — ThemeMode, ThemeContextValue

### Atoms
- [Button](/api/button) — ButtonProps, ButtonVariant, ButtonClassnames
- [Input](/api/input) — InputProps, InputType, InputState, InputClassnames
- [Checkbox](/api/checkbox) — CheckboxProps, CheckboxState, CheckboxClassnames
- [Radio](/api/radio) — RadioProps, RadioState, RadioClassnames
- [Chip](/api/chip) — ChipProps, ChipStatus, ChipClassnames
- [Spinner](/api/spinner) — SpinnerProps, SpinnerClassnames
- [Loader](/api/loader) — LoaderProps, LoaderClassnames

### Molecules
- [RadioGroup](/api/radio-group) — RadioGroupProps, RadioGroupOption, RadioGroupClassnames
- [CheckboxGroup](/api/checkbox-group) — CheckboxGroupProps, CheckboxGroupOption, CheckboxGroupClassnames
- [RadioCard](/api/radio-card) — RadioCardProps, RadioCardState, RadioCardClassnames
- [CheckboxCard](/api/checkbox-card) — CheckboxCardProps, CheckboxCardState, CheckboxCardClassnames

### Icons
- [Icon Props](/api/icons) — IconLucideProps

## Type Conventions

### Props Types
Component props are named `{ComponentName}Props`:
```ts
type ButtonProps = { ... }
type InputProps = { ... }
```

### Variant/State Types
Union types for variants are named `{ComponentName}{Property}`:
```ts
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type InputState = 'warning' | 'error'
```

### Classnames Types
CSS class overrides are named `{ComponentName}Classnames`:
```ts
type ButtonClassnames = {
  container?: string
  content?: string
  // ...
}
```
