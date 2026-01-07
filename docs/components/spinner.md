# Spinner

Loading indicator component with multiple sizes.

<a href="https://ui.vacano.io/components/?path=/docs/atoms-spinner--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Spinner } from '@vacano/ui'
```

## Usage

```tsx
<Spinner />
```

## Sizes

```tsx
<Spinner size="xs" />  {/* Extra small */}
<Spinner size="sm" />  {/* Small */}
<Spinner size="md" />  {/* Medium (default) */}
<Spinner size="lg" />  {/* Large */}
```

## Accessibility

Add a label for screen readers:

```tsx
<Spinner aria-label="Loading content" />
```

## In Context

```tsx
function LoadingButton() {
  const [loading, setLoading] = useState(false)

  return (
    <Button onClick={() => setLoading(true)} disabled={loading}>
      {loading ? <Spinner size="xs" /> : 'Submit'}
    </Button>
  )
}
```

## Full Page Loading

```tsx
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <Spinner size="lg" aria-label="Loading page" />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `aria-label` | `string` | - | Accessibility label |
| `className` | `string` | - | CSS class name |
