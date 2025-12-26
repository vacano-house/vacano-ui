# Icons

Vacano UI includes a complete icon set powered by [Lucide](https://lucide.dev/) — a beautiful, consistent, and open-source icon library with 1500+ icons.

## Installation

Icons are included in the `@vacano/ui` package. No additional installation required.

## Importing Icons

Icons are exported from a separate entry point for optimal tree-shaking. Only icons you actually import will be included in your bundle:

```tsx
import { Search, Settings, User, Bell } from '@vacano/ui/icons'
```

## Basic Usage

```tsx
import { Search, Settings } from '@vacano/ui/icons'

function MyComponent() {
  return (
    <div>
      <Search size={24} />
      <Settings size={24} />
    </div>
  )
}
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon width and height in pixels |
| `color` | `string` | `currentColor` | Icon stroke color |
| `strokeWidth` | `number` | `2` | Stroke width |
| `className` | `string` | — | CSS class name |
| `style` | `CSSProperties` | — | Inline styles |

### Size

```tsx
<Search size={16} />  // Small
<Search size={24} />  // Default
<Search size={32} />  // Large
```

### Color

Icons inherit color from their parent by default (`currentColor`). You can override this:

```tsx
// Inherits from parent
<div style={{ color: 'blue' }}>
  <Search size={24} />
</div>

// Explicit color
<Search size={24} color="#ff0000" />
<Search size={24} color="var(--primary-color)" />
```

### Stroke Width

```tsx
<Search size={24} strokeWidth={1} />   // Thin
<Search size={24} strokeWidth={2} />   // Default
<Search size={24} strokeWidth={3} />   // Bold
```

## Using with Components

### Button with Icon

```tsx
import { Button } from '@vacano/ui'
import { Search, Download, Plus } from '@vacano/ui/icons'

function MyButtons() {
  return (
    <>
      <Button icon={<Search size={18} />}>Search</Button>
      <Button icon={<Download size={18} />}>Download</Button>
      <Button icon={<Plus size={18} />} />  {/* Icon-only button */}
    </>
  )
}
```

### Input with Icon

```tsx
import { Input } from '@vacano/ui'
import { Search, Mail, Lock } from '@vacano/ui/icons'

function MyInputs() {
  return (
    <>
      <Input
        icon={<Search size={16} />}
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <Input
        icon={<Mail size={16} />}
        type="email"
        placeholder="Email"
        value=""
        onChange={() => {}}
      />
      <Input
        icon={<Lock size={16} />}
        type="password"
        placeholder="Password"
        value=""
        onChange={() => {}}
      />
    </>
  )
}
```

## Accessibility

Icons are decorative by default and hidden from screen readers. If an icon conveys meaning, add an `aria-label`:

```tsx
// Decorative icon (hidden from screen readers)
<Search size={24} />

// Meaningful icon
<Search size={24} aria-label="Search" role="img" />
```

When using icons inside buttons, the button's text provides the accessible name:

```tsx
// Text provides accessibility
<Button icon={<Search size={18} />}>Search</Button>

// Icon-only button needs aria-label
<Button icon={<Search size={18} />} aria-label="Search" />
```

## Finding Icons

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons).

Icon names in Vacano UI match Lucide's naming convention in PascalCase:
- `arrow-right` → `ArrowRight`
- `chevron-down` → `ChevronDown`
- `file-text` → `FileText`

## TypeScript

### IconLucideProps

```ts
type IconLucideProps = HTMLAttributes<SVGElement> & {
  size?: number
}
```

## License

Lucide icons are licensed under the [ISC License](https://github.com/lucide-icons/lucide/blob/main/LICENSE) — free for personal and commercial use.

## Bundle Size

Icons are tree-shakeable. If you only import 10 icons, only those 10 icons are included in your bundle.

```tsx
// Only Search and Settings are bundled
import { Search, Settings } from '@vacano/ui/icons'
```

The main `@vacano/ui` bundle (without icons) is ~62 KB. Icons add ~300 bytes per icon on average.
