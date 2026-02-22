# Spinner

Loading indicator component with multiple sizes. Renders a CSS-animated spinner with `role="status"` for accessibility.

*Also known as: loading indicator, loader, activity indicator, busy indicator*

<a href="/storybook/?path=/story/components-spinner--playground" target="_blank">View in Storybook</a>

## When to use

- Indicating loading or processing state. For percentage-based progress, use Progress.
- For Button loading states, use Button's `loading` prop.

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
| `aria-label` | `string` | `'Loading'` | Accessibility label for screen readers |
| `className` | `string` | - | CSS class name for the root element |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root element |
| `data-test-id` | `string` | - | Test identifier attribute |

The component also accepts all standard `HTMLDivElement` attributes (except `className` and `children` which are overridden/excluded by the component).

::: info
The Spinner component has an empty `classnames` type (`Record<string, never>`) and does not expose any sub-element class name slots.
:::

## Related

- [Progress](/components/progress) - Percentage-based progress bar
- [SaveProgress](/components/save-progress) - Background save indicator
- [Button](/components/button) - Button with built-in loading state
