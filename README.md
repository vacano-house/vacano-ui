<p align="center">
  <img src="./assets/logo-with-text.svg" alt="Vacano UI" width="300" />
</p>

<p align="center">
  Vacano React components library
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@vacano/ui"><img src="https://img.shields.io/npm/v/@vacano/ui" alt="npm version" /></a>
  <a href="https://github.com/vacano-house/vacano-ui/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/@vacano/ui" alt="license" /></a>
</p>

---

## Installation

```bash
pnpm add @vacano/ui @emotion/react
```

```bash
npm install @vacano/ui @emotion/react
```

```bash
yarn add @vacano/ui @emotion/react
```

## Requirements

- React 19+
- @emotion/react 11+

## Fonts

Vacano UI uses the Inter font family. You need to include it in your project:

**Option 1: Google Fonts (recommended)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Option 2: Fontsource**

```bash
pnpm add @fontsource/inter
```

```tsx
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
```

## Usage

Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@vacano/ui'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      {/* Your app */}
    </ThemeProvider>
  )
}
```

Import and use components:

```tsx
import { Button, Input, Checkbox } from '@vacano/ui'

function MyComponent() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
      <Checkbox label="Accept terms" />
    </>
  )
}
```

## Theming

Switch between light and dark themes:

```tsx
import { useTheme } from '@vacano/ui'

function ThemeToggle() {
  const { mode, setMode } = useTheme()

  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Toggle theme
    </button>
  )
}
```

## Icons

Vacano UI includes a complete icon set powered by [Lucide](https://lucide.dev/) — a beautiful, consistent, and open-source icon library with 1500+ icons.

Icons are exported from a separate entry point for optimal tree-shaking. Only icons you actually import will be included in your bundle.

```tsx
import { Search, Settings, User, Bell } from '@vacano/ui/icons'

function MyComponent() {
  return (
    <div>
      <Search size={24} />
      <Settings size={24} color="#666" />
    </div>
  )
}
```

Use icons with components:

```tsx
import { Button, Input } from '@vacano/ui'
import { Search, Download } from '@vacano/ui/icons'

function MyComponent() {
  return (
    <>
      <Button icon={<Search size={18} />}>Search</Button>
      <Input icon={<Search size={16} />} placeholder="Search..." />
    </>
  )
}
```

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon width and height in pixels |
| `color` | `string` | `currentColor` | Icon stroke color |
| `strokeWidth` | `number` | `2` | Stroke width |

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons).

> **License:** Lucide icons are licensed under the [ISC License](https://github.com/lucide-icons/lucide/blob/main/LICENSE) — free for personal and commercial use.

## Features

- **Atomic Design** - Components organized as atoms, molecules, and organisms
- **Theming** - Built-in light and dark themes with Emotion
- **TypeScript** - Full type definitions included
- **Tree Shakeable** - Import only what you need
- **1500+ Icons** - Lucide icon set included

## Development

```bash
pnpm install       # Install dependencies
pnpm storybook     # Start Storybook
pnpm test          # Run tests
pnpm build         # Build library
pnpm docs:dev      # Start docs dev server
```

## Links

- [Documentation](https://ui.vacano.io)
- [Storybook](https://ui.vacano.io/storybook/)

## License

MIT
