# Tooltip

Hover tooltip component with multiple placements and variants. Automatically repositions when there is not enough space in the preferred direction.

*Also known as: popover, hint, hover info, title tooltip, info bubble*

<a href="/storybook/?path=/story/components-tooltip--playground" target="_blank">View in Storybook</a>

## When to use

- Showing supplementary information on hover (icon explanations, truncated text, shortcuts)
- For interactive popup menus, use [Dropdown](/components/dropdown) instead
- Supports rich content (ReactNode), not just plain text

## Import

```tsx
import { Tooltip } from '@vacano/ui'
```

## Usage

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Placements

```tsx
<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>
```

## Variants

```tsx
<Tooltip content="Dark tooltip" variant="dark">
  <span>Dark</span>
</Tooltip>

<Tooltip content="Light tooltip" variant="light">
  <span>Light</span>
</Tooltip>

<Tooltip content="Success tooltip" variant="success">
  <span>Success</span>
</Tooltip>

<Tooltip content="Warning tooltip" variant="warning">
  <span>Warning</span>
</Tooltip>

<Tooltip content="Danger tooltip" variant="danger">
  <span>Danger</span>
</Tooltip>
```

## Custom Delay

```tsx
// No delay
<Tooltip content="Instant" delay={0}>
  <span>Hover</span>
</Tooltip>

// Longer delay (milliseconds)
<Tooltip content="Delayed" delay={500}>
  <span>Hover</span>
</Tooltip>
```

## Rich Content

```tsx
<Tooltip
  content={
    <div>
      <strong>Title</strong>
      <p>Detailed description here</p>
    </div>
  }
>
  <Button>Rich Tooltip</Button>
</Tooltip>
```

## Portal Rendering

For use inside containers with `overflow: hidden`:

```tsx
<Tooltip
  content="Tooltip content"
  portalRenderNode={document.body}
>
  <Button>With Portal</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Trigger element that activates the tooltip on hover |
| `content` | `ReactNode` | **required** | Tooltip content (text or JSX) |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred tooltip position relative to the trigger. Auto-adjusts if not enough space. |
| `variant` | `'dark' \| 'light' \| 'success' \| 'warning' \| 'danger'` | `'dark'` | Color variant |
| `delay` | `number` | `200` | Delay in milliseconds before showing the tooltip on hover |
| `portalRenderNode` | `HTMLElement \| null` | - | When provided, tooltip content is rendered via `createPortal` into this node |
| `className` | `string` | - | CSS class name for the wrapper element |
| `classnames` | `TooltipClassNames` | - | Custom class names for sub-elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the wrapper element |
| `data-test-id` | `string` | - | Test identifier attribute |

The component also accepts all standard `HTMLDivElement` attributes (except `className` and `content` which are overridden by component props).

### TooltipClassNames

| Key | Description |
|-----|-------------|
| `content` | Tooltip content container (the floating tooltip box) |

## Related

- [Dropdown](/components/dropdown) - interactive popup menu triggered by click
- [KeysBindings](/components/keys-bindings) - display keyboard shortcuts (often shown inside tooltips)
