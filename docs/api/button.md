# Button API

TypeScript types for the Button component.

## Import

```tsx
import { Button } from '@vacano/ui'
import type {
  ButtonProps,
  ButtonVariant,
  ButtonClassnames,
} from '@vacano/ui'
```

## Types

### ButtonProps

```ts
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  char?: string
  children?: string
  classnames?: ButtonClassnames
  'data-test-id'?: string
  fullWidth?: boolean
  icon?: ReactNode
  loading?: boolean
  variant?: ButtonVariant
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `variant` | `ButtonVariant` | No | `'primary'` | Visual style variant |
| `icon` | `ReactNode` | No | — | Icon element to display before text |
| `loading` | `boolean` | No | `false` | Shows loading indicator and disables button |
| `disabled` | `boolean` | No | `false` | Disables the button |
| `fullWidth` | `boolean` | No | `false` | Makes button span full container width |
| `char` | `string` | No | — | Keyboard shortcut hint character |
| `children` | `string` | No | — | Button text content |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `ButtonClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |
| `onClick` | `MouseEventHandler` | No | — | Click event handler |
| `type` | `'button' \| 'submit' \| 'reset'` | No | `'button'` | HTML button type |

Plus all standard `ButtonHTMLAttributes<HTMLButtonElement>` props.

---

### ButtonVariant

```ts
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
```

Visual style variants for the button.

| Value | Description |
|-------|-------------|
| `'primary'` | Main action button with solid background |
| `'secondary'` | Secondary action with outlined style |
| `'ghost'` | Minimal button with transparent background |
| `'danger'` | Destructive action with red/danger colors |

**Usage:**

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Delete</Button>
```

---

### ButtonClassnames

```ts
type ButtonClassnames = {
  container?: string
  content?: string
  icon?: string
  text?: string
  char?: string
  loader?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Root button element | `vacano_button_container` |
| `content` | Content wrapper | `vacano_button_content` |
| `icon` | Icon wrapper | `vacano_button_icon` |
| `text` | Text element | `vacano_button_text` |
| `char` | Keyboard shortcut hint | `vacano_button_char` |
| `loader` | Loading indicator wrapper | `vacano_button_loader` |

**Usage:**

```tsx
<Button
  classnames={{
    container: 'my-button',
    text: 'my-button-text',
  }}
>
  Custom Styled
</Button>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_button_container` | Root `<button>` element |
| `vacano_button_content` | Inner content wrapper |
| `vacano_button_icon` | Icon wrapper span |
| `vacano_button_text` | Text content span |
| `vacano_button_char` | Keyboard shortcut hint span |
| `vacano_button_loader` | Loading indicator wrapper |

## Examples

### With Type Annotations

```tsx
import { Button } from '@vacano/ui'
import type { ButtonProps, ButtonVariant } from '@vacano/ui'

const MyButton = (props: ButtonProps) => {
  return <Button {...props} />
}

const variant: ButtonVariant = 'primary'
```

### Icon Button

```tsx
import { Button } from '@vacano/ui'
import { Plus } from '@vacano/ui/icons'
import type { ReactNode } from 'react'

const icon: ReactNode = <Plus size={18} />

<Button icon={icon}>Add Item</Button>
```

### Custom Classnames

```tsx
import type { ButtonClassnames } from '@vacano/ui'

const customClasses: ButtonClassnames = {
  container: 'btn btn-custom',
  text: 'btn-text',
}

<Button classnames={customClasses}>Styled</Button>
```

## See Also

- [Button Component](/components/atoms/button) — Usage guide and examples
- [Icons](/guide/icons) — Using icons with buttons
