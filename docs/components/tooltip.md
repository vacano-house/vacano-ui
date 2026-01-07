# Tooltip

Hover tooltip component with multiple placements and variants.

<a href="https://ui.vacano.io/components/?path=/docs/atoms-tooltip--docs" target="_blank">View in Storybook</a>

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
| `children` | `ReactNode` | **required** | Trigger element |
| `content` | `ReactNode` | **required** | Tooltip content |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position |
| `variant` | `'dark' \| 'light' \| 'success' \| 'warning' \| 'danger'` | `'dark'` | Color variant |
| `delay` | `number` | - | Show delay in ms |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target |
| `className` | `string` | - | CSS class name |
| `classnames` | `TooltipClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `content` | Tooltip content container |
