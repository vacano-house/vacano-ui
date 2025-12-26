# Spinner API

TypeScript types for the Spinner component.

## Import

```tsx
import { Spinner } from '@vacano/ui'
import type {
  SpinnerProps,
  SpinnerClassnames,
} from '@vacano/ui'
```

## Types

### SpinnerProps

```ts
type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  'aria-label'?: string
  classnames?: SpinnerClassnames
  'data-test-id'?: string
  size?: number
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `size` | `number` | No | `24` | Spinner diameter in pixels |
| `aria-label` | `string` | No | `'Loading'` | Accessible label for screen readers |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `SpinnerClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

---

### SpinnerClassnames

```ts
type SpinnerClassnames = {
  container?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Spinner container | `vacano_spinner_container` |

**Usage:**

```tsx
<Spinner
  classnames={{
    container: 'my-spinner',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_spinner_container` | Spinner container span |

## Examples

### With Type Annotations

```tsx
import { Spinner } from '@vacano/ui'
import type { SpinnerProps } from '@vacano/ui'

const MySpinner = (props: SpinnerProps) => {
  return <Spinner {...props} />
}
```

### Different Sizes

```tsx
<Spinner size={16} />  // Small
<Spinner size={24} />  // Default
<Spinner size={32} />  // Medium
<Spinner size={48} />  // Large
```

### Localized Label

```tsx
<Spinner aria-label="Загрузка" />
<Spinner aria-label="Chargement" />
```

## See Also

- [Spinner Component](/components/atoms/spinner) — Usage guide and examples
- [Loader](/api/loader) — Alternative dots loading indicator
