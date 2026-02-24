# DateRange

Displays a formatted date range with start and end dates. Shows "Present Time" when no end date is provided. Supports localization via the `locale` prop.

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
// Renders: # October 2021 — Present Time
```

## With end date

```tsx
<DateRange from={new Date(2019, 6)} to={new Date(2021, 8)} />
// Renders: # July 2019 — September 2021
```

## Localization

Use the `locale` prop to display month names in the desired language. Accepts any valid [BCP 47 language tag](https://www.ietf.org/rfc/bcp/bcp47.txt). Formatting is handled by `Intl.DateTimeFormat`.

```tsx
<DateRange from={new Date(2023, 2)} to={new Date(2025, 11)} locale="ru" />
// Renders: # март 2023 г. — декабрь 2025 г.

<DateRange from={new Date(2023, 2)} to={new Date(2025, 11)} locale="de" />
// Renders: # März 2023 — Dezember 2025
```

## Custom present label

When using `locale`, remember to localize `presentLabel` as well:

```tsx
<DateRange from={new Date(2023, 2)} locale="ru" presentLabel="По настоящее время" />
// Renders: # март 2023 г. — По настоящее время
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `from` | `Date` | **required** | Start date |
| `to` | `Date` | - | End date. When omitted, `presentLabel` is shown instead. |
| `locale` | `string` | `'en'` | BCP 47 language tag for month name localization (e.g. `'ru'`, `'de'`, `'fr'`, `'ja'`). Uses `Intl.DateTimeFormat` internally. |
| `presentLabel` | `string` | `'Present Time'` | Label displayed when `to` is not set. Should be localized manually when using a non-English `locale`. |
| `ref` | `Ref<HTMLSpanElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `DateRangeClassNames` | - | Custom class names for sub-elements |
| `data-test-id` | `string` | - | Test identifier attribute |

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
- [DatePicker](/components/date-picker) - Interactive date selection
