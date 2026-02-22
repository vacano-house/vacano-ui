# MenuButton

Animated hamburger menu button that toggles between a three-line "burger" icon and an X (close) icon with a smooth CSS transition.

*Also known as: hamburger button, burger menu, nav toggle*

<a href="/storybook/?path=/story/components-menubutton--playground" target="_blank">View in Storybook</a>

## When to use

- Toggling mobile or sidebar navigation menus.
- Any context where a compact open/close trigger is needed.

## Import

```tsx
import { MenuButton } from '@vacano/ui'
```

## Usage

```tsx
<MenuButton />
```

## Controlled

```tsx
const [open, setOpen] = useState(false)

<MenuButton open={open} onOpenChange={setOpen} />
```

## Sizes

```tsx
<MenuButton size="compact" />
<MenuButton size="default" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | - | Called when the open state changes |
| `size` | `'compact' \| 'default'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | CSS class name |
| `classnames` | `MenuButtonClassNames` | - | Custom class names for sub-elements |

### MenuButtonClassNames

| Key | Description |
|-----|-------------|
| `line` | Each of the three animated lines |

## Related

- [Button](/components/button) - Standard action button
- [Dropdown](/components/dropdown) - Menu with trigger
