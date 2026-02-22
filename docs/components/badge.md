# Badge

Small status indicator attached to another element. Displays a count, dot, or custom content.

*Also known as: notification badge, counter, indicator, dot*

<a href="/storybook/?path=/story/components-badge--playground" target="_blank">View in Storybook</a>

## When to use

- Showing unread notification counts on icons or avatars.
- Indicating online/offline status with a dot badge.
- Highlighting new or updated items.

## Import

```tsx
import { Badge } from '@vacano/ui'
```

## Usage

```tsx
<Badge content={5}>
  <Avatar name="John" />
</Badge>
```

## Colors

```tsx
<Badge content={5} color="default">...</Badge>
<Badge content={3} color="success">...</Badge>
<Badge content={1} color="warning">...</Badge>
<Badge content={9} color="danger">...</Badge>
```

## Variants

```tsx
<Badge content={5} variant="solid">...</Badge>
<Badge content={5} variant="flat">...</Badge>
<Badge content={5} variant="bordered">...</Badge>
```

## Sizes

```tsx
<Badge content={5} size="sm">...</Badge>
<Badge content={5} size="md">...</Badge>
<Badge content={5} size="lg">...</Badge>
```

## Placement

```tsx
<Badge content={5} placement="top-right">...</Badge>
<Badge content={5} placement="top-left">...</Badge>
<Badge content={5} placement="bottom-right">...</Badge>
<Badge content={5} placement="bottom-left">...</Badge>
```

## Dot

Show a small dot indicator without content.

```tsx
<Badge dot>
  <Avatar name="John" />
</Badge>
```

## Shape

Controls badge position offset relative to the child element's shape.

```tsx
<Badge content={5} shape="circle">...</Badge>
<Badge content={5} shape="rectangle">...</Badge>
```

## Visibility

```tsx
<Badge content={5} invisible={false}>...</Badge>
<Badge content={5} invisible={true}>...</Badge>
```

## Outline

```tsx
<Badge content={5} showOutline>...</Badge>
<Badge content={5} showOutline={false}>...</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Element to attach the badge to |
| `content` | `ReactNode` | - | Badge content (number, text, etc.). Ignored when `dot` is true |
| `color` | `'default' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant |
| `variant` | `'solid' \| 'flat' \| 'bordered'` | `'solid'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `placement` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Badge position |
| `shape` | `'circle' \| 'rectangle'` | `'rectangle'` | Child element shape (affects offset) |
| `dot` | `boolean` | `false` | Show dot instead of content |
| `invisible` | `boolean` | `false` | Hide the badge |
| `showOutline` | `boolean` | `true` | Show white outline around badge |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `BadgeClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `badge` | The badge indicator element |

## Related

- Avatar - Commonly used as badge child
- [Chip](/components/chip) - Inline label/tag component
