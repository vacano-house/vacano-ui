# Vacano UI - Complete API Reference for AI Agents

> Machine Learning Language Agent (MMLA) documentation file containing exhaustive API reference, usage examples, and icon list.

## Overview

Vacano UI is a React component library built with:
- **Atomic Design** methodology (atoms, molecules, organisms)
- **Emotion** for CSS-in-JS styling
- **TypeScript** with full type definitions
- **Light/Dark theming** with built-in support
- **Tree-shakeable** exports

## Requirements

- React 19+
- @emotion/react 11+
- Node.js 22+

---

## Installation

```bash
# pnpm (recommended)
pnpm add @vacano/ui @emotion/react

# npm
npm install @vacano/ui @emotion/react

# yarn
yarn add @vacano/ui @emotion/react
```

## Font Setup

Vacano UI uses **Inter** font. Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or install via Fontsource:

```bash
pnpm add @fontsource/inter
```

```tsx
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
```

---

## Quick Start

```tsx
import { ThemeProvider, Button, Input, Checkbox } from '@vacano/ui'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <MyComponent />
    </ThemeProvider>
  )
}

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

## Import Patterns

```tsx
// Components
import { Button, Input, Select, Checkbox, MultiSelect, Dropdown } from '@vacano/ui'

// Theme utilities
import { ThemeProvider, useTheme } from '@vacano/ui'

// Types
import type {
  ButtonProps, ButtonVariant,
  InputProps, InputState,
  SelectProps, SelectOption,
  CheckboxProps, CheckboxState,
  MultiSelectProps, MultiSelectOption,
  ThemeMode
} from '@vacano/ui'

// Icons (separate entry point for tree-shaking)
import { Search, Settings, User, Bell, Mail } from '@vacano/ui/icons'
import type { IconLucideProps } from '@vacano/ui/icons'
```

---

# Theme API

## ThemeProvider

**Required wrapper** for all Vacano UI components.

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Application content |
| `defaultMode` | `'light' \| 'dark'` | `'light'` | Initial theme mode |

### What ThemeProvider Does

1. Creates theme context for all child components
2. Manages theme state (light/dark)
3. Injects global CSS reset and typography
4. Wraps with Emotion ThemeProvider

---

## useTheme Hook

Access current theme and control theme switching.

```tsx
import { useTheme } from '@vacano/ui'

function ThemeToggle() {
  const { mode, setMode, theme } = useTheme()

  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Current: {mode}
    </button>
  )
}
```

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `Theme` | Current theme object with all design tokens |
| `mode` | `'light' \| 'dark'` | Current theme mode |
| `setMode` | `(mode: ThemeMode) => void` | Function to change theme mode |

### Persisting Theme to localStorage

```tsx
import { useState, useEffect } from 'react'
import { ThemeProvider, ThemeMode } from '@vacano/ui'

function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as ThemeMode) || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ThemeProvider defaultMode={mode}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### System Preference Detection

```tsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  setMode(mediaQuery.matches ? 'dark' : 'light')

  const handler = (e: MediaQueryListEvent) => {
    setMode(e.matches ? 'dark' : 'light')
  }

  mediaQuery.addEventListener('change', handler)
  return () => mediaQuery.removeEventListener('change', handler)
}, [])
```

---

# Atoms

## Button

Versatile button with variants, loading states, and icon support.

```tsx
import { Button } from '@vacano/ui'
import type { ButtonProps, ButtonVariant } from '@vacano/ui'
```

### Basic Usage

```tsx
<Button>Click me</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### With Icon

```tsx
import { Search, Download, Plus, Trash } from '@vacano/ui/icons'

<Button icon={<Search size={18} />}>Search</Button>
<Button icon={<Download size={18} />}>Download</Button>
<Button icon={<Plus size={18} />}>Add item</Button>
```

### Icon-Only Button

```tsx
<Button icon={<Plus size={18} />} aria-label="Add" />
<Button icon={<Settings size={18} />} aria-label="Settings" />
<Button icon={<X size={18} />} aria-label="Close" />
```

**Important:** Always provide `aria-label` for icon-only buttons.

### Loading State

```tsx
<Button loading>Saving...</Button>
<Button loading icon={<Save size={18} />}>Saving...</Button>
```

### Keyboard Shortcut Hint

```tsx
<Button char="K">Search</Button>
<Button char="S" icon={<Save size={18} />}>Save</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Button style |
| `icon` | `ReactNode` | — | Icon element |
| `loading` | `boolean` | `false` | Shows loading indicator |
| `disabled` | `boolean` | `false` | Disables the button |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `char` | `string` | — | Keyboard shortcut hint |
| `children` | `string` | — | Button text |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML type |
| `onClick` | `MouseEventHandler` | — | Click handler |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `ButtonClassnames` | — | CSS classes for internals |
| `data-test-id` | `string` | — | Test identifier |

### ButtonClassnames

```ts
type ButtonClassnames = {
  container?: string  // Button element
  content?: string    // Content wrapper
  icon?: string       // Icon wrapper
  text?: string       // Text element
  char?: string       // Keyboard shortcut hint
  loader?: string     // Loading indicator
}
```

### CSS Classes

- `vacano_button_container` - Root button
- `vacano_button_content` - Content wrapper
- `vacano_button_icon` - Icon wrapper
- `vacano_button_text` - Text element
- `vacano_button_char` - Shortcut hint
- `vacano_button_loader` - Loading indicator

