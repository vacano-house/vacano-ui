# Loader

An animated dots loading indicator for subtle loading states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-loader" target="_blank">View in Storybook</a>

## Import

```tsx
import { Loader } from '@vacano/ui'
```

## Basic Usage

```tsx
<Loader />
```

## Sizes

Customize the size with the `size` prop (dot diameter in pixels):

```tsx
<Loader size={4} />   // Small
<Loader size={6} />   // Default
<Loader size={8} />   // Medium
<Loader size={10} />  // Large
```

## Color

Loader inherits color from its parent via `currentColor`:

```tsx
// Inherits from parent
<div style={{ color: 'blue' }}>
  <Loader size={6} />
</div>

// Different colors
<div style={{ color: '#0050c8' }}><Loader /></div>
<div style={{ color: '#009650' }}><Loader /></div>
<div style={{ color: '#c83232' }}><Loader /></div>
```

## Accessibility

Loader includes `role="status"` and a default `aria-label`. Customize the label for localization:

```tsx
// Default
<Loader />  // aria-label="Loading"

// Custom label
<Loader aria-label="Загрузка" />
```

## Props

### LoaderProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `6` | Dot diameter in pixels |
| `aria-label` | `string` | `'Loading'` | Accessible label |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `LoaderClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

### LoaderClassnames

```ts
type LoaderClassnames = {
  container?: string  // Loader container
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_loader_container` | Loader container |

## Examples

### Button Loading State

Loader is used internally by the Button component for text button loading states:

```tsx
<Button loading>Saving...</Button>
```

### Inline Text Loading

```tsx
function SavingIndicator() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      Saving
      <Loader size={4} />
    </span>
  )
}
```

### Chat Typing Indicator

```tsx
function TypingIndicator() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      background: '#f0f0f0',
      borderRadius: '16px',
    }}>
      <span>Someone is typing</span>
      <Loader size={4} />
    </div>
  )
}
```

### On Dark Background

```tsx
function DarkLoader() {
  return (
    <div style={{
      background: '#1a1a1a',
      color: '#ffffff',
      padding: '32px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Loader size={8} />
    </div>
  )
}
```

### Centered Loading

```tsx
function CenteredLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
    }}>
      <Loader size={8} />
    </div>
  )
}
```

## Spinner vs Loader

| Component | Style | Best for |
|-----------|-------|----------|
| [Spinner](/components/atoms/spinner) | Circular rotation | Icon-only buttons, overlays, full-page loading |
| Loader | Animated dots | Inline text, chat typing, subtle indicators |

## Related Components

- [Spinner](/components/atoms/spinner) - Circular loading spinner
- [Button](/components/atoms/button) - Uses Loader for text button loading state
