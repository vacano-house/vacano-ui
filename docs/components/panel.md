# Panel

Section component with optional label, title, description, and subtle box shadow.

*Also known as: section, content section, titled container, card with title*

<a href="/storybook/?path=/story/components-panel--playground" target="_blank">View in Storybook</a>

## When to use

- Titled content sections. Use for organizing page sections with headings and descriptions.
- For simple containers, use Card. For full-page wrapper, use Container.

## Import

```tsx
import { Panel } from '@vacano/ui'
```

## Usage

```tsx
<Panel>
  <p>Panel content goes here.</p>
</Panel>
```

## With Title

```tsx
<Panel title="Settings">
  <p>Configure your preferences below.</p>
</Panel>
```

## With Title and Description

```tsx
<Panel
  title="Account Settings"
  description="Manage your account preferences and security options."
>
  <p>Settings form here...</p>
</Panel>
```

## With Label

The `label` prop renders a `ReactNode` above the title/description header.

```tsx
<Panel label={<span>Step 1</span>} title="Personal Info">
  <p>Enter your personal details.</p>
</Panel>
```

## Variants

```tsx
<Panel variant="light" title="Light Panel">
  <p>Light background</p>
</Panel>

<Panel variant="dark" title="Dark Panel">
  <p>Dark background</p>
</Panel>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Panel content |
| `title` | `string` | - | Panel title text |
| `description` | `string` | - | Panel description text below the title |
| `label` | `ReactNode` | - | Label element rendered above the header |
| `variant` | `'light' \| 'dark'` | `'light'` | Color variant |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `PanelClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `div` element |
| `data-test-id` | `string` | - | Test identifier attribute |

All standard HTML `div` attributes (except `className` and `title`) are also supported.

### ClassNames

| Key | Description |
|-----|-------------|
| `label` | Label element above the header |
| `title` | Title text element |
| `description` | Description text element |
| `content` | Content container wrapping `children` |

## Related

- [Card](/components/card) - Generic content container
- [Container](/components/container) - Responsive page wrapper
