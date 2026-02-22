# Skeleton

Placeholder loading indicator that mimics the shape of content before it loads. Supports pulse and wave animations.

*Also known as: placeholder, shimmer, loading placeholder, ghost element*

<a href="/storybook/?path=/story/components-skeleton--playground" target="_blank">View in Storybook</a>

## When to use

- Showing loading state while content is being fetched.
- Preserving layout and preventing content shift during loading.
- Building skeleton screens for cards, lists, and profiles.

## Import

```tsx
import { Skeleton } from '@vacano/ui'
```

## Usage

```tsx
<Skeleton width={200} height={16} />
```

## Animations

```tsx
<Skeleton animation="pulse" height={16} />
<Skeleton animation="wave" height={16} />
<Skeleton animation="none" height={16} />
```

## Circle

For avatar or icon placeholders.

```tsx
<Skeleton circle height={48} />
```

## Radius

```tsx
<Skeleton radius="none" width={80} height={32} />
<Skeleton radius="sm" width={80} height={32} />
<Skeleton radius="md" width={80} height={32} />
<Skeleton radius="lg" width={80} height={32} />
<Skeleton radius="full" width={80} height={32} />
```

## Text block

```tsx
<Skeleton height={16} />
<Skeleton height={16} />
<Skeleton height={16} width="80%" />
```

## User skeleton

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
  <Skeleton circle height={40} />
  <div>
    <Skeleton width={120} height={14} />
    <Skeleton width={80} height={12} />
  </div>
</div>
```

## Card skeleton

```tsx
<Card shadow="sm">
  <CardHeader>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Skeleton circle height={40} animation="wave" />
      <div>
        <Skeleton width={120} height={14} animation="wave" />
        <Skeleton width={80} height={12} animation="wave" />
      </div>
    </div>
  </CardHeader>
  <CardBody>
    <Skeleton height={14} animation="wave" />
    <Skeleton height={14} animation="wave" />
    <Skeleton height={14} width="60%" animation="wave" />
  </CardBody>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number \| string` | `'100%'` | Skeleton width |
| `height` | `number \| string` | `16` | Skeleton height |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation type |
| `circle` | `boolean` | `false` | Render as circle (width = height) |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name |

## Related

- [Card](/components/card) - Build card skeletons
- [Spinner](/components/spinner) - Alternative loading indicator
- [User](/components/user) - Build user skeleton placeholders
