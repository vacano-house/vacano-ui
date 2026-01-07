# Drawer

Slide-out panel component that appears from any edge of the screen.

<a href="/storybook/?path=/docs/organisms-drawer--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Drawer } from '@vacano/ui'
```

## Usage

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer open={open}>
  <h2>Drawer Title</h2>
  <p>Drawer content</p>
  <Button onClick={() => setOpen(false)}>Close</Button>
</Drawer>
```

## Positions

```tsx
// Right side (default)
<Drawer open={open} position="right">Content</Drawer>

// Left side
<Drawer open={open} position="left">Content</Drawer>

// Top
<Drawer open={open} position="top">Content</Drawer>

// Bottom
<Drawer open={open} position="bottom">Content</Drawer>
```

## Custom Size

```tsx
// Fixed width for left/right
<Drawer open={open} position="right" size="400px">
  Wide drawer
</Drawer>

// Fixed height for top/bottom
<Drawer open={open} position="bottom" size="300px">
  Tall drawer
</Drawer>

// Percentage
<Drawer open={open} position="left" size="50%">
  Half-width drawer
</Drawer>
```

## Animated

```tsx
<Drawer open={open} animated>
  Slides in with animation
</Drawer>

<Drawer open={open} animated={false}>
  Appears instantly
</Drawer>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Open state |
| `children` | `ReactNode` | - | Drawer content |
| `position` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Slide direction |
| `size` | `string` | - | Width (left/right) or height (top/bottom) |
| `animated` | `boolean` | `true` | Enable animation |
| `className` | `string` | - | CSS class name |
