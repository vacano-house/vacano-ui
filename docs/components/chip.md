# Chip

Small label component with optional icon and delete action.

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

## With icon

Render a leading icon inside the chip.

```tsx
<Chip icon={<StarIcon />}>Starred</Chip>
```

## Deletable

```tsx
<Chip deletable onDelete={() => console.log('deleted')}>
  Removable
</Chip>
```

## With icon and deletable

```tsx
<Chip icon={<TagIcon />} deletable onDelete={() => console.log('deleted')}>
  Tag
</Chip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Chip content |
| `variant` | `'gray' \| 'red' \| 'blue' \| 'black'` | `'gray'` | Color variant |
| `icon` | `ReactNode` | - | Leading icon element |
| `deletable` | `boolean` | `false` | Show delete button |
| `onDelete` | `() => void` | - | Delete callback |
| `ref` | `Ref<HTMLSpanElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `ChipClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `icon` | The leading icon wrapper |
| `delete` | Delete button |
| `label` | Label text |

## Related

- [Tags](/components/tags) - Tag input with autocomplete