---

## Input

Text input with label, icon, validation, and password toggle.

```tsx
import { Input } from '@vacano/ui'
import type { InputProps, InputType, InputState } from '@vacano/ui'
```

### Basic Usage

```tsx
const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>
```

### With Label and Icon

```tsx
import { Search, Mail, Lock, User } from '@vacano/ui/icons'

<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  icon={<Mail size={16} />}
  label="Email"
  type="email"
/>
```

### Input Types

```tsx
<Input type="text" value={...} onChange={...} />
<Input type="email" value={...} onChange={...} />
<Input type="password" value={...} onChange={...} />  // Has visibility toggle
<Input type="number" value={...} onChange={...} />
<Input type="tel" value={...} onChange={...} />
<Input type="url" value={...} onChange={...} />
<Input type="search" value={...} onChange={...} />
```

### Validation States

```tsx
<Input value={...} onChange={...} state="warning" label="Warning" />
<Input value={...} onChange={...} state="error" label="Error" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **Required** | Input value |
| `onChange` | `ChangeEventHandler` | **Required** | Change handler |
| `type` | `InputType` | `'text'` | HTML input type |
| `label` | `string` | — | Label text above input |
| `icon` | `ReactNode` | — | Icon inside input |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `fullWidth` | `boolean` | `false` | Full container width |
| `disabled` | `boolean` | `false` | Disable input |
| `placeholder` | `string` | — | Placeholder text |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to input element |

### InputClassnames

```ts
type InputClassnames = {
  container?: string  // Outer container
  label?: string      // Label element
  wrapper?: string    // Input wrapper (border container)
  input?: string      // Input element itself
  icon?: string       // Icon wrapper
  toggle?: string     // Password visibility toggle
}
```

### Login Form Example

```tsx
function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        label="Email"
        icon={<Mail size={16} />}
        fullWidth
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        label="Password"
        icon={<Lock size={16} />}
        fullWidth
      />
      <Button type="submit" fullWidth>Sign in</Button>
    </form>
  )
}
```

---

## Checkbox

Checkbox with label, indeterminate state, and validation.

```tsx
import { Checkbox } from '@vacano/ui'
import type { CheckboxProps, CheckboxState } from '@vacano/ui'
```

### Basic Usage

```tsx
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Accept terms"
/>
```

### Indeterminate State

```tsx
const allChecked = items.every(item => item.checked)
const someChecked = items.some(item => item.checked)

<Checkbox
  checked={allChecked}
  indeterminate={someChecked && !allChecked}
  onChange={handleSelectAll}
  label="Select all"
/>
```

### Validation States

```tsx
<Checkbox checked={...} onChange={...} state="warning" label="Warning" />
<Checkbox checked={...} onChange={...} state="error" label="Required" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **Required** | Checked state |
| `onChange` | `ChangeEventHandler` | **Required** | Change handler |
| `label` | `string` | — | Label text |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable checkbox |

---

## Radio

Radio button with label and validation.

```tsx
import { Radio } from '@vacano/ui'
import type { RadioProps, RadioState } from '@vacano/ui'
```

### Basic Usage

```tsx
const [selected, setSelected] = useState('option1')

<Radio
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
  label="Option 1"
  name="options"
/>
<Radio
  checked={selected === 'option2'}
  onChange={() => setSelected('option2')}
  label="Option 2"
  name="options"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **Required** | Selected state |
| `onChange` | `ChangeEventHandler` | **Required** | Change handler |
| `label` | `string` | — | Label text |
| `name` | `string` | — | Radio group name |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable radio |

---

## Chip

Status chip/badge component.

```tsx
import { Chip } from '@vacano/ui'
import type { ChipProps, ChipStatus } from '@vacano/ui'
```

### Basic Usage

```tsx
<Chip status="neutral">Draft</Chip>
<Chip status="success">Active</Chip>
<Chip status="warning">Pending</Chip>
<Chip status="error">Failed</Chip>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'neutral' \| 'success' \| 'warning' \| 'error'` | `'neutral'` | Status variant |
| `fullWidth` | `boolean` | `false` | Full container width |
| `children` | `ReactNode` | — | Chip content |

---

## Select

Customizable select with search and virtualization.

```tsx
import { Select } from '@vacano/ui'
import type { SelectProps, SelectOption, SelectState, SelectPlacement } from '@vacano/ui'
```

### Basic Usage

```tsx
const [value, setValue] = useState<string>()

const options: SelectOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]

<Select
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select size..."
/>
```

### With Label and Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<Select
  options={countries}
  value={country}
  onChange={setCountry}
  icon={<Globe size={16} />}
  label="Country"
  placeholder="Select country..."
/>
```

### Searchable

```tsx
<Select
  options={countries}
  value={country}
  onChange={setCountry}
  searchable
  searchPlaceholder="Search countries..."
  label="Country"
/>
```

### Virtualized (for large lists)

```tsx
const manyOptions = Array.from({ length: 100000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

<Select
  options={manyOptions}
  value={value}
  onChange={setValue}
  virtualized
  searchable
  label="Large List"
/>
```

### Validation States

