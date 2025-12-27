# Dropdown

A flexible dropdown component for building menus, popovers, and floating content.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-dropdown" target="_blank">View in Storybook</a>

## Import

```tsx
import { Dropdown } from '@vacano/ui'
```

## Basic Usage

```tsx
<Dropdown trigger={<Button>Open Menu</Button>}>
  <div style={{ padding: '8px' }}>
    Dropdown content
  </div>
</Dropdown>
```

## Placement

Control where the dropdown appears relative to the trigger:

```tsx
<Dropdown trigger={<Button>Bottom</Button>} placement="bottom">
  Content below
</Dropdown>

<Dropdown trigger={<Button>Top</Button>} placement="top">
  Content above
</Dropdown>
```

| Value | Description |
|-------|-------------|
| `'bottom'` | Opens below the trigger (default) |
| `'top'` | Opens above the trigger |

## Alignment

Control horizontal alignment of the dropdown:

```tsx
<Dropdown trigger={<Button>Start</Button>} align="start">
  Aligned to start
</Dropdown>

<Dropdown trigger={<Button>End</Button>} align="end">
  Aligned to end
</Dropdown>
```

| Value | Description |
|-------|-------------|
| `'start'` | Aligns to the left edge (default) |
| `'end'` | Aligns to the right edge |

## Offset

Adjust the distance between trigger and dropdown:

```tsx
<Dropdown trigger={<Button>Default</Button>} offset={4}>
  4px gap (default)
</Dropdown>

<Dropdown trigger={<Button>More Space</Button>} offset={12}>
  12px gap
</Dropdown>
```

## Controlled State

For full control over open/close behavior:

```tsx
import { useState } from 'react'

function ControlledExample() {
  const [open, setOpen] = useState(false)

  return (
    <Dropdown
      trigger={<Button>Menu</Button>}
      open={open}
      onOpenChange={setOpen}
    >
      <div style={{ padding: '8px' }}>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </div>
    </Dropdown>
  )
}
```

## Full Width

Make the dropdown match the trigger width:

```tsx
<Dropdown trigger={<Button fullWidth>Full Width</Button>} fullWidth>
  <div>Content matches trigger width</div>
</Dropdown>
```

## Portal Rendering

Render dropdown in a portal to escape `overflow: hidden` containers:

```tsx
<Dropdown
  trigger={<Button>Menu</Button>}
  portalRenderNode={document.body}
>
  <div>Renders in document.body</div>
</Dropdown>
```

::: tip
Use portal rendering when the dropdown is inside a container with `overflow: hidden` or `overflow: auto`.
:::

## Props

### DropdownProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | — | Element that triggers the dropdown |
| `children` | `ReactNode` | — | Dropdown content |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Vertical position |
| `align` | `'start' \| 'end'` | `'start'` | Horizontal alignment |
| `offset` | `number` | `4` | Distance from trigger (px) |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Open state change callback |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target element |
| `fullWidth` | `boolean` | `false` | Match trigger width |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `DropdownClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `HTMLAttributes<HTMLDivElement>` props.

### DropdownClassnames

```ts
type DropdownClassnames = {
  container?: string  // Outer container
  trigger?: string    // Trigger wrapper
  content?: string    // Content wrapper
}
```

## CSS Classes

| Class | Element |
|-------|---------|
| `vacano_dropdown_container` | Outer container |
| `vacano_dropdown_trigger` | Trigger wrapper |
| `vacano_dropdown_content` | Content wrapper |

## Accessibility

- Dropdown closes on click outside
- Dropdown closes on Escape key
- Focus is managed automatically

## Examples

### Menu Dropdown

```tsx
function MenuExample() {
  const [open, setOpen] = useState(false)

  const handleAction = (action: string) => {
    console.log(action)
    setOpen(false)
  }

  return (
    <Dropdown
      trigger={<Button>Actions</Button>}
      open={open}
      onOpenChange={setOpen}
    >
      <div style={{ display: 'flex', flexDirection: 'column', padding: '4px' }}>
        <Button variant="ghost" onClick={() => handleAction('edit')}>Edit</Button>
        <Button variant="ghost" onClick={() => handleAction('duplicate')}>Duplicate</Button>
        <Button variant="danger" onClick={() => handleAction('delete')}>Delete</Button>
      </div>
    </Dropdown>
  )
}
```

### User Menu

```tsx
import { User, Settings, LogOut } from '@vacano/ui/icons'

<Dropdown
  trigger={
    <Button icon={<User size={18} />} variant="ghost">
      John Doe
    </Button>
  }
  align="end"
>
  <div style={{ padding: '8px', minWidth: '160px' }}>
    <Button variant="ghost" fullWidth icon={<Settings size={16} />}>
      Settings
    </Button>
    <Button variant="ghost" fullWidth icon={<LogOut size={16} />}>
      Sign Out
    </Button>
  </div>
</Dropdown>
```

### Tooltip-like Content

```tsx
<Dropdown
  trigger={<Button variant="ghost">Hover info</Button>}
  placement="top"
  offset={8}
>
  <div style={{ padding: '8px 12px', maxWidth: '200px' }}>
    This is additional information about the feature.
  </div>
</Dropdown>
```
