# EmptyState

Placeholder component for empty views — when there's no data, no search results, or content hasn't been created yet. Features decorative concentric rings around an icon for visual emphasis.

*Also known as: empty view, no data, blank slate, zero state*

<a href="/storybook/?path=/story/components-emptystate--playground" target="_blank">View in Storybook</a>

## When to use

- Showing a meaningful message when a list, table, or view has no content.
- Guiding users to take action (create, upload, search again).
- Providing visual feedback after an empty search or filter result.

## Import

```tsx
import { EmptyState } from '@vacano/ui'
```

## Usage

```tsx
<EmptyState
  icon={<SearchIcon />}
  title="No results found"
  description="Your search did not match any results. Please try again."
  actions={<Button>New project</Button>}
/>
```

## Without icon

```tsx
<EmptyState
  title="Nothing here"
  description="There is no content to display at this time."
/>
```

## With actions

```tsx
<EmptyState
  icon={<FileTextIcon />}
  title="No documents"
  description="Get started by creating your first document."
  actions={
    <>
      <Button variant="transparent">Learn more</Button>
      <Button>Create document</Button>
    </>
  }
/>
```

## Title only

```tsx
<EmptyState icon={<SearchIcon />} title="No results found" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Icon displayed inside the concentric rings |
| `title` | `ReactNode` | **required** | Main heading text |
| `description` | `ReactNode` | - | Supporting text below the title |
| `actions` | `ReactNode` | - | Action buttons or links |
| `className` | `string` | - | CSS class name |
| `classnames` | `EmptyStateClassNames` | - | Custom class names for sub-elements |

### EmptyStateClassNames

| Key | Description |
|-----|-------------|
| `icon` | Icon area with concentric rings |
| `title` | Title heading |
| `description` | Description text |
| `actions` | Actions container |

## Related

- [Spinner](/components/spinner) - Loading indicator
- [Skeleton](/components/skeleton) - Loading placeholder
