# Avatar

Circular or rounded user representation showing an image, initials derived from a name, a custom icon, or a default person silhouette as fallback.

*Also known as: user avatar, profile picture, user icon*

<a href="/storybook/?path=/story/components-avatar--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying a user's profile picture in headers, comments, or lists.
- Showing initials when no image is available.
- Representing team members in a compact visual format.
- Indicating user presence with color-coded indicators.

## Import

```tsx
import { Avatar } from '@vacano/ui'
```

## Usage

```tsx
<Avatar src="/photo.jpg" name="John Doe" />
```

## Fallback behavior

Avatar uses a priority-based fallback chain:

1. **Image** (`src`) -- if provided and loads successfully
2. **Icon** (`icon`) -- if `src` is missing or fails to load, and `icon` is provided
3. **Initials** (`name`) -- if no `src`/`icon`, extracts initials from the name (e.g. "John Doe" becomes "JD", "Alice" becomes "AL")
4. **Default silhouette** -- a generic person SVG icon if nothing else is available

```tsx
{/* Image */}
<Avatar src="/photo.jpg" name="John Doe" />

{/* Icon fallback */}
<Avatar icon={<UserIcon />} />

{/* Initials fallback */}
<Avatar name="John Doe" />

{/* Default silhouette */}
<Avatar />
```

### Initials logic

- For two or more words: first letter of the first word + first letter of the last word, uppercased (e.g. "John Doe" becomes "JD", "John Michael Doe" becomes "JD").
- For a single word: first two characters, uppercased (e.g. "Alice" becomes "AL").

## Sizes

Three sizes are available. The `size` prop controls the container dimensions, font size, and icon size.

| Size | Container | Font size | Icon size |
|------|-----------|-----------|-----------|
| `'sm'` | 32px | 12px | 18px |
| `'md'` | 40px | 14px | 22px |
| `'lg'` | 56px | 20px | 30px |

```tsx
<Avatar name="John Doe" size="sm" />
<Avatar name="John Doe" size="md" />
<Avatar name="John Doe" size="lg" />
```

## Colors

Controls the background color, text/icon color, and border color (when bordered).

```tsx
<Avatar name="John Doe" color="default" />
<Avatar name="John Doe" color="primary" />
<Avatar name="John Doe" color="success" />
<Avatar name="John Doe" color="warning" />
<Avatar name="John Doe" color="danger" />
```

| Color | Background | Text | Border |
|-------|-----------|------|--------|
| `'default'` | gray | black | gray |
| `'primary'` | baltic-blue | white | baltic-blue |
| `'success'` | green | white | green |
| `'warning'` | yellow | black | yellow |
| `'danger'` | red | white | red |

## Radius

Controls the border-radius of the avatar container.

```tsx
<Avatar name="John Doe" radius="sm" />
<Avatar name="John Doe" radius="md" />
<Avatar name="John Doe" radius="lg" />
<Avatar name="John Doe" radius="full" />
```

| Radius | Value |
|--------|-------|
| `'sm'` | 6px |
| `'md'` | 10px |
| `'lg'` | 14px |
| `'full'` | 50% (circle) |

## Bordered

Adds a double-ring border effect (white inner ring + colored outer ring using box-shadow).

```tsx
<Avatar name="John Doe" bordered />
<Avatar name="John Doe" bordered color="primary" />
<Avatar name="John Doe" bordered color="danger" />
```

## Disabled

Reduces opacity to 0.5 and disables pointer events.

```tsx
<Avatar name="John Doe" disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | URL of the avatar image |
| `name` | `string` | - | User name (used for initials fallback and image alt text) |
| `icon` | `ReactNode` | - | Custom icon element shown when image is unavailable |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |
| `color` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color theme |
| `radius` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'full'` | Border radius |
| `bordered` | `boolean` | `false` | Show double-ring border |
| `disabled` | `boolean` | `false` | Reduce opacity and disable interaction |
| `className` | `string` | - | CSS class for the root container |
| `classnames` | `AvatarClassNames` | - | Custom class names for internal elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `<div>` |

## ClassNames

| Key | Description |
|-----|-------------|
| `image` | The `<img>` element when showing an image |
| `fallback` | The `<span>` wrapper for the icon fallback or default silhouette |
| `initials` | The `<span>` element showing initials text |

## CSS class names

All generated class names use the `vacano_avatar_` prefix:

| Class | Element |
|-------|---------|
| `vacano_avatar_container` | Root container `<div>` |
| `vacano_avatar_image` | Image element |
| `vacano_avatar_fallback` | Icon/default silhouette wrapper |
| `vacano_avatar_initials` | Initials text element |

## Related

- [AvatarGroup](/components/avatar-group) - Display multiple avatars in an overlapping group
- [Badge](/components/badge) - Attach status indicators to avatars
- [User](/components/user) - User display component with avatar, name, and description
