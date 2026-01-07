# DatePicker

Date selection component with calendar dropdown, supporting date, month, and year modes.

<a href="/storybook/?path=/docs/molecules-datepicker--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { DatePicker } from '@vacano/ui'
```

## Usage

```tsx
const [date, setDate] = useState<Date | null>(null)

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select date"
/>
```

## With Label

```tsx
<DatePicker
  label="Birth Date"
  value={date}
  onChange={setDate}
/>
```

## Selection Modes

```tsx
// Date selection (default)
<DatePicker mode="date" value={date} onChange={setDate} />

// Month selection
<DatePicker mode="month" value={date} onChange={setDate} />

// Year selection
<DatePicker mode="year" value={date} onChange={setDate} />
```

## Display Format

Uses Go-style date formatting:

```tsx
// Day.Month.Year
<DatePicker displayFormat="02.01.2006" value={date} onChange={setDate} />

// Month Year
<DatePicker displayFormat="January 2006" value={date} onChange={setDate} />

// Year-Month-Day
<DatePicker displayFormat="2006-01-02" value={date} onChange={setDate} />
```

## Locale

```tsx
<DatePicker locale="ru" value={date} onChange={setDate} />
<DatePicker locale="de" value={date} onChange={setDate} />
<DatePicker locale="en-US" value={date} onChange={setDate} />
```

## Week Start

```tsx
// Sunday start
<DatePicker weekStartsOn={0} value={date} onChange={setDate} />

// Monday start
<DatePicker weekStartsOn={1} value={date} onChange={setDate} />
```

## Min/Max Date

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
/>
```

## Variants & Sizes

```tsx
<DatePicker variant="normal" value={date} onChange={setDate} />
<DatePicker variant="error" value={date} onChange={setDate} />

<DatePicker size="default" value={date} onChange={setDate} />
<DatePicker size="compact" value={date} onChange={setDate} />
```

## Controlled Open State

```tsx
const [open, setOpen] = useState(false)

<DatePicker
  value={date}
  onChange={setDate}
  open={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| null` | - | Selected date |
| `onChange` | `(date: Date \| null) => void` | - | Change handler |
| `mode` | `'date' \| 'month' \| 'year'` | `'date'` | Selection mode |
| `displayFormat` | `string` | - | Go-style date format |
| `placeholder` | `string` | - | Placeholder text |
| `locale` | `string` | - | Locale for names |
| `weekStartsOn` | `0 \| 1` | `0` | First day of week |
| `minDate` | `Date` | - | Minimum date |
| `maxDate` | `Date` | - | Maximum date |
| `label` | `string` | - | Label text |
| `size` | `'compact' \| 'default'` | `'default'` | Input size |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable picker |
| `fullWidth` | `boolean` | `false` | Full width |
| `open` | `boolean` | - | Controlled open state |
| `onOpen` | `() => void` | - | Open callback |
| `onClose` | `() => void` | - | Close callback |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target |
| `className` | `string` | - | CSS class name |
| `classnames` | `DatePickerClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `trigger` | Trigger input |
| `calendar` | Calendar container |
| `header` | Calendar header |
| `grid` | Days/months/years grid |
| `cell` | Individual cell |
