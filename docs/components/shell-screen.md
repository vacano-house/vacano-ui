# ShellScreen

Full-page layout component with a decorative grid background for standalone pages like 404, login, maintenance, or password recovery screens. Centers content vertically and horizontally with a radially-fading grid pattern.

*Also known as: full-page layout, error page, auth page, status page*

<a href="/storybook/?path=/story/components-shellscreen--playground" target="_blank">View in Storybook</a>

## When to use

- Building standalone pages: 404, 500, maintenance, coming soon.
- Login, registration, and password recovery screens.
- Any page that needs a centered card layout with visual emphasis.

## Import

```tsx
import { ShellScreen } from '@vacano/ui'
```

## Usage

```tsx
<ShellScreen
  icon={<SearchIcon />}
  title="Page not found"
  description="Sorry, the page you are looking for does not exist."
>
  <Button>Go to homepage</Button>
</ShellScreen>
```

## With logo

```tsx
<ShellScreen
  logo={<img src="/logo.svg" alt="Logo" />}
  title="Welcome back"
  description="Enter your credentials to access your account."
>
  <Input label="Email" placeholder="Enter your email" />
  <Input label="Password" placeholder="Enter your password" type="password" />
  <Button style={{ width: '100%' }}>Sign in</Button>
</ShellScreen>
```

## With footer

```tsx
<ShellScreen
  logo={<img src="/logo.svg" alt="Logo" />}
  title="Page not found"
  description="Sorry, the page you are looking for doesn't exist."
  footer="Need help? Contact support"
>
  <Button>Back to homepage</Button>
</ShellScreen>
```

## Custom grid size

The `gridSize` prop controls the size of the background grid cells in pixels (default `64`).

```tsx
<ShellScreen
  icon={<LockIcon />}
  title="Under maintenance"
  description="We'll be back shortly."
  gridSize={48}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | - | Logo or brand element displayed above the icon |
| `icon` | `ReactNode` | - | Icon displayed in a bordered box |
| `title` | `ReactNode` | - | Main heading text |
| `description` | `ReactNode` | - | Supporting text below the title |
| `children` | `ReactNode` | - | Content area (forms, buttons, etc.) |
| `footer` | `ReactNode` | - | Footer text or links |
| `gridSize` | `number` | `64` | Background grid cell size in pixels |
| `className` | `string` | - | CSS class name |
| `classnames` | `ShellScreenClassNames` | - | Custom class names for sub-elements |

### ShellScreenClassNames

| Key | Description |
|-----|-------------|
| `grid` | Background grid overlay |
| `header` | Header section (title + description) |
| `title` | Title heading |
| `description` | Description text |
| `content` | Content container |
| `footer` | Footer container |

## Related

- [EmptyState](/components/empty-state) - Empty content placeholder with concentric rings
- [Panel](/components/panel) - Content container with header
