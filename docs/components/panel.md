# Panel

Section component with optional title and description.

<a href="/storybook/?path=/docs/components-panel--docs" target="_blank">View in Storybook</a>

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
| `title` | `string` | - | Panel title |
| `description` | `string` | - | Panel description |
| `variant` | `'light' \| 'dark'` | `'light'` | Color variant |
| `className` | `string` | - | CSS class name |
| `classnames` | `PanelClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `title` | Title text |
| `description` | Description text |
| `content` | Content container |
