# Chip

Small label component with optional delete action.

*Also known as: tag, badge, label, pill*

<a href="/storybook/?path=/story/components-chip--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying small labels, tags, or status indicators. Use `deletable` for removable chips.
- For inputting tags, use Tags component.

## Import

```tsx
import { Chip } from '@vacano/ui'
```

## Usage

```tsx
<Chip>Default Chip</Chip>
```

## Variants

```tsx
<Chip variant="gray">Gray</Chip>
<Chip variant="red">Red</Chip>
<Chip variant="blue">Blue</Chip>
<Chip variant="black">Black</Chip>
```

## Deletable

```tsx
<Chip deletable onDelete={() => console.log('deleted')}>
  Removable
</Chip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Chip content |
| `variant` | `'gray' \| 'red' \| 'blue' \| 'black'` | `'gray'` | Color variant |
| `deletable` | `boolean` | `false` | Show delete button |
| `onDelete` | `() => void` | - | Delete callback |
| `className` | `string` | - | CSS class name |
| `classnames` | `ChipClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `delete` | Delete button |
| `label` | Label text |

## Related

- [Tags](/components/tags) - Tag input with autocomplete
