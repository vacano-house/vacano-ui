# Dropdown

Dropdown menu component with customizable trigger.

<a href="/storybook/?path=/docs/molecules-dropdown--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Dropdown } from '@vacano/ui'
```

## Usage

```tsx
<Dropdown trigger={<Button>Open Menu</Button>}>
  <div style={{ padding: 8 }}>
    <p>Menu item 1</p>
    <p>Menu item 2</p>
    <p>Menu item 3</p>
  </div>
</Dropdown>
```

## Alignment

```tsx
// Left aligned (default)
<Dropdown align="left" trigger={<Button>Left</Button>}>
  <p>Left-aligned dropdown</p>
</Dropdown>

// Right aligned
<Dropdown align="right" trigger={<Button>Right</Button>}>
  <p>Right-aligned dropdown</p>
</Dropdown>
```

## Controlled State

```tsx
const [open, setOpen] = useState(false)

<Dropdown
  open={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
  trigger={<Button>Controlled</Button>}
>
  <Button onClick={() => setOpen(false)}>Close</Button>
</Dropdown>
```

## Portal Rendering

For use inside containers with `overflow: hidden`:

```tsx
<Dropdown
  trigger={<Button>With Portal</Button>}
  portalRenderNode={document.body}
>
  <p>Dropdown content</p>
</Dropdown>
```

## Auto Close

By default, the dropdown closes when clicking inside the dropdown content. Set `autoClose={false}` to keep it open:

```tsx
// Default: closes on click (autoClose=true)
<Dropdown trigger={<Button>Auto Close</Button>}>
  <button onClick={() => alert('Clicked!')}>Action</button>
</Dropdown>

// Stays open on click
<Dropdown autoClose={false} trigger={<Button>Stay Open</Button>}>
  <button onClick={() => alert('Clicked!')}>Action</button>
</Dropdown>
```

## Menu Example

```tsx
function MenuDropdown() {
  return (
    <Dropdown trigger={<Button>Actions</Button>}>
      <div style={{ minWidth: 150 }}>
        <button style={{ display: 'block', width: '100%' }}>
          Edit
        </button>
        <button style={{ display: 'block', width: '100%' }}>
          Duplicate
        </button>
        <button style={{ display: 'block', width: '100%', color: 'red' }}>
          Delete
        </button>
      </div>
    </Dropdown>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactElement` | **required** | Trigger element |
| `children` | `ReactNode` | - | Dropdown content |
| `align` | `'left' \| 'right'` | `'left'` | Horizontal alignment |
| `autoClose` | `boolean` | `true` | Close dropdown on content click |
| `open` | `boolean` | - | Controlled open state |
| `onOpen` | `() => void` | - | Open callback |
| `onClose` | `() => void` | - | Close callback |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target |
| `className` | `string` | - | CSS class name |
| `classnames` | `DropdownClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `trigger` | Trigger wrapper |
| `content` | Dropdown content |