```tsx
<Select options={...} value={...} onChange={...} state="warning" label="Warning" />
<Select options={...} value={...} onChange={...} state="error" label="Error" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | **Required** | Options array |
| `value` | `string` | — | Selected value |
| `onChange` | `(value: string) => void` | — | Change handler |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `emptyMessage` | `string` | `'No options'` | Empty state text |
| `label` | `string` | — | Label text |
| `icon` | `ReactNode` | — | Icon in trigger |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable select |
| `fullWidth` | `boolean` | `false` | Full container width |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | `256` | Max dropdown height (px) |
| `virtualized` | `boolean` | `false` | Enable virtualization |
| `searchable` | `boolean` | `false` | Enable search |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target |

### SelectOption Type

```ts
type SelectOption = {
  label: string  // Display text
  value: string  // Value returned on select
}
```

---

## MultiSelect

Multi-select with chips, search, and virtualization.

```tsx
import { MultiSelect } from '@vacano/ui'
import type { MultiSelectProps, MultiSelectOption } from '@vacano/ui'
```

### Basic Usage

```tsx
const [values, setValues] = useState<string[]>([])

const options: MultiSelectOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]

<MultiSelect
  options={options}
  value={values}
  onChange={setValues}
  placeholder="Select sizes..."
/>
```

### With Label and Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<MultiSelect
  options={countries}
  value={selectedCountries}
  onChange={setSelectedCountries}
  icon={<Globe size={16} />}
  label="Countries"
/>
```

### Searchable and Virtualized

```tsx
<MultiSelect
  options={manyOptions}
  value={values}
  onChange={setValues}
  virtualized
  searchable
  searchPlaceholder="Search options..."
  label="Large List"
/>
```

### Behavior

- Selected values displayed as **removable chips**
- Click X on chip to remove
- **Backspace** removes last selected item
- Dropdown stays open after selection (unlike Select)

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MultiSelectOption[]` | **Required** | Options array |
| `value` | `string[]` | **Required** | Selected values |
| `onChange` | `(values: string[]) => void` | **Required** | Change handler |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `searchPlaceholder` | `string` | `'Search...'` | Search placeholder |
| `emptyMessage` | `string` | `'No options'` | Empty state text |
| `label` | `string` | — | Label text |
| `icon` | `ReactNode` | — | Icon in trigger |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable select |
| `fullWidth` | `boolean` | `false` | Full container width |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | `256` | Max dropdown height |
| `virtualized` | `boolean` | `false` | Enable virtualization |
| `searchable` | `boolean` | `false` | Enable search |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target |

---

## Dropdown

Generic dropdown container component.

```tsx
import { Dropdown } from '@vacano/ui'
import type { DropdownProps, DropdownPlacement, DropdownAlign } from '@vacano/ui'
```

### Basic Usage

```tsx
<Dropdown trigger={<Button>Open Menu</Button>}>
  <div style={{ padding: '8px' }}>
    <div>Menu Item 1</div>
    <div>Menu Item 2</div>
    <div>Menu Item 3</div>
  </div>
</Dropdown>
```

### Controlled State

```tsx
const [open, setOpen] = useState(false)

<Dropdown
  trigger={<Button>Toggle</Button>}
  open={open}
  onOpenChange={setOpen}
>
  <div style={{ padding: '8px' }}>
    Content
    <Button onClick={() => setOpen(false)}>Close</Button>
  </div>
</Dropdown>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | **Required** | Trigger element |
| `children` | `ReactNode` | **Required** | Dropdown content |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Vertical position |
| `align` | `'start' \| 'end'` | `'start'` | Horizontal alignment |
| `offset` | `number` | `4` | Distance from trigger (px) |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Open state callback |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target |
| `fullWidth` | `boolean` | `false` | Match trigger width |

---

## Spinner

Circular loading spinner.

```tsx
import { Spinner } from '@vacano/ui'
import type { SpinnerProps } from '@vacano/ui'
```

### Usage

```tsx
<Spinner />
<Spinner size={16} />  // Small
<Spinner size={24} />  // Default
<Spinner size={32} />  // Large
<Spinner size={48} />  // Extra large
<Spinner aria-label="Loading data" />  // Localized
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Spinner diameter (px) |
| `aria-label` | `string` | `'Loading'` | Screen reader text |

---

## Loader

Animated dots loading indicator.

```tsx
import { Loader } from '@vacano/ui'
import type { LoaderProps } from '@vacano/ui'
```

### Usage

```tsx
<Loader />
<Loader size={4} />   // Small dots
<Loader size={6} />   // Default
<Loader size={8} />   // Medium dots
<Loader size={10} />  // Large dots
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `6` | Dot diameter (px) |
| `aria-label` | `string` | `'Loading'` | Screen reader text |

---

# Molecules

## RadioGroup

Simplified group of radio buttons.

```tsx
import { RadioGroup } from '@vacano/ui'
import type { RadioGroupProps, RadioGroupOption } from '@vacano/ui'
```

### Usage

```tsx
const [size, setSize] = useState('md')

const options: RadioGroupOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]

<RadioGroup
  options={options}
  value={size}
  onChange={setSize}
  label="Size"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RadioGroupOption[]` | **Required** | Options array |
| `value` | `string` | **Required** | Selected value |
| `onChange` | `(value: string) => void` | **Required** | Change handler |
| `label` | `string` | — | Group label |
| `name` | `string` | — | HTML name attribute |
| `disabled` | `boolean` | `false` | Disable all radios |

---

## CheckboxGroup

Group of checkboxes for multiple selection.

```tsx
import { CheckboxGroup } from '@vacano/ui'
import type { CheckboxGroupProps, CheckboxGroupOption } from '@vacano/ui'
```

