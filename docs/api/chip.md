# Chip API

TypeScript types for the Chip component.

## Import

```tsx
import { Chip } from '@vacano/ui'
import type {
  ChipProps,
  ChipStatus,
  ChipClassnames,
} from '@vacano/ui'
```

## Types

### ChipProps

```ts
type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  classnames?: ChipClassnames
  'data-test-id'?: string
  fullWidth?: boolean
  status?: ChipStatus
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `status` | `ChipStatus` | No | `'neutral'` | Status variant for styling |
| `fullWidth` | `boolean` | No | `false` | Makes chip span full container width |
| `children` | `ReactNode` | No | — | Chip content |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `ChipClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

---

### ChipStatus

```ts
type ChipStatus = 'neutral' | 'success' | 'warning' | 'error'
```

Status variants for visual styling.

| Value | Description |
|-------|-------------|
| `'neutral'` | Default neutral/gray styling |
| `'success'` | Success state with green styling |
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<Chip status="neutral">Draft</Chip>
<Chip status="success">Active</Chip>
<Chip status="warning">Pending</Chip>
<Chip status="error">Failed</Chip>
```

---

### ChipClassnames

```ts
type ChipClassnames = {
  container?: string
  text?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_chip_container` |
| `text` | Text element | `vacano_chip_text` |

**Usage:**

```tsx
<Chip
  classnames={{
    container: 'my-chip',
    text: 'my-chip-text',
  }}
>
  Custom Styled
</Chip>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_chip_container` | Outer container span |
| `vacano_chip_text` | Text content span |

## Examples

### With Type Annotations

```tsx
import { Chip } from '@vacano/ui'
import type { ChipProps, ChipStatus } from '@vacano/ui'

const MyChip = (props: ChipProps) => {
  return <Chip {...props} />
}

const status: ChipStatus = 'success'
```

### Status Badge

```tsx
import type { ChipStatus } from '@vacano/ui'

type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled'

const statusMap: Record<OrderStatus, { label: string; status: ChipStatus }> = {
  pending: { label: 'Pending', status: 'warning' },
  processing: { label: 'Processing', status: 'neutral' },
  completed: { label: 'Completed', status: 'success' },
  cancelled: { label: 'Cancelled', status: 'error' },
}

function OrderStatusChip({ status }: { status: OrderStatus }) {
  const { label, status: chipStatus } = statusMap[status]
  return <Chip status={chipStatus}>{label}</Chip>
}
```

## See Also

- [Chip Component](/components/atoms/chip) — Usage guide and examples
