# StatusCard

Metric display card with value, label, and trend indicator.

<a href="https://ui.vacano.io/components/?path=/docs/molecules-statuscard--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { StatusCard } from '@vacano/ui'
```

## Usage

```tsx
<StatusCard
  label="Total Users"
  value="12,345"
/>
```

## With Trend

```tsx
<StatusCard
  label="Revenue"
  value="$45,231"
  trend="+12.5%"
  trendVariant="positive"
/>

<StatusCard
  label="Bounce Rate"
  value="24.3%"
  trend="-5.2%"
  trendVariant="negative"
/>

<StatusCard
  label="Active Sessions"
  value="1,234"
  trend="0%"
  trendVariant="neutral"
/>
```

## With Icon

```tsx
import { IconUsers, IconDollarSign } from '@vacano/ui/icons'

<StatusCard
  label="Users"
  value="1,234"
  icon={<IconUsers size={24} />}
/>

<StatusCard
  label="Revenue"
  value="$12,345"
  icon={<IconDollarSign size={24} />}
  trend="+8%"
  trendVariant="positive"
/>
```

## With Border & Shadow

```tsx
<StatusCard
  border
  shadow
  label="Orders"
  value="567"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Metric label |
| `value` | `string` | **required** | Metric value |
| `trend` | `string` | - | Trend indicator text |
| `trendVariant` | `'positive' \| 'negative' \| 'neutral'` | - | Trend color |
| `icon` | `ReactNode` | - | Icon element |
| `border` | `boolean` | `false` | Show border |
| `shadow` | `boolean` | `false` | Show shadow |
| `className` | `string` | - | CSS class name |
| `classnames` | `StatusCardClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | Label text |
| `value` | Value text |
| `trend` | Trend indicator |
