# Dropdown API

TypeScript types for the Dropdown component.

## Import

```tsx
import { Dropdown } from '@vacano/ui'
import type {
  DropdownProps,
  DropdownPlacement,
  DropdownAlign,
  DropdownClassnames,
} from '@vacano/ui'
```

## Types

### DropdownProps

```ts
type DropdownProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  trigger: ReactNode
  children: ReactNode
  placement?: DropdownPlacement
  align?: DropdownAlign
  offset?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
  portalRenderNode?: HTMLElement | null
  classnames?: DropdownClassnames
  fullWidth?: boolean
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `trigger` | `ReactNode` | **Yes** | — | Element that triggers the dropdown |
| `children` | `ReactNode` | **Yes** | — | Dropdown content |
| `placement` | `DropdownPlacement` | No | `'bottom'` | Vertical position relative to trigger |
| `align` | `DropdownAlign` | No | `'start'` | Horizontal alignment relative to trigger |
| `offset` | `number` | No | `4` | Distance from trigger in pixels |
| `open` | `boolean` | No | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | No | — | Callback when open state changes |
| `portalRenderNode` | `HTMLElement \| null` | No | — | Portal target for dropdown content |
| `fullWidth` | `boolean` | No | `false` | Makes dropdown match trigger width |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `DropdownClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLDivElement>` props (except `children`).

---

### DropdownPlacement

```ts
type DropdownPlacement = 'top' | 'bottom'
```

Vertical position of dropdown relative to trigger.

| Value | Description |
|-------|-------------|
| `'top'` | Opens above the trigger |
| `'bottom'` | Opens below the trigger (default) |

**Usage:**

```tsx
<Dropdown trigger={...} placement="top">...</Dropdown>
<Dropdown trigger={...} placement="bottom">...</Dropdown>
```

---

### DropdownAlign

```ts
type DropdownAlign = 'start' | 'end'
```

Horizontal alignment of dropdown relative to trigger.

| Value | Description |
|-------|-------------|
| `'start'` | Aligns to the left edge (LTR) |
| `'end'` | Aligns to the right edge (LTR) |

**Usage:**

```tsx
<Dropdown trigger={...} align="start">...</Dropdown>
<Dropdown trigger={...} align="end">...</Dropdown>
```

---

### DropdownClassnames

```ts
type DropdownClassnames = {
  container?: string
  trigger?: string
  content?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_dropdown_container` |
| `trigger` | Trigger wrapper | `vacano_dropdown_trigger` |
| `content` | Content wrapper | `vacano_dropdown_content` |

**Usage:**

```tsx
<Dropdown
  trigger={...}
  classnames={{
    container: 'my-dropdown',
    content: 'my-dropdown-content',
  }}
>
  ...
</Dropdown>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_dropdown_container` | Outer container div |
| `vacano_dropdown_trigger` | Trigger wrapper div |
| `vacano_dropdown_content` | Content wrapper div |

## Examples

### With Type Annotations

```tsx
import { Dropdown } from '@vacano/ui'
import type { DropdownProps, DropdownPlacement } from '@vacano/ui'

const MyDropdown = (props: DropdownProps) => {
  return <Dropdown {...props} />
}

const placement: DropdownPlacement = 'bottom'
```

### Basic Usage

```tsx
import { Dropdown } from '@vacano/ui'
import { Button } from '@vacano/ui'

function MenuDropdown() {
  return (
    <Dropdown
      trigger={<Button>Open Menu</Button>}
    >
      <div style={{ padding: '8px' }}>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>
    </Dropdown>
  )
}
```

### Controlled State

```tsx
import { useState } from 'react'
import { Dropdown, Button } from '@vacano/ui'

function ControlledDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <Dropdown
      trigger={<Button>Toggle</Button>}
      open={open}
      onOpenChange={setOpen}
    >
      <div style={{ padding: '8px' }}>
        Controlled content
        <Button onClick={() => setOpen(false)}>Close</Button>
      </div>
    </Dropdown>
  )
}
```

### With Portal

```tsx
<Dropdown
  trigger={<Button>Menu</Button>}
  portalRenderNode={document.body}
>
  <div>Portal content escapes overflow:hidden</div>
</Dropdown>
```

## See Also

- [Dropdown Component](/components/atoms/dropdown) — Usage guide and examples
- [Select](/api/select) — Select component with dropdown
