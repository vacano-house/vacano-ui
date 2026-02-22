# Overline

Small uppercase label text with optional description. Used as an eyebrow or category label above content.

*Also known as: eyebrow, kicker, category label, small caps label*

<a href="/storybook/?path=/story/components-overline--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying a category or section label above headings or content.
- Showing metadata like "Daily Mix" with a subtitle "12 Tracks".
- Adding hierarchical context to card or section headers.

## Import

```tsx
import { Overline } from '@vacano/ui'
```

## Usage

```tsx
<Overline>Category</Overline>
```

## With description

```tsx
<Overline description="12 Tracks">Daily Mix</Overline>
```

## With heading

Common pattern: Overline + Heading for structured content headers.

```tsx
<Overline description="12 Tracks">Daily Mix</Overline>
<Heading level={3}>Frontend Radio</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Uppercase label text |
| `description` | `ReactNode` | - | Secondary text below the label |
| `className` | `string` | - | CSS class name |
| `classnames` | `OverlineClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | The uppercase label text |
| `description` | The description text |

## Related

- [Heading](/components/heading) - Heading text component
- [Card](/components/card) - Often used inside CardHeader
