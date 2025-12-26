# Button

A versatile button component with multiple variants, loading states, and icon support.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-button" target="_blank">View in Storybook</a>

## Import

```tsx
import { Button } from '@vacano/ui'
```

## Basic Usage

```tsx
<Button>Click me</Button>
```

## Variants

Button supports four variants: `primary`, `secondary`, `ghost`, and `danger`.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

| Variant | Use case |
|---------|----------|
| `primary` | Main actions, form submissions |
| `secondary` | Secondary actions, cancel buttons |
| `ghost` | Tertiary actions, navigation |
| `danger` | Destructive actions, delete buttons |

## With Icon

Pass an icon as a `ReactNode` to the `icon` prop:

```tsx
import { Button } from '@vacano/ui'
import { Search, Download, Plus } from '@vacano/ui/icons'

<Button icon={<Search size={18} />}>Search</Button>
<Button icon={<Download size={18} />}>Download</Button>
<Button icon={<Plus size={18} />}>Add item</Button>
```

## Icon-Only Button

When you pass an icon without children, the button becomes icon-only:

```tsx
import { Plus, Settings, X } from '@vacano/ui/icons'

<Button icon={<Plus size={18} />} aria-label="Add" />
<Button icon={<Settings size={18} />} aria-label="Settings" />
<Button icon={<X size={18} />} aria-label="Close" />
```

::: warning
Always provide an `aria-label` for icon-only buttons for accessibility.
:::

## Loading State

Set `loading` to show a loading indicator and disable the button:

```tsx
<Button loading>Saving...</Button>
<Button loading icon={<Save size={18} />}>Saving...</Button>
```

- Text buttons show animated dots
- Icon-only buttons show a spinner

## Keyboard Shortcut Hint

Use the `char` prop to display a keyboard shortcut:

```tsx
<Button char="K">Search</Button>
<Button char="S" icon={<Save size={18} />}>Save</Button>
```

## Full Width

Set `fullWidth` to make the button span the full width of its container:

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Disabled State

```tsx
<Button disabled>Disabled</Button>
<Button disabled variant="secondary">Disabled Secondary</Button>
```

## Props

### ButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `icon` | `ReactNode` | — | Icon element to display |
| `loading` | `boolean` | `false` | Shows loading indicator and disables button |
| `disabled` | `boolean` | `false` | Disables the button |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `char` | `string` | — | Keyboard shortcut hint character |
| `children` | `string` | — | Button text |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `ButtonClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `ButtonHTMLAttributes<HTMLButtonElement>` props.

### ButtonVariant

```ts
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
```

### ButtonClassnames

```ts
type ButtonClassnames = {
  container?: string  // Button element
  content?: string    // Content wrapper
  icon?: string       // Icon wrapper
  text?: string       // Text element
  char?: string       // Keyboard shortcut hint
  loader?: string     // Loading indicator wrapper
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_button_container` | Root button element |
| `vacano_button_content` | Content wrapper |
| `vacano_button_icon` | Icon wrapper |
| `vacano_button_text` | Text element |
| `vacano_button_char` | Keyboard shortcut hint |
| `vacano_button_loader` | Loading indicator wrapper |

## Accessibility

- Uses native `<button>` element
- Supports keyboard navigation
- Disabled state is properly communicated to assistive technologies
- Use `aria-label` for icon-only buttons

## Examples

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Input value={email} onChange={setEmail} placeholder="Email" />
  <Button type="submit" loading={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </Button>
</form>
```

### Button Group

```tsx
<div style={{ display: 'flex', gap: '8px' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</div>
```

### Danger Action with Confirmation

```tsx
<Button
  variant="danger"
  icon={<Trash size={18} />}
  onClick={() => setShowConfirm(true)}
>
  Delete
</Button>
```
