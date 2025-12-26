# Spinner

A circular loading spinner for indicating loading states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-spinner" target="_blank">View in Storybook</a>

## Import

```tsx
import { Spinner } from '@vacano/ui'
```

## Basic Usage

```tsx
<Spinner />
```

## Sizes

Customize the size with the `size` prop (in pixels):

```tsx
<Spinner size={16} />  // Small
<Spinner size={24} />  // Default
<Spinner size={32} />  // Medium
<Spinner size={48} />  // Large
```

## Color

Spinner inherits color from its parent via `currentColor`:

```tsx
// Inherits from parent
<div style={{ color: 'blue' }}>
  <Spinner size={24} />
</div>

// Custom color via wrapper
<div style={{ color: '#0050c8' }}>
  <Spinner size={24} />
</div>
```

## Accessibility

Spinner includes `role="status"` and a default `aria-label`. Customize the label for localization:

```tsx
// Default
<Spinner />  // aria-label="Loading"

// Custom label
<Spinner aria-label="Загрузка" />
```

## Props

### SpinnerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Spinner diameter in pixels |
| `aria-label` | `string` | `'Loading'` | Accessible label |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `SpinnerClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

### SpinnerClassnames

```ts
type SpinnerClassnames = {
  container?: string  // Spinner container
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_spinner_container` | Spinner container |

## Examples

### Button Loading State

Spinner is used internally by the Button component for icon-only loading states:

```tsx
<Button loading icon={<Save size={18} />} />
```

### Loading Overlay

```tsx
function LoadingOverlay({ loading, children }) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
        }}>
          <Spinner size={32} />
        </div>
      )}
    </div>
  )
}
```

### Inline Loading

```tsx
function InlineLoading() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <Spinner size={16} />
      Loading...
    </span>
  )
}
```

### Page Loading

```tsx
function PageLoading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Spinner size={48} />
    </div>
  )
}
```

### Conditional Rendering

```tsx
function DataList({ data, loading }) {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '32px' }}>
        <Spinner size={32} />
      </div>
    )
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

## Related Components

- [Loader](/components/atoms/loader) - Animated dots loading indicator
- [Button](/components/atoms/button) - Uses Spinner for icon-only loading state
