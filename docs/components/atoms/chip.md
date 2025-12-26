# Chip

A compact element for displaying status, labels, or tags.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-chip" target="_blank">View in Storybook</a>

## Import

```tsx
import { Chip } from '@vacano/ui'
```

## Basic Usage

```tsx
<Chip>Default</Chip>
```

## Status Variants

Chip supports four status variants: `neutral`, `success`, `warning`, and `error`.

```tsx
<Chip status="neutral">Neutral</Chip>
<Chip status="success">Success</Chip>
<Chip status="warning">Warning</Chip>
<Chip status="error">Error</Chip>
```

| Status | Use case |
|--------|----------|
| `neutral` | Default, informational |
| `success` | Positive states, completed, active |
| `warning` | Attention needed, pending |
| `error` | Error states, critical, failed |

## Full Width

By default, Chip sizes to its content with a max-width. Use `fullWidth` to span the full container width:

```tsx
<Chip fullWidth>Full width chip</Chip>
```

## Text Overflow

Long text is automatically truncated with ellipsis:

```tsx
<Chip>This is a very long chip text that will be truncated</Chip>
```

## Props

### ChipProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'neutral' \| 'success' \| 'warning' \| 'error'` | `'neutral'` | Status variant |
| `fullWidth` | `boolean` | `false` | Makes chip full width |
| `children` | `ReactNode` | — | Chip content |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `ChipClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `HTMLAttributes<HTMLSpanElement>` props.

### ChipStatus

```ts
type ChipStatus = 'neutral' | 'success' | 'warning' | 'error'
```

### ChipClassnames

```ts
type ChipClassnames = {
  container?: string  // Outer container
  text?: string       // Text element
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_chip_container` | Outer container |
| `vacano_chip_text` | Text element |

## Examples

### Status Indicators

```tsx
function OrderStatus({ status }: { status: string }) {
  const statusMap = {
    pending: { label: 'Pending', status: 'warning' },
    processing: { label: 'Processing', status: 'neutral' },
    completed: { label: 'Completed', status: 'success' },
    cancelled: { label: 'Cancelled', status: 'error' },
  }

  const { label, status: chipStatus } = statusMap[status]

  return <Chip status={chipStatus}>{label}</Chip>
}
```

### Tags List

```tsx
function TagsList({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {tags.map(tag => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  )
}
```

### User Role Badge

```tsx
function UserRole({ role }: { role: 'admin' | 'user' | 'guest' }) {
  const roleConfig = {
    admin: { label: 'Admin', status: 'error' },
    user: { label: 'User', status: 'success' },
    guest: { label: 'Guest', status: 'neutral' },
  }

  const { label, status } = roleConfig[role]

  return <Chip status={status}>{label}</Chip>
}
```

### In a Table

```tsx
function UsersTable({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <Chip status={user.active ? 'success' : 'neutral'}>
                {user.active ? 'Active' : 'Inactive'}
              </Chip>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```
