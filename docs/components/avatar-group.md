# AvatarGroup

Displays multiple Avatar components in a horizontally overlapping group with an optional "+N" overflow counter when the number of avatars exceeds a maximum.

*Also known as: avatar stack, user group, face pile*

<a href="/storybook/?path=/story/components-avatargroup--playground" target="_blank">View in Storybook</a>

## When to use

- Showing a list of team members or participants in a compact space.
- Displaying assignees on a task or issue card.
- Indicating multiple users involved in a conversation or activity.

## Import

```tsx
import { Avatar, AvatarGroup } from '@vacano/ui'
```

## Usage

```tsx
<AvatarGroup>
  <Avatar src="/alice.jpg" name="Alice" />
  <Avatar src="/bob.jpg" name="Bob" />
  <Avatar src="/carol.jpg" name="Carol" />
</AvatarGroup>
```

## Max count

When the number of children exceeds `max`, only the first `max` avatars are shown and a "+N" counter appears showing how many are hidden.

```tsx
<AvatarGroup max={3}>
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Carol" />
  <Avatar name="Dave" />
  <Avatar name="Eve" />
</AvatarGroup>
{/* Shows Alice, Bob, Carol, then "+2" */}
```

## Sizes

The `size` prop is passed down to all child Avatar components, overriding their individual `size` props. It also controls the overlap spacing and the "+N" counter dimensions.

| Size | Avatar size | Overlap (negative margin) | Counter font size |
|------|-------------|---------------------------|-------------------|
| `'sm'` | 32px | -8px | 12px |
| `'md'` | 40px | -10px | 14px |
| `'lg'` | 56px | -14px | 20px |

```tsx
<AvatarGroup size="sm">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
</AvatarGroup>

<AvatarGroup size="md">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
</AvatarGroup>

<AvatarGroup size="lg">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
</AvatarGroup>
```

## Overflow counter

The "+N" counter is a circular element matching the avatar size, styled with a gray background (`#e4e4e7`) and muted text color (`#71717a`). It only appears when `avatars.length > max`.

```tsx
<AvatarGroup max={2}>
  <Avatar name="A" />
  <Avatar name="B" />
  <Avatar name="C" />
  <Avatar name="D" />
</AvatarGroup>
{/* Renders: Avatar "A", Avatar "B", "+2" counter */}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Avatar components to display |
| `max` | `number` | `5` | Maximum number of avatars to show before overflow counter |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size applied to all child avatars and the overflow counter |
| `className` | `string` | - | CSS class for the root container |
| `classnames` | `AvatarGroupClassNames` | - | Custom class names for internal elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `<div>` |

## ClassNames

| Key | Description |
|-----|-------------|
| `count` | The "+N" overflow counter element |

## CSS class names

All generated class names use the `vacano_avatar-group_` prefix:

| Class | Element |
|-------|---------|
| `vacano_avatar-group_container` | Root container `<div>` |
| `vacano_avatar-group_count` | Overflow counter element |

## Related

- [Avatar](/components/avatar) - Individual avatar component used as children
- [User](/components/user) - User display with avatar, name, and description
