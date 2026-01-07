# Button

Clickable button with multiple variants, sizes, and keyboard binding support.

<a href="https://ui.vacano.io/components/?path=/docs/atoms-button--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Button } from '@vacano/ui'
```

## Usage

```tsx
<Button>Default Button</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Delete</Button>
```

## Variants

| Variant | Description |
|---------|-------------|
| `normal` | Default gray button |
| `system` | Blue system action button |
| `success` | Green success button |
| `warning` | Yellow warning button |
| `danger` | Red danger/delete button |
| `transparent` | Transparent background |

```tsx
<Button variant="normal">Normal</Button>
<Button variant="system">System</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="transparent">Transparent</Button>
```

## Sizes

```tsx
<Button size="default">Default</Button>
<Button size="compact">Compact</Button>
```

## With Icon

```tsx
import { IconPlus } from '@vacano/ui/icons'

<Button icon={<IconPlus size={16} />}>Add Item</Button>
```

## Keyboard Bindings

Display and respond to keyboard shortcuts:

```tsx
<Button keyBindings={['Meta', 'S']}>Save</Button>
<Button keyBindings={['Meta', 'Enter']}>Submit</Button>
```

## Loading State

```tsx
<Button loading>Saving...</Button>
```

## Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Link Button

```tsx
<Button type="link">Link Style</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | - | Button label text |
| `variant` | `'normal' \| 'system' \| 'success' \| 'warning' \| 'danger' \| 'transparent'` | `'normal'` | Visual variant |
| `size` | `'compact' \| 'default'` | `'default'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset' \| 'link'` | `'button'` | Button type |
| `icon` | `ReactNode` | - | Icon element |
| `keyBindings` | `KeyboardEventKey[]` | - | Keyboard shortcut keys |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Full width button |
| `className` | `string` | - | CSS class name |
| `classnames` | `ButtonClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | Label text element |
| `icon` | Icon container |
| `binding` | Keyboard binding display |
