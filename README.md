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
import { Example } from '@vacano/ui'

function MyComponent() {
  return <Example size="md" variant="one">Content</Example>
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

## Features

- **Atomic Design** - Components organized as atoms, molecules, and organisms
- **Theming** - Built-in light and dark themes with Emotion
- **TypeScript** - Full type definitions included
- **Tree Shakeable** - Import only what you need

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
- [Storybook](https://storybook.vacano.io)

## License

MIT
