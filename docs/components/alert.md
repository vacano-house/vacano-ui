# Alert

Inline alert block for displaying important messages inside containers, panels, or cards. Uses a colored circle icon to convey meaning.

*Also known as: callout, banner, notice, inline message*

<a href="/storybook/?path=/story/components-alert--playground" target="_blank">View in Storybook</a>

## When to use

- Highlighting important information, warnings, or errors inside a page section.
- Showing success confirmations after an action.
- Providing contextual guidance or tips.

## Import

```tsx
import { Alert } from '@vacano/ui'
```

## Usage

```tsx
<Alert
  icon={<InfoIcon />}
  title="This is an alert"
  description="Thanks for subscribing to our newsletter!"
/>
```

## Variants

The `variant` prop controls the icon circle color. The alert container stays neutral.

```tsx
<Alert icon={<InfoIcon />} title="Information" variant="normal" />
<Alert icon={<CheckIcon />} title="Success" variant="success" />
<Alert icon={<AlertTriangleIcon />} title="Warning" variant="warning" />
<Alert icon={<XIcon />} title="Error" variant="danger" />
```

## Radius

The `radius` prop controls the border radius of the alert container.

```tsx
<Alert icon={<InfoIcon />} title="No radius" radius="none" />
<Alert icon={<InfoIcon />} title="Small radius" radius="sm" />
<Alert icon={<InfoIcon />} title="Medium radius" radius="md" />
<Alert icon={<InfoIcon />} title="Large radius" radius="lg" />
<Alert icon={<InfoIcon />} title="Full radius" radius="full" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Icon displayed inside a colored circle |
| `title` | `ReactNode` | - | Bold title text |
| `description` | `ReactNode` | - | Supporting description text |
| `variant` | `'normal' \| 'success' \| 'warning' \| 'danger'` | `'normal'` | Icon circle color variant |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'lg'` | Border radius of the container |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `AlertClassNames` | - | Custom class names for sub-elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root element |
| `data-test-id` | `string` | - | Test identifier attribute |

The component also accepts all standard `HTMLDivElement` attributes (except `title` and `className` which are overridden by component props).

### AlertClassNames

| Key | Description |
|-----|-------------|
| `icon` | Icon circle container |
| `title` | Title text |
| `description` | Description text |

## Related

- [Notification](/components/notification) - Toast-style popup notification
- [Chip](/components/chip) - Compact status indicator
