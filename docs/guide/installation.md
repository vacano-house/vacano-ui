# Installation

## Requirements

- Node.js >= 22.0.0
- React >= 19.0.0
- @emotion/react >= 11.0.0

## Package Manager

::: code-group

```bash [pnpm]
pnpm add @vacano/ui @emotion/react
```

```bash [npm]
npm install @vacano/ui @emotion/react
```

```bash [yarn]
yarn add @vacano/ui @emotion/react
```

:::

## Peer Dependencies

Vacano UI requires the following peer dependencies:

| Package | Version |
|---------|---------|
| `react` | ^19.0.0 |
| `react-dom` | ^19.0.0 |
| `@emotion/react` | ^11.0.0 |

## Setup

### 1. Configure Emotion

Add the JSX pragma to your build configuration. For Vite:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
})
```

### 2. Add GlobalStyle

Wrap your app with the `GlobalStyle` component to apply base styles and the Inter font:

```tsx
import { GlobalStyle } from '@vacano/ui'

function App() {
  return (
    <>
      <GlobalStyle />
      {/* Your app content */}
    </>
  )
}
```

### 3. TypeScript Configuration

For optimal TypeScript support, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react",
    "moduleResolution": "bundler"
  }
}
```

## Import Components

```tsx
// Import components
import { Button, Input, Card, Modal } from '@vacano/ui'

// Import icons
import { IconSearch, IconUser } from '@vacano/ui/icons'

// Import utilities
import { COLORS, BREAKPOINTS, useKeyBinding } from '@vacano/ui/lib'
```

## Bundle Size

The library supports tree-shaking. Only imported components will be included in your bundle.

```tsx
// Only Button will be bundled
import { Button } from '@vacano/ui'
```

## Icons

Vacano UI includes 1800+ Lucide icons as React components:

```tsx
import { IconCheck, IconX, IconPlus, IconMinus } from '@vacano/ui/icons'

function Controls() {
  return (
    <div>
      <IconCheck size={24} color="green" />
      <IconX size={24} color="red" />
    </div>
  )
}
```

## Next Steps

- [Getting Started](/guide/getting-started) - Quick start guide
- [Components](/components/) - Browse all components
- [Storybook](/storybook/) - Interactive playground
