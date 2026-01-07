# Card

Container component with optional border and shadow.

<a href="/storybook/?path=/docs/atoms-card--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Card } from '@vacano/ui'
```

## Usage

```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

## With Border

```tsx
<Card border>
  <p>Card with border</p>
</Card>
```

## With Shadow

```tsx
<Card shadow>
  <p>Card with shadow</p>
</Card>
```

## Combined

```tsx
<Card border shadow>
  <p>Card with border and shadow</p>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `border` | `boolean` | `false` | Show border |
| `shadow` | `boolean` | `false` | Show shadow |
| `className` | `string` | - | CSS class name |

All standard HTML div attributes are also supported.
