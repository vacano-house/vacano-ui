# Heading

Typography component for headings with consistent sizing. Supports 6 levels with optional semantic override.

*Also known as: title, headline, header text, h1-h6*

<a href="/storybook/?path=/story/components-heading--playground" target="_blank">View in Storybook</a>

## When to use

- Rendering page, section, or card titles with consistent typography.
- When you need visual size independent of the semantic HTML level.

## Import

```tsx
import { Heading } from '@vacano/ui'
```

## Usage

```tsx
<Heading>Frontend Radio</Heading>
```

## Levels

Each level maps to a font size: h1 (32px), h2 (24px), h3 (18px), h4 (16px), h5 (14px), h6 (12px).

```tsx
<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>
<Heading level={4}>Heading 4</Heading>
<Heading level={5}>Heading 5</Heading>
<Heading level={6}>Heading 6</Heading>
```

## Semantic override

Use `as` to render a different HTML tag while keeping the visual size from `level`.

```tsx
{/* Looks like h1 (32px), but renders as <h3> for SEO */}
<Heading level={1} as={3}>Large but semantic h3</Heading>

{/* Looks like h4 (16px), but renders as <h2> */}
<Heading level={4} as={2}>Small but semantic h2</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Heading text |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` | Visual size level |
| `as` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | - | Override HTML tag (h1-h6). Defaults to `level` value |
| `ref` | `Ref<HTMLHeadingElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name |

## Size reference

| Level | Font size | Line height |
|-------|-----------|-------------|
| 1 | 32px | 1.2 |
| 2 | 24px | 1.25 |
| 3 | 18px | 1.3 |
| 4 | 16px | 1.4 |
| 5 | 14px | 1.4 |
| 6 | 12px | 1.5 |

## Related

- [Overline](/components/overline) - Eyebrow label, often placed above Heading
