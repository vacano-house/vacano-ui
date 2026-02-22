# Divider

A visual separator used to divide content in lists, menus, and form sections.

*Also known as: separator, horizontal rule, line break, content divider*

<a href="/storybook/?path=/story/components-divider--playground" target="_blank">View in Storybook</a>

## When to use

- To separate groups of items in dropdown menus or lists.
- To visually divide sections of a form or page.
- To display a labeled separator (e.g., "OR") between alternative actions.

## Import

```tsx
import { Divider } from '@vacano/ui'
```

## Usage

```tsx
<Divider />
```

## With label

Provide a string as `children` to render centered text between two lines.

```tsx
<Divider>OR</Divider>
```

## Custom spacing

Control vertical margin with the `spacing` prop (in pixels).

```tsx
<Divider spacing={4} />
<Divider spacing={16} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | - | Optional centered text label between the lines |
| `spacing` | `number` | `8` | Vertical margin in pixels |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `DividerClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `div` element |
| `data-test-id` | `string` | - | Test identifier attribute |

All standard HTML `div` attributes (except `children` and `className`) are also supported.

### ClassNames

| Key | Description |
|-----|-------------|
| `line` | The horizontal line element(s). When a label is present, two line elements are rendered. |
| `label` | The centered text label |

## Related

- [Panel](/components/panel) - Titled content section
- [FieldRow](/components/field-row) - Horizontal form field layout
