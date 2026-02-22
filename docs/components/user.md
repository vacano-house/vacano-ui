# User

Displays a user identity block with avatar, name, and optional description. Avatar can be positioned left or right.

*Also known as: user info, profile, identity, avatar card, author*

<a href="/storybook/?path=/story/components-user--playground" target="_blank">View in Storybook</a>

## When to use

- Showing user identity in card headers, comments, or lists.
- Displaying author information with avatar and handle.
- Building profile rows in navigation or dropdowns.

## Import

```tsx
import { User } from '@vacano/ui'
```

## Usage

```tsx
<User
  name="Zoey Lang"
  description="@zoeylang"
  src="https://example.com/avatar.jpg"
/>
```

## Without image (initials)

When `src` is not provided, Avatar displays initials from `name`.

```tsx
<User name="Zoey Lang" description="Frontend Developer" />
```

## Avatar position

```tsx
<User name="Zoey Lang" description="@zoeylang" avatarPosition="left" />
<User name="Zoey Lang" description="@zoeylang" avatarPosition="right" />
```

## Custom avatar props

Pass any Avatar prop (except `ref`) via `avatarProps`.

```tsx
<User
  name="Zoey Lang"
  avatarProps={{ size: 'lg', bordered: true, color: 'primary' }}
/>
```

## Without description

```tsx
<User name="Zoey Lang" src="https://example.com/avatar.jpg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `ReactNode` | **required** | User name (bold text) |
| `description` | `ReactNode` | - | Secondary text (e.g. handle, role) |
| `src` | `string` | - | Avatar image URL |
| `avatarPosition` | `'left' \| 'right'` | `'left'` | Avatar placement relative to text |
| `avatarProps` | `Omit<AvatarProps, 'ref'>` | - | Additional props passed to Avatar (excluding ref) |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `UserClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `avatar` | The Avatar element |
| `name` | The name text |
| `description` | The description text |

## Related

- Avatar - Standalone avatar component
- [Card](/components/card) - Often used inside CardHeader
