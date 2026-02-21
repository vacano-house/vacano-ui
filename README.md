<p align="center">
  <img src="./assets/logo-with-text.svg" alt="Vacano UI" width="300" />
</p>

<p align="center">
  React component library built with Emotion CSS-in-JS
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.12.0-blue" />
  <a href="https://www.npmjs.com/package/@vacano/ui"><img src="https://img.shields.io/npm/v/@vacano/ui" alt="npm version" /></a>
  <a href="https://github.com/vacano-house/vacano-ui/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/@vacano/ui" alt="license" /></a>
</p>

<p align="center">
  <a href="https://ui.vacano.io">Documentation</a> ·
  <a href="https://ui.vacano.io/storybook/">Storybook</a> ·
</p>

## Features

- **39+ Components** - Form controls, data display, feedback, layout, navigation, and utility components
- **1800+ Icons** - Lucide icon components included
- **TypeScript** - Full TypeScript support with strict typing
- **Emotion CSS-in-JS** - Styled components with transient props
- **Customizable** - All components accept `className` and `classnames` props
- **React 19** - Built for the latest React version

## Installation

```bash
pnpm add @vacano/ui @emotion/react
```

## Quick Start

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

| Export | Description |
|--------|-------------|
| `@vacano/ui` | Main components |
| `@vacano/ui/icons` | Lucide icon components |
| `@vacano/ui/lib` | Utilities, hooks, constants, and types |

## Components

### Form
Autocomplete, Button, Checkbox, CheckboxCard, CheckboxGroup, DatePicker, EditableText, Input, MultiSelect, OtpCode, Radio, RadioCard, RadioGroup, Select, Tags, Textarea

### Data Display
Card, Chip, Progress, StatusCard, Tabs

### Feedback
Confirmation, Modal, Drawer, Notification, SaveProgress, Spinner, Toastr, Tooltip

### Layout
Container, Panel

### Navigation
Dropdown, Stepper

### Utility
FieldLabel, FieldMessage, GlobalStyle, ImageCropper, KeysBindings, KeySymbol

## Icons

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

## Requirements

- Node.js >= 22.0.0
- React >= 19.0.0
- @emotion/react >= 11.0.0

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Build library
pnpm build

# Run tests
pnpm test:run

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## License

MIT
