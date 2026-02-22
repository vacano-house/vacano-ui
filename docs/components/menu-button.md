# MenuButton

Animated hamburger menu button that toggles between a three-line "burger" icon and an X (close) icon with a smooth CSS transition. Supports controlled and uncontrolled state.

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

## Disabled

```tsx
<MenuButton disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state. When provided, component becomes controlled. |
| `defaultOpen` | `boolean` | `false` | Initial open state for uncontrolled usage |
| `onOpenChange` | `(open: boolean) => void` | - | Callback fired when the open state changes |
| `size` | `'compact' \| 'default'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Disables the button and prevents interaction |
| `className` | `string` | - | CSS class name for the root button element |
| `classnames` | `MenuButtonClassNames` | - | Custom class names for sub-elements |
| `ref` | `Ref<HTMLButtonElement>` | - | Ref forwarded to the root button element |
| `data-test-id` | `string` | - | Test identifier attribute |

The component also accepts all standard `HTMLButtonElement` attributes (except `children` and `className` which are overridden/excluded by the component).

### MenuButtonClassNames

| Key | Description |
|-----|-------------|
| `line` | Each of the three animated lines |

## Related

- [Button](/components/button) - Standard action button
- [Dropdown](/components/dropdown) - Menu with trigger
