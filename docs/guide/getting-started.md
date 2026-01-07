# Getting Started

Vacano UI is a React component library built with Emotion CSS-in-JS. It provides a set of customizable, accessible components for building modern web applications.

## Features

- **32+ Components** - Form controls, data display, feedback, layout, and utility components
- **1800+ Icons** - Lucide icon components included
- **TypeScript** - Full TypeScript support with strict typing
- **Emotion CSS-in-JS** - Styled components with transient props
- **Customizable** - All components accept `className` and `classnames` props
- **React 19** - Built for the latest React version

## Quick Start

```bash
# Install the package
pnpm add @vacano/ui @emotion/react

# or with npm
npm install @vacano/ui @emotion/react
```

## Basic Usage

```tsx
import { Button, Input, Card } from '@vacano/ui'
import { GlobalStyle } from '@vacano/ui'

function App() {
  return (
    <>
      <GlobalStyle />
      <Card>
        <Input label="Email" placeholder="Enter your email" />
        <Button variant="success">Submit</Button>
      </Card>
    </>
  )
}
```

## Package Exports

The library provides three main export points:

| Export | Description |
|--------|-------------|
| `@vacano/ui` | Main components |
| `@vacano/ui/icons` | Lucide icon components |
| `@vacano/ui/lib` | Utilities, hooks, constants, and types |

## Using Icons

```tsx
import { IconSearch, IconUser, IconSettings } from '@vacano/ui/icons'

function Header() {
  return (
    <nav>
      <IconSearch size={20} />
      <IconUser size={20} />
      <IconSettings size={20} />
    </nav>
  )
}
```

## Using Utilities

```tsx
import { COLORS, BREAKPOINTS, useKeyBinding } from '@vacano/ui/lib'

// Access design tokens
console.log(COLORS.black) // '#212529'
console.log(BREAKPOINTS.md) // 768

// Use keyboard shortcuts
useKeyBinding(['Meta', 'K'], () => {
  console.log('Command+K pressed')
})
```

## Component Sizes

Most form components support two sizes:

- `default` - Standard size for most use cases
- `compact` - Smaller size for dense UIs

```tsx
<Button size="compact">Compact</Button>
<Button size="default">Default</Button>
```

## Next Steps

- [Installation](/guide/installation) - Detailed installation instructions
- [Components](/components/) - Browse all available components
- [Storybook](https://ui.vacano.io/components/) - Interactive component playground
