# Getting Started

Vacano UI is a React component library built with Atomic Design methodology and Emotion for styling. It provides tree-shakeable components with built-in light/dark theming support.

## Requirements

- React 19+
- @emotion/react 11+
- Node.js 22+

## Installation

Install Vacano UI and its peer dependency:

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

## Fonts

Vacano UI uses the **Inter** font family. You need to include it in your project.

### Option 1: Google Fonts (Recommended)

Add this to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Option 2: Fontsource

```bash
pnpm add @fontsource/inter
```

```tsx
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
```

## Setup

Wrap your application with `ThemeProvider`:

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

## Basic Usage

Import and use components:

```tsx
import { Button, Input, Checkbox } from '@vacano/ui'

function MyComponent() {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Accept terms"
      />
      <Button variant="primary">Submit</Button>
    </div>
  )
}
```

## Using Icons

Icons are available from a separate entry point for optimal tree-shaking:

```tsx
import { Button } from '@vacano/ui'
import { Search, Download } from '@vacano/ui/icons'

function MyComponent() {
  return (
    <Button icon={<Search size={18} />}>
      Search
    </Button>
  )
}
```

See the [Icons guide](/guide/icons) for more details.

## TypeScript

Vacano UI is written in TypeScript and includes full type definitions. All component props are fully typed:

```tsx
import type { ButtonProps, ButtonVariant } from '@vacano/ui'

const variant: ButtonVariant = 'primary' // 'primary' | 'secondary' | 'ghost' | 'danger'
```

## Next Steps

- Learn about [Theming](/guide/theming) to customize colors and switch between light/dark modes
- Explore [Icons](/guide/icons) to see all available icons
- Browse [Components](/components/atoms/button) for detailed API documentation