### Usage

```tsx
const [selected, setSelected] = useState<string[]>([])

const options: CheckboxGroupOption[] = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' },
]

<CheckboxGroup
  options={options}
  value={selected}
  onChange={setSelected}
  label="Notifications"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `CheckboxGroupOption[]` | **Required** | Options array |
| `value` | `string[]` | **Required** | Selected values |
| `onChange` | `(values: string[]) => void` | **Required** | Change handler |
| `label` | `string` | — | Group label |
| `disabled` | `boolean` | `false` | Disable all checkboxes |

---

## RadioCard

Radio with card styling for plan/option selection.

```tsx
import { RadioCard } from '@vacano/ui'
import type { RadioCardProps, RadioCardState } from '@vacano/ui'
```

### Usage

```tsx
const [plan, setPlan] = useState('basic')

<div style={{ display: 'flex', gap: '16px' }}>
  <RadioCard
    checked={plan === 'basic'}
    onChange={() => setPlan('basic')}
    label="Basic"
    description="$9/month"
    name="plan"
  />
  <RadioCard
    checked={plan === 'pro'}
    onChange={() => setPlan('pro')}
    label="Pro"
    description="$29/month"
    name="plan"
  />
</div>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **Required** | Selected state |
| `onChange` | `ChangeEventHandler` | **Required** | Change handler |
| `label` | `string` | **Required** | Card title |
| `description` | `string` | — | Description text |
| `name` | `string` | — | Radio group name |
| `fullWidth` | `boolean` | `false` | Full container width |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable card |

---

## CheckboxCard

Checkbox with card styling for feature toggles.

```tsx
import { CheckboxCard } from '@vacano/ui'
import type { CheckboxCardProps, CheckboxCardState } from '@vacano/ui'
```

### Usage

```tsx
const [features, setFeatures] = useState({
  darkMode: false,
  notifications: true,
})

<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <CheckboxCard
    checked={features.darkMode}
    onChange={(e) => setFeatures({ ...features, darkMode: e.target.checked })}
    label="Dark Mode"
    description="Use dark theme throughout the app"
    fullWidth
  />
  <CheckboxCard
    checked={features.notifications}
    onChange={(e) => setFeatures({ ...features, notifications: e.target.checked })}
    label="Notifications"
    description="Receive push notifications"
    fullWidth
  />
</div>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **Required** | Checked state |
| `onChange` | `ChangeEventHandler` | **Required** | Change handler |
| `label` | `string` | **Required** | Card title |
| `description` | `string` | — | Description text |
| `fullWidth` | `boolean` | `false` | Full container width |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable card |

---

# Icons

## Import

```tsx
import { Search, Settings, User, Bell } from '@vacano/ui/icons'
import type { IconLucideProps } from '@vacano/ui/icons'
```

## Usage

```tsx
// Basic
<Search />
<Settings size={16} />
<User size={24} />

// With color
<Heart color="red" />
<Star color="#ffd700" />

// With stroke width
<Search strokeWidth={1} />   // Thin
<Search strokeWidth={2} />   // Default
<Search strokeWidth={3} />   // Bold
```

## Props (IconLucideProps)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height (px) |
| `color` | `string` | `'currentColor'` | Stroke color |
| `strokeWidth` | `number` | `2` | Stroke width |
| `className` | `string` | — | CSS class |
| `style` | `CSSProperties` | — | Inline styles |

## Using with Components

```tsx
// Button with icon
<Button icon={<Search size={18} />}>Search</Button>

// Input with icon
<Input icon={<Mail size={16} />} value={...} onChange={...} />

// Icon-only button (needs aria-label)
<Button icon={<Settings size={18} />} aria-label="Settings" />
```

## Naming Convention

Icon names match Lucide in PascalCase:
- `arrow-right` → `ArrowRight`
- `chevron-down` → `ChevronDown`
- `file-text` → `FileText`
- `user-plus` → `UserPlus`

## Accessibility

```tsx
// Decorative (hidden from screen readers)
<Search size={24} />

