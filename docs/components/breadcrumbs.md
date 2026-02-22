# Breadcrumbs

Hierarchical navigation component that shows the user's current location within a site or application structure, with links back to each ancestor page.

*Also known as: breadcrumb trail, navigation path, location bar, crumb trail*

<a href="/storybook/?path=/story/components-breadcrumbs--playground" target="_blank">View in Storybook</a>

## When to use

- Showing the user's current position within a multi-level page hierarchy.
- Providing quick navigation back to parent pages in deeply nested structures.
- Improving orientation in applications with complex information architecture (e.g., e-commerce category trees, file managers, documentation sites).

## Import

```tsx
import { Breadcrumbs, BreadcrumbItem } from '@vacano/ui'
```

## Usage

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
  <BreadcrumbItem>Headphones</BreadcrumbItem>
</Breadcrumbs>
```

The last item is automatically treated as the current page. It renders as a `<span>` instead of a link, receives bolder font weight, and darker text color.

## Variants

Three visual variants control the container appearance.

| Variant | Description |
|---------|-------------|
| `'light'` | No background or border (default) |
| `'solid'` | Gray background with rounded corners |
| `'bordered'` | Gray border with rounded corners |

```tsx
<Breadcrumbs variant="light">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs variant="solid">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs variant="bordered">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
```

## Sizes

Three sizes control font size, gap between items, and padding (for `solid`/`bordered` variants).

| Size | Font size | Gap | Padding (solid/bordered) |
|------|-----------|-----|--------------------------|
| `'sm'` | 12px | 4px | 4px 8px |
| `'md'` | 14px | 6px | 6px 12px |
| `'lg'` | 16px | 8px | 8px 16px |

```tsx
<Breadcrumbs size="sm">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs size="md">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs size="lg">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
```

## Custom separator

By default, a chevron-right SVG icon is used as the separator between items. Pass any `ReactNode` to the `separator` prop to override it.

```tsx
<Breadcrumbs separator="/">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs separator="—">
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
```

## Collapsing items

When the breadcrumb trail is long, use `maxItems` to collapse the middle portion into an ellipsis (`...`) button. Control how many items remain visible at the start and end with `itemsBeforeCollapse` and `itemsAfterCollapse`.

Collapsing only activates when the total number of children exceeds `maxItems`.

```tsx
<Breadcrumbs maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={2}>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem href="#">Artist</BreadcrumbItem>
  <BreadcrumbItem href="#">Album</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
{/* Renders: Home > ... > Album > Song */}
```

```tsx
<Breadcrumbs maxItems={2} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Category</BreadcrumbItem>
  <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
  <BreadcrumbItem href="#">Product Type</BreadcrumbItem>
  <BreadcrumbItem href="#">Brand</BreadcrumbItem>
  <BreadcrumbItem>Product</BreadcrumbItem>
</Breadcrumbs>
{/* Renders: Home > ... > Product */}
```

## With icons

Use `startContent` and `endContent` on `BreadcrumbItem` to place icons or other elements before or after the label text. SVG icons inside items are automatically sized to `1em`.

```tsx
import { Home, Music, User, Disc, AudioLines } from '@vacano/ui/icons'

<Breadcrumbs>
  <BreadcrumbItem href="#" startContent={<Home />}>Home</BreadcrumbItem>
  <BreadcrumbItem href="#" startContent={<Music />}>Music</BreadcrumbItem>
  <BreadcrumbItem href="#" startContent={<User />}>Artist</BreadcrumbItem>
  <BreadcrumbItem href="#" startContent={<Disc />}>Album</BreadcrumbItem>
  <BreadcrumbItem startContent={<AudioLines />}>Song</BreadcrumbItem>
</Breadcrumbs>
```

## Disabled

Set `disabled` on the `Breadcrumbs` container to disable all items at once. Disabled items receive `opacity: 0.5` and `pointer-events: none`. The current (last) item is never visually disabled.

```tsx
<Breadcrumbs disabled>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Music</BreadcrumbItem>
  <BreadcrumbItem href="#">Artist</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
```

Individual items can also be disabled independently via the `disabled` prop on `BreadcrumbItem`.

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#" disabled>Music</BreadcrumbItem>
  <BreadcrumbItem href="#">Artist</BreadcrumbItem>
  <BreadcrumbItem>Song</BreadcrumbItem>
</Breadcrumbs>
```

