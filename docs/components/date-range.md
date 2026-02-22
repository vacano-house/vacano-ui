# DateRange

Displays a formatted date range with start and end dates. Shows "Present Time" when no end date is provided.

*Also known as: period, time range, duration, date span*

<a href="/storybook/?path=/story/components-daterange--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying employment or project duration on profiles and resumes.
- Showing event date ranges.
- Indicating active periods with "Present Time" for ongoing items.

## Import

```tsx
import { DateRange } from '@vacano/ui'
```

## Usage (ongoing)

When `to` is omitted, displays "Present Time" as the end date.

```tsx
<DateRange from={new Date(2021, 9)} />
// Renders: # 2021, October — Present Time
```

## With end date

```tsx
<DateRange from={new Date(2019, 6)} to={new Date(2021, 8)} />
// Renders: # 2019, July — 2021, September
```

## Custom present label

```tsx
<DateRange from={new Date(2023, 2)} presentLabel="Now" />
// Renders: # 2023, March — Now
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `from` | `Date` | **required** | Start date |
| `to` | `Date` | - | End date (omit for "Present Time") |
| `presentLabel` | `string` | `'Present Time'` | Custom label when `to` is not set |
| `ref` | `Ref<HTMLSpanElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `DateRangeClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `hash` | The `#` symbol |
| `from` | The start date text |
| `separator` | The em dash separator |
| `to` | The end date or present label text |

## Related

- [Overline](/components/overline) - Category label, often paired with DateRange
- [Heading](/components/heading) - Heading component for titles