// Meaningful icon
<Search size={24} aria-label="Search" role="img" />
```

## Bundle Size

Icons are tree-shakeable. Only imported icons are bundled (~300 bytes per icon).

---

# Complete Icon List (1894 icons)

```
AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity, ActivitySquare, AirVent, Airplay, AlarmCheck, AlarmClock, AlarmClockCheck, AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmMinus, AlarmPlus, AlarmSmoke, Album, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal, AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignJustify, AlignLeft, AlignRight, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Amphora, Anchor, Angry, Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, Archive, ArchiveRestore, ArchiveX, AreaChart, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownCircle, ArrowDownFromLine, ArrowDownLeft, ArrowDownLeftFromCircle, ArrowDownLeftFromSquare, ArrowDownLeftSquare, ArrowDownNarrowWide, ArrowDownRight, ArrowDownRightFromCircle, ArrowDownRightFromSquare, ArrowDownRightSquare, ArrowDownSquare, ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowLeft, ArrowLeftCircle, ArrowLeftFromLine, ArrowLeftRight, ArrowLeftSquare, ArrowLeftToLine, ArrowRight, ArrowRightCircle, ArrowRightFromLine, ArrowRightLeft, ArrowRightSquare, ArrowRightToLine, ArrowUp, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpCircle, ArrowUpDown, ArrowUpFromDot, ArrowUpFromLine, ArrowUpLeft, ArrowUpLeftFromCircle, ArrowUpLeftFromSquare, ArrowUpLeftSquare, ArrowUpNarrowWide, ArrowUpRight, ArrowUpRightFromCircle, ArrowUpRightFromSquare, ArrowUpRightSquare, ArrowUpSquare, ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowsUpFromLine, Asterisk, AsteriskSquare, AtSign, Atom, AudioLines, AudioWaveform, Award, Axe, Axis3d, Baby, Backpack, Badge, BadgeAlert, BadgeCent, BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeHelp, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus, BadgePercent, BadgePlus, BadgePoundSterling, BadgeQuestionMark, BadgeRussianRuble, BadgeSwissFranc, BadgeTurkishLira, BadgeX, BaggageClaim, Balloon, Ban, Banana, Bandage, Banknote, BanknoteArrowDown, BanknoteArrowUp, BanknoteX, BarChart, BarChart2, BarChart3, BarChart4, BarChartBig, BarChartHorizontal, BarChartHorizontalBig, Barcode, Barrel, Baseline, Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryPlus, BatteryWarning, Beaker, Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, Beer, BeerOff, Bell, BellDot, BellElectric, BellMinus, BellOff, BellPlus, BellRing, BetweenHorizonalEnd, BetweenHorizonalStart, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd, BetweenVerticalStart, BicepsFlexed, Bike, Binary, Binoculars, Biohazard, Bird, Birdhouse, Bitcoin, Blend, Blinds, Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bold, Bolt, Bomb, Bone, Book, BookA, BookAlert, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones, BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck, BookOpenText, BookPlus, BookSearch, BookTemplate, BookText, BookType, BookUp, BookUp2, BookUser, BookX, Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, BotOff, BottleWine, BowArrow, Box, BoxSelect, Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, BrickWallFire, BrickWallShield, Briefcase, BriefcaseBusiness, BriefcaseConveyorBelt, BriefcaseMedical, BringToFront, Brush, BrushCleaning, Bubbles, Bug, BugOff, BugPlay, Building, Building2, Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, Calendar, Calendar1, CalendarArrowDown, CalendarArrowUp, CalendarCheck, CalendarCheck2, CalendarClock, CalendarCog, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus, CalendarPlus2, CalendarRange, CalendarSearch, CalendarSync, CalendarX, CalendarX2, Calendars, Camera, CameraOff, CandlestickChart, Candy, CandyCane, CandyOff, Cannabis, CannabisOff, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan, CardSim, Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat, Cctv, ChartArea, ChartBar, ChartBarBig, ChartBarDecreasing, ChartBarIncreasing, ChartBarStacked, ChartCandlestick, ChartColumn, ChartColumnBig, ChartColumnDecreasing, ChartColumnIncreasing, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, ChartNoAxesGantt, ChartPie, ChartScatter, ChartSpline, Check, CheckCheck, CheckCircle, CheckCircle2, CheckLine, CheckSquare, CheckSquare2, ChefHat, Cherry, ChessBishop, ChessKing, ChessKnight, ChessPawn, ChessQueen, ChessRook, ChevronDown, ChevronDownCircle, ChevronDownSquare, ChevronFirst, ChevronLast, ChevronLeft, ChevronLeftCircle, ChevronLeftSquare, ChevronRight, ChevronRightCircle, ChevronRightSquare, ChevronUp, ChevronUpCircle, ChevronUpSquare, ChevronsDown, ChevronsDownUp, ChevronsLeft, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsRight, ChevronsRightLeft, ChevronsUp, ChevronsUpDown, Chrome, Chromium, Church, Cigarette, CigaretteOff, Circle, CircleAlert, CircleArrowDown, CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck, CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign, CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingArrowUp, CircleFadingPlus, CircleGauge, CircleHelp, CircleMinus, CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePile, CirclePlay, CirclePlus, CirclePoundSterling, CirclePower, CircleQuestionMark, CircleSlash, CircleSlash2, CircleSlashed, CircleSmall, CircleStar, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus, Clapperboard, Clipboard, ClipboardCheck, ClipboardClock, ClipboardCopy, ClipboardEdit, ClipboardList, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardSignature, ClipboardType, ClipboardX, Clock, Clock1, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, ClockAlert, ClockArrowDown, ClockArrowUp, ClockCheck, ClockFading, ClockPlus, ClosedCaption, Cloud, CloudAlert, CloudBackup, CloudCheck, CloudCog, CloudDownload, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind, CloudSnow, CloudSun, CloudSunRain, CloudSync, CloudUpload, Cloudy, Clover, Club, Code, Code2, CodeSquare, CodeXml, Codepen, Codesandbox, Coffee, Cog, Coins, Columns, Columns2, Columns3, Columns3Cog, Columns4, ColumnsSettings, Combine, Command, Compass, Component, Computer, ConciergeBell, Cone, Construction, Contact, Contact2, ContactRound, Container, Contrast, Cookie, CookingPot, Copy, CopyCheck, CopyMinus, CopyPlus, CopySlash, CopyX, Copyleft, Copyright, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreativeCommons, CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda, CurlyBraces, Currency, Cylinder, Dam, Database, DatabaseBackup, DatabaseZap, DecimalsArrowLeft, DecimalsArrowRight, Delete, Dessert, Diameter, Diamond, DiamondMinus, DiamondPercent, DiamondPlus, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff, Disc, Disc2, Disc3, DiscAlbum, Divide, DivideCircle, DivideSquare, Dna, DnaOff, Dock, Dog, DollarSign, Donut, DoorClosed, DoorClosedLocked, DoorOpen, Dot, DotSquare, Download, DownloadCloud, DraftingCompass, Drama, Dribbble, Drill, Drone, Droplet, DropletOff, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff, Earth, EarthLock, Eclipse, Edit, Edit2, Edit3, Egg, EggFried, EggOff, Ellipsis, EllipsisVertical, Equal, EqualApproximately, EqualNot, EqualSquare, Eraser, EthernetPort, Euro, EvCharger, Expand, ExternalLink, Eye, EyeClosed, EyeOff, Facebook, Factory, Fan, FastForward, Feather, Fence, FerrisWheel, Figma, File, FileArchive, FileAudio, FileAudio2, FileAxis3d, FileBadge, FileBadge2, FileBarChart, FileBarChart2, FileBox, FileBraces, FileBracesCorner, FileChartColumn, FileChartColumnIncreasing, FileChartLine, FileChartPie, FileCheck, FileCheck2, FileCheckCorner, FileClock, FileCode, FileCode2, FileCodeCorner, FileCog, FileCog2, FileDiff, FileDigit, FileDown, FileEdit, FileExclamationPoint, FileHeadphone, FileHeart, FileImage, FileInput, FileJson, FileJson2, FileKey, FileKey2, FileLineChart, FileLock, FileLock2, FileMinus, FileMinus2, FileMinusCorner, FileMusic, FileOutput, FilePen, FilePenLine, FilePieChart, FilePlay, FilePlus, FilePlus2, FilePlusCorner, FileQuestion, FileQuestionMark, FileScan, FileSearch, FileSearch2, FileSearchCorner, FileSignal, FileSignature, FileSliders, FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileText, FileType, FileType2, FileTypeCorner, FileUp, FileUser, FileVideo, FileVideo2, FileVideoCamera, FileVolume, FileVolume2, FileWarning, FileX, FileX2, FileXCorner, Files, Film, Filter, FilterX, Fingerprint, FingerprintPattern, FireExtinguisher, Fish, FishOff, FishSymbol, FishingHook, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame, FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderCog2, FolderDot, FolderDown, FolderEdit, FolderGit, FolderGit2, FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderMinus, FolderOpen, FolderOpenDot, FolderOutput, FolderPen, FolderPlus, FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX, Folders, Footprints, ForkKnife, ForkKnifeCrossed, Forklift, Form, FormInput, Forward, Frame, Framer, Frown, Fuel, Fullscreen, FunctionSquare, Funnel, FunnelPlus, FunnelX, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2, GamepadDirectional, GanttChart, GanttChartSquare, Gauge, GaugeCircle, Gavel, Gem, GeorgianLari, Ghost, Gift, GitBranch, GitBranchMinus, GitBranchPlus, GitCommit, GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitPullRequest, GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, Github, Gitlab, GlassWater, Glasses, Globe, Globe2, GlobeLock, Goal, Gpu, Grab, GraduationCap, Grape, Grid, Grid2x2, Grid2x2Check, Grid2x2Plus, Grid2x2X, Grid3x2, Grid3x3, Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hamburger, Hammer, Hand, HandCoins, HandFist, HandGrab, HandHeart, HandHelping, HandMetal, HandPlatter, Handbag, Handshake, HardDrive, HardDriveDownload, HardDriveUpload, HardHat, Hash, HatGlasses, Haze, Hd, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, HeadphoneOff, Headphones, Headset, Heart, HeartCrack, HeartHandshake, HeartMinus, HeartOff, HeartPlus, HeartPulse, Heater, Helicopter, HelpCircle, HelpingHand, Hexagon, Highlighter, History, Home, Hop, HopOff, Hospital, Hotel, Hourglass, House, HouseHeart, HousePlug, HousePlus, HouseWifi, IceCream, IceCream2, IceCreamBowl, IceCreamCone, IdCard, IdCardLanyard, Image, ImageDown, ImageMinus, ImageOff, ImagePlay, ImagePlus, ImageUp, ImageUpscale, Images, Import, Inbox, Indent, IndentDecrease, IndentIncrease, IndianRupee, Infinity, Info, Inspect, InspectionPanel, Instagram, Italic, IterationCcw, IterationCw, JapaneseYen, Joystick, Kanban, KanbanSquare, KanbanSquareDashed, Kayak, Key, KeyRound, KeySquare, Keyboard, KeyboardMusic, KeyboardOff, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot, Landmark, Languages, Laptop, Laptop2, LaptopMinimal, LaptopMinimalCheck, Lasso, LassoSelect, Laugh, Layers, Layers2, Layers3, LayersPlus, Layout, LayoutDashboard, LayoutGrid, LayoutList, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Lectern, LetterText, Library, LibraryBig, LibrarySquare, LifeBuoy, Ligature, Lightbulb, LightbulbOff, LineChart, LineSquiggle, Link, Link2, Link2Off, Linkedin, List, ListCheck, ListChecks, ListChevronsDownUp, ListChevronsUpDown, ListCollapse, ListEnd, ListFilter, ListFilterPlus, ListIndentDecrease, ListIndentIncrease, ListMinus, ListMusic, ListOrdered, ListPlus, ListRestart, ListStart, ListTodo, ListTree, ListVideo, ListX, Loader, Loader2, LoaderCircle, LoaderPinwheel, Locate, LocateFixed, LocateOff, LocationEdit, Lock, LockKeyhole, LockKeyholeOpen, LockOpen, LogIn, LogOut, Logs, Lollipop, Luggage, MSquare, Magnet, Mail, MailCheck, MailMinus, MailOpen, MailPlus, MailQuestion, MailQuestionMark, MailSearch, MailWarning, MailX, Mailbox, Mails, Map, MapMinus, MapPin, MapPinCheck, MapPinCheckInside, MapPinHouse, MapPinMinus, MapPinMinusInside, MapPinOff, MapPinPen, MapPinPlus, MapPinPlusInside, MapPinX, MapPinXInside, MapPinned, MapPlus, Mars, MarsStroke, Martini, Maximize, Maximize2, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Menu, MenuSquare, Merge, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestion, MessageCircleQuestionMark, MessageCircleReply, MessageCircleWarning, MessageCircleX, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareLock, MessageSquareMore, MessageSquareOff, MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare, Mic, Mic2, MicOff, MicVocal, Microchip, Microscope, Microwave, Milestone, Milk, MilkOff, Minimize, Minimize2, Minus, MinusCircle, MinusSquare, Monitor, MonitorCheck, MonitorCloud, MonitorCog, MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop, MonitorUp, MonitorX, Moon, MoonStar, MoreHorizontal, MoreVertical, Motorbike, Mountain, MountainSnow, Mouse, MouseOff, MousePointer, MousePointer2, MousePointer2Off, MousePointerBan, MousePointerClick, MousePointerSquareDashed, Move, Move3d, MoveDiagonal, MoveDiagonal2, MoveDown, MoveDownLeft, MoveDownRight, MoveHorizontal, MoveLeft, MoveRight, MoveUp, MoveUpLeft, MoveUpRight, MoveVertical, Music, Music2, Music3, Music4, Navigation, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper, Nfc, NonBinary, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut, NutOff, Octagon, OctagonAlert, OctagonMinus, OctagonPause, OctagonX, Omega, Option, Orbit, Origami, Outdent, Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush, Paintbrush2, PaintbrushVertical, Palette, Palmtree, Panda, PanelBottom, PanelBottomClose, PanelBottomDashed, PanelBottomInactive, PanelBottomOpen, PanelLeft, PanelLeftClose, PanelLeftDashed, PanelLeftInactive, PanelLeftOpen, PanelLeftRightDashed, PanelRight, PanelRightClose, PanelRightDashed, PanelRightInactive, PanelRightOpen, PanelTop, PanelTopBottomDashed, PanelTopClose, PanelTopDashed, PanelTopInactive, PanelTopOpen, PanelsLeftBottom, PanelsLeftRight, PanelsRightBottom, PanelsTopBottom, PanelsTopLeft, Paperclip, Parentheses, ParkingCircle, ParkingCircleOff, ParkingMeter, ParkingSquare, ParkingSquareOff, PartyPopper, Pause, PauseCircle, PauseOctagon, PawPrint, PcCase, Pen, PenBox, PenLine, PenOff, PenSquare, PenTool, Pencil, PencilLine, PencilOff, PencilRuler, Pentagon, Percent, PercentCircle, PercentDiamond, PercentSquare, PersonStanding, PhilippinePeso, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Pi, PiSquare, Piano, Pickaxe, PictureInPicture, PictureInPicture2, PieChart, PiggyBank, Pilcrow, PilcrowLeft, PilcrowRight, PilcrowSquare, Pill, PillBottle, Pin, PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Play, PlayCircle, PlaySquare, Plug, Plug2, PlugZap, PlugZap2, Plus, PlusCircle, PlusSquare, Pocket, PocketKnife, Podcast, Pointer, PointerOff, Popcorn, Popsicle, PoundSterling, Power, PowerCircle, PowerOff, PowerSquare, Presentation, Printer, PrinterCheck, Projector, Proportions, Puzzle, Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, Radio, RadioReceiver, RadioTower, Radius, RailSymbol, Rainbow, Rat, Ratio, Receipt, ReceiptCent, ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, ReceiptTurkishLira, RectangleCircle, RectangleEllipsis, RectangleGoggles, RectangleHorizontal, RectangleVertical, Recycle, Redo, Redo2, RedoDot, RefreshCcw, RefreshCcwDot, RefreshCw, RefreshCwOff, Refrigerator, Regex, RemoveFormatting, Repeat, Repeat1, Repeat2, Replace, ReplaceAll, Reply, ReplyAll, Rewind, Ribbon, Rocket, RockingChair, RollerCoaster, Rose, Rotate3d, RotateCcw, RotateCcwKey, RotateCcwSquare, RotateCw, RotateCwSquare, Route, RouteOff, Router, Rows, Rows2, Rows3, Rows4, Rss, Ruler, RulerDimensionLine, RussianRuble, Sailboat, Salad, Sandwich, Satellite, SatelliteDish, SaudiRiyal, Save, SaveAll, SaveOff, Scale, Scale3d, Scaling, Scan, ScanBarcode, ScanEye, ScanFace, ScanHeart, ScanLine, ScanQrCode, ScanSearch, ScanText, ScatterChart, School, School2, Scissors, ScissorsLineDashed, ScissorsSquare, ScissorsSquareDashedBottom, Scooter, ScreenShare, ScreenShareOff, Scroll, ScrollText, Search, SearchAlert, SearchCheck, SearchCode, SearchSlash, SearchX, Section, Send, SendHorizonal, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, Server, ServerCog, ServerCrash, ServerOff, Settings, Settings2, Shapes, Share, Share2, Sheet, Shell, Shield, ShieldAlert, ShieldBan, ShieldCheck, ShieldClose, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestion, ShieldQuestionMark, ShieldUser, ShieldX, Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead, Shredder, Shrimp, Shrink, Shrub, Shuffle, Sidebar, SidebarClose, SidebarOpen, Sigma, SigmaSquare, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Signature, Signpost, SignpostBig, Siren, SkipBack, SkipForward, Skull, Slack, Slash, SlashSquare, Slice, Sliders, SlidersHorizontal, SlidersVertical, Smartphone, SmartphoneCharging, SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, SoapDispenserDroplet, Sofa, SolarPanel, SortAsc, SortDesc, Soup, Space, Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline, SplinePointer, Split, SplitSquareHorizontal, SplitSquareVertical, Spool, Spotlight, SprayCan, Sprout, Square, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft, SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight, SquareAsterisk, SquareBottomDashedScissors, SquareChartGantt, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp, SquareCode, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDashedTopSolid, SquareDivide, SquareDot, SquareEqual, SquareFunction, SquareGanttChart, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer, SquareParking, SquareParkingOff, SquarePause, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus, SquarePower, SquareRadical, SquareRoundCorner, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareSquare, SquareStack, SquareStar, SquareStop, SquareTerminal, SquareUser, SquareUserRound, SquareX, SquaresExclude, SquaresIntersect, SquaresSubtract, SquaresUnite, Squircle, SquircleDashed, Squirrel, Stamp, Star, StarHalf, StarOff, Stars, StepBack, StepForward, Stethoscope, Sticker, StickyNote, Stone, StopCircle, Store, StretchHorizontal, StretchVertical, Strikethrough, Subscript, Subtitles, Sun, SunDim, SunMedium, SunMoon, SunSnow, Sunrise, Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableConfig, TableOfContents, TableProperties, TableRowsSplit, Tablet, TabletSmartphone, Tablets, Tag, Tags, Tally1, Tally2, Tally3, Tally4, Tally5, Tangent, Target, Telescope, Tent, TentTree, Terminal, TerminalSquare, TestTube, TestTube2, TestTubeDiagonal, TestTubes, Text, TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart, TextCursor, TextCursorInput, TextInitial, TextQuote, TextSearch, TextSelect, TextSelection, TextWrap, Theater, Thermometer, ThermometerSnowflake, ThermometerSun, ThumbsDown, ThumbsUp, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash, TicketX, Tickets, TicketsPlane, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Toilet, ToolCase, Toolbox, Tornado, Torus, Touchpad, TouchpadOff, TowerControl, ToyBrick, Tractor, TrafficCone, Train, TrainFront, TrainFrontTunnel, TrainTrack, TramFront, Transgender, Trash, Trash2, TreeDeciduous, TreePalm, TreePine, Trees, Trello, TrendingDown, TrendingUp, TrendingUpDown, Triangle, TriangleAlert, TriangleDashed, TriangleRight, Trophy, Truck, TruckElectric, TurkishLira, Turntable, Turtle, Tv, Tv2, TvMinimal, TvMinimalPlay, Twitch, Twitter, Type, TypeOutline, Umbrella, UmbrellaOff, Underline, Undo, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup, University, Unlink, Unlink2, Unlock, UnlockKeyhole, Unplug, Upload, UploadCloud, Usb, User, User2, UserCheck, UserCheck2, UserCircle, UserCircle2, UserCog, UserCog2, UserLock, UserMinus, UserMinus2, UserPen, UserPlus, UserPlus2, UserRound, UserRoundCheck, UserRoundCog, UserRoundMinus, UserRoundPen, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, UserSquare, UserSquare2, UserStar, UserX, UserX2, Users, Users2, UsersRound, Utensils, UtensilsCrossed, UtilityPole, Van, Variable, Vault, VectorSquare, Vegan, VenetianMask, Venus, VenusAndMars, Verified, Vibrate, VibrateOff, Video, VideoOff, Videotape, View, Voicemail, Volleyball, Volume, Volume1, Volume2, VolumeOff, VolumeX, Vote, Wallet, Wallet2, WalletCards, WalletMinimal, Wallpaper, Wand, Wand2, WandSparkles, Warehouse, WashingMachine, Watch, Waves, WavesArrowDown, WavesArrowUp, WavesLadder, Waypoints, Webcam, Webhook, WebhookOff, Weight, WeightTilde, Wheat, WheatOff, WholeWord, Wifi, WifiCog, WifiHigh, WifiLow, WifiOff, WifiPen, WifiSync, WifiZero, Wind, WindArrowDown, Wine, WineOff, Workflow, Worm, WrapText, Wrench, X, XCircle, XOctagon, XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut
```

---

# Links

- **Documentation:** https://ui.vacano.io
- **Storybook:** https://ui.vacano.io/storybook/
- **GitHub:** https://github.com/vacano-house/vacano-ui
- **Lucide Icons:** https://lucide.dev/icons

---

*Generated for AI agents. MIT License.*
