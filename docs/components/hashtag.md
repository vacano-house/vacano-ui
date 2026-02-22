# Hashtag

Displays a hashtag label with optional click/link behavior. Shows hover effect when interactive.

*Also known as: tag link, topic link, hash link, keyword*

<a href="/storybook/?path=/story/components-hashtag--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying clickable hashtags in posts, profiles, or feeds.
- Linking to topic/tag pages.
- Showing static topic labels.

## Import

```tsx
import { Hashtag } from '@vacano/ui'
```

## Usage (static)

```tsx
<Hashtag>React</Hashtag>
// Renders: #React
```

## Clickable

When `onClick` is provided, shows pointer cursor and blue hover color.

```tsx
<Hashtag onClick={() => navigate('/tags/react')}>React</Hashtag>
```

## As link

When `href` is provided, renders as an `<a>` element.

```tsx
<Hashtag href="/tags/react">React</Hashtag>
```

## Group of hashtags

```tsx
<div style={{ display: 'flex', gap: 12 }}>
  <Hashtag onClick={handleClick}>FrontendWithZoey</Hashtag>
  <Hashtag onClick={handleClick}>React</Hashtag>
  <Hashtag onClick={handleClick}>OpenSource</Hashtag>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Tag text (without `#`, added automatically) |
| `href` | `string` | - | Link URL (renders as `<a>`) |
| `onClick` | `() => void` | - | Click handler (makes it interactive) |
| `className` | `string` | - | CSS class name |
| `classnames` | `HashtagClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `hash` | The `#` symbol |
| `label` | The tag text |

## Related

- [Chip](/components/chip) - Inline label with optional delete
- [Tags](/components/tags) - Tag input component