## Marking the current item

The last `BreadcrumbItem` is automatically treated as the current page. You can also explicitly mark any item as current with the `current` prop. Current items render as `<span>` (not `<a>`), have bold weight (600), and do not respond to hover or click.

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem current>Music</BreadcrumbItem>
  <BreadcrumbItem href="#">Artist</BreadcrumbItem>
</Breadcrumbs>
```

## Props

### BreadcrumbsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | `BreadcrumbItem` components to render |
| `variant` | `'light' \| 'solid' \| 'bordered'` | `'light'` | Visual style of the container |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls font size, spacing, and padding |
| `separator` | `ReactNode` | Chevron-right icon | Custom separator rendered between items |
| `disabled` | `boolean` | `false` | Disables all items (except the current item) |
| `maxItems` | `number` | - | When total items exceed this number, middle items collapse into an ellipsis |
| `itemsBeforeCollapse` | `number` | `1` | Number of items to show before the ellipsis when collapsed |
| `itemsAfterCollapse` | `number` | `1` | Number of items to show after the ellipsis when collapsed |
| `className` | `string` | - | CSS class for the root `<nav>` element |
| `classnames` | `BreadcrumbsClassNames` | - | Custom class names for internal elements |
| `ref` | `Ref<HTMLElement>` | - | Ref forwarded to the root `<nav>` element |
| `data-test-id` | `string` | - | Test identifier attribute |

The root element also accepts all standard `HTMLAttributes<HTMLElement>` (except `className`).

### BreadcrumbItemProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Label content of the breadcrumb item |
| `href` | `string` | - | URL for the breadcrumb link. When set (and the item is not current), the item renders as an `<a>` tag |
| `current` | `boolean` | `false` | Marks this item as the current page. Automatically `true` for the last item |
| `disabled` | `boolean` | `false` | Disables this item (has no effect on the current item) |
| `startContent` | `ReactNode` | - | Content (e.g., icon) placed before the label text |
| `endContent` | `ReactNode` | - | Content (e.g., icon) placed after the label text |
| `separator` | `ReactNode` | - | Overrides the separator for this specific item |
| `className` | `string` | - | CSS class for the `<li>` element |
| `classnames` | `BreadcrumbItemClassNames` | - | Custom class names for internal elements |
| `ref` | `Ref<HTMLLIElement>` | - | Ref forwarded to the `<li>` element |
| `data-test-id` | `string` | - | Test identifier attribute |

The item element also accepts all standard `HTMLAttributes<HTMLLIElement>` (except `className`).

### BreadcrumbsClassNames

| Key | Description |
|-----|-------------|
| `list` | The `<ol>` element wrapping all items |
| `separator` | Each separator element between items |
| `ellipsis` | The ellipsis button shown when items are collapsed |

### BreadcrumbItemClassNames

| Key | Description |
|-----|-------------|
| `separator` | The separator element after this individual item |

## CSS class names

All generated class names use the `vacano_breadcrumbs_` prefix:

| Class | Element |
|-------|---------|
| `vacano_breadcrumbs_container` | Root `<nav>` container |
| `vacano_breadcrumbs_list` | `<ol>` element containing all items |
| `vacano_breadcrumbs_separator` | Separator elements between items |
| `vacano_breadcrumbs_ellipsis` | Ellipsis button (visible during collapse) |

## Accessibility

- The root element is a `<nav>` with `aria-label="Breadcrumbs"`.
- Items with `href` render as `<a>` tags; the current item renders as a `<span>`.
- The ellipsis button has `aria-label="Show more"`.
- The list uses a semantic `<ol>` element.

## Types

```tsx
type BreadcrumbsVariant = 'light' | 'solid' | 'bordered'

type BreadcrumbsSize = 'sm' | 'md' | 'lg'

type BreadcrumbsClassNames = {
  list?: string
  separator?: string
  ellipsis?: string
}

type BreadcrumbItemClassNames = {
  separator?: string
}
```

## Related

- [Tabs](/components/tabs) - Tab-based navigation for switching views
- [Stepper](/components/stepper) - Step-by-step progress indicator
