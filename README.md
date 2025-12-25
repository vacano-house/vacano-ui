<p align="center">
  <img src="./assets/logo-with-text.svg" alt="Vacano UI" width="300" />
</p>

<p align="center">
  Vacano React components library
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vacano-ui"><img src="https://img.shields.io/npm/v/vacano-ui" alt="npm version" /></a>
  <a href="https://github.com/vacano-house/vacano-ui/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vacano-ui" alt="license" /></a>
</p>

---

## Installation

```bash
pnpm add vacano-ui @emotion/react
```

## Usage

```tsx
import { ThemeProvider } from 'vacano-ui'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      {/* Your app */}
    </ThemeProvider>
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
# Install dependencies
pnpm install

# Start React Cosmos
pnpm cosmos

# Run tests
pnpm test

# Build library
pnpm build

# Start docs dev server
pnpm docs:dev
```

## Links

- [Documentation](https://ui.vacano.io)
- [Components](https://components.vacano.io)

## License

MIT
