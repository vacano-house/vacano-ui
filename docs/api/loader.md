# Loader API

TypeScript types for the Loader component.

## Import

```tsx
import { Loader } from '@vacano/ui'
import type {
  LoaderProps,
  LoaderClassnames,
} from '@vacano/ui'
```

## Types

### LoaderProps

```ts
type LoaderProps = HTMLAttributes<HTMLSpanElement> & {
  'aria-label'?: string
  'data-test-id'?: string
  classnames?: LoaderClassnames
  size?: number
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `size` | `number` | No | `6` | Dot diameter in pixels |
| `aria-label` | `string` | No | `'Loading'` | Accessible label for screen readers |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `LoaderClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

---

### LoaderClassnames

```ts
type LoaderClassnames = {
  container?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Loader container | `vacano_loader_container` |

**Usage:**

```tsx
<Loader
  classnames={{
    container: 'my-loader',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_loader_container` | Loader container span |

## Examples

### With Type Annotations

```tsx
import { Loader } from '@vacano/ui'
import type { LoaderProps } from '@vacano/ui'

const MyLoader = (props: LoaderProps) => {
  return <Loader {...props} />
}
```

### Different Sizes

```tsx
<Loader size={4} />   // Small
<Loader size={6} />   // Default
<Loader size={8} />   // Medium
<Loader size={10} />  // Large
```

### Localized Label

```tsx
<Loader aria-label="Загрузка" />
<Loader aria-label="Chargement" />
```

## See Also

- [Loader Component](/components/atoms/loader) — Usage guide and examples
- [Spinner](/api/spinner) — Alternative circular spinner
