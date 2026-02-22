# Pagination

Page navigation component with an animated sliding cursor, ellipsis truncation, and support for both controlled and uncontrolled modes.

*Also known as: pager, page navigator, page selector*

<a href="/storybook/?path=/story/components-pagination--playground" target="_blank">View in Storybook</a>

## When to use

- Navigating between pages of a data set (tables, lists, grids).
- Breaking long content into discrete pages with direct page access.
- Displaying large result sets where only a subset is shown at a time.

## Import

```tsx
import { Pagination } from '@vacano/ui'
```

## Usage

```tsx
<Pagination total={10} />
```

## Variants

Three visual styles are available via the `variant` prop. The active page always shows a sliding black cursor behind the number.

```tsx
{/* Flat (default) - transparent inactive items */}
<Pagination total={10} variant="flat" />

{/* Bordered - items have a gray border */}
<Pagination total={10} variant="bordered" />

{/* Light - transparent items, no border */}
<Pagination total={10} variant="light" />
```

## Controls

Show previous/next arrow buttons with `showControls`. The controls are automatically disabled when the user reaches the first or last page (unless `loop` is enabled).

```tsx
<Pagination total={10} showControls />
```

## Loop

When `loop` is enabled together with `showControls`, clicking "next" on the last page wraps to page 1, and clicking "previous" on page 1 wraps to the last page.

```tsx
<Pagination total={5} showControls loop />
```

## Initial Page

Set the starting page for the uncontrolled component with `initialPage`.

```tsx
<Pagination total={10} initialPage={5} />
```

## Siblings

The `siblings` prop controls how many page numbers appear on each side of the current page. This affects when ellipsis dots appear.

```tsx
{/* 1 sibling on each side (default) */}
<Pagination total={20} initialPage={10} siblings={1} />

{/* 2 siblings on each side */}
<Pagination total={20} initialPage={10} siblings={2} />

{/* 3 siblings on each side */}
<Pagination total={20} initialPage={10} siblings={3} />
```

## Boundaries

The `boundaries` prop controls how many page numbers are always visible at the start and end of the range, regardless of the current page.

```tsx
{/* 1 boundary page on each end (default) */}
<Pagination total={20} initialPage={10} boundaries={1} />

{/* 2 boundary pages on each end */}
<Pagination total={20} initialPage={10} boundaries={2} />
```

## Disabled

Disable the entire pagination component. All page buttons and controls become non-interactive.

```tsx
<Pagination total={10} disabled />
```

## Controlled

Use the `page` and `onChange` props together to fully control the current page from the parent component.

```tsx
const [page, setPage] = useState(1)

<Pagination total={10} page={page} onChange={setPage} showControls />
<p>Current page: {page}</p>
```

When `page` is provided, the component becomes controlled and `initialPage` is ignored.

## Few Pages

When the total number of pages is small enough, all page numbers are displayed without ellipsis.

```tsx
<Pagination total={3} />
<Pagination total={5} showControls />
<Pagination total={1} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | **required** | Total number of pages |
| `page` | `number` | - | Current page (controlled mode). When provided, the component is fully controlled. |
| `initialPage` | `number` | `1` | Starting page for uncontrolled mode. Ignored when `page` is provided. |
| `variant` | `'flat' \| 'bordered' \| 'light'` | `'flat'` | Visual style of inactive page items |
| `siblings` | `number` | `1` | Number of page numbers shown on each side of the current page |
| `boundaries` | `number` | `1` | Number of page numbers always visible at the start and end |
| `showControls` | `boolean` | `false` | Show previous/next arrow buttons |
| `loop` | `boolean` | `false` | Wrap navigation from last page to first and vice versa (requires `showControls`) |
| `disabled` | `boolean` | `false` | Disable all page buttons and controls |
| `onChange` | `(page: number) => void` | - | Callback fired when the page changes. Receives the new page number. |
| `ref` | `Ref<HTMLElement>` | - | Forwarded ref to the root `<nav>` element |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `PaginationClassNames` | - | Custom class names for sub-elements |
| `data-test-id` | `string` | - | Test identifier attribute |

### PaginationVariant

```typescript
type PaginationVariant = 'flat' | 'bordered' | 'light'
```

| Value | Description |
|-------|-------------|
| `flat` | Transparent background for inactive items with hover highlight (default) |
| `bordered` | Inactive items have a gray border with hover highlight |
| `light` | Transparent background for inactive items with hover highlight, no border |

### ClassNames

| Key | Description |
|-----|-------------|
| `item` | Individual page number button |
| `cursor` | The animated sliding cursor behind the active page |
| `controls` | Previous and next arrow buttons |
| `ellipsis` | The "..." dots separator between page ranges |

## Accessibility

- The root element is rendered as a `<nav>` element.
- Each page button has `aria-label="Page {n}"`.
- The active page button has `aria-current="page"`.
- Previous and next control buttons have `aria-label="Previous page"` and `aria-label="Next page"`.

## Related

- [Button](/components/button) - Standalone action button
- [Tabs](/components/tabs) - Switch between content sections
