# Stat

Displays a single statistic with a bold value and a label. Place multiple Stat components in a row for stat groups.

*Also known as: metric, counter, figure, key figure, KPI*

<a href="/storybook/?path=/story/components-stat--playground" target="_blank">View in Storybook</a>

## When to use

- Showing numeric metrics like follower counts, order totals, or completion rates.
- Displaying key-value pairs in profile cards or dashboards.
- Building stat rows in card footers.

## Import

```tsx
import { Stat } from '@vacano/ui'
```

## Usage

```tsx
<Stat value="97.1K" label="Followers" />
```

## Group of stats

```tsx
<div style={{ display: 'flex', gap: 16 }}>
  <Stat value="4" label="Following" />
  <Stat value="97.1K" label="Followers" />
</div>
```

## Various examples

```tsx
<Stat value="$12,450" label="Revenue" />
<Stat value="1,024" label="Orders" />
<Stat value="89%" label="Completion" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `ReactNode` | **required** | The stat value (bold, dark text) |
| `label` | `string` | **required** | Description label (gray text) |
| `ref` | `Ref<HTMLSpanElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `StatClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `value` | The bold value element |
| `label` | The gray label element |

## Related

- [Card](/components/card) - Often used in CardFooter
- [Overline](/components/overline) - Category label component
