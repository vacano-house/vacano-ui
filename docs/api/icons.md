# Icons API

TypeScript types for Lucide icons.

## Import

```tsx
import { Search, Settings, User } from '@vacano/ui/icons'
import type { IconLucideProps } from '@vacano/ui/icons'
```

## Types

### IconLucideProps

```ts
type IconLucideProps = HTMLAttributes<SVGElement> & {
  size?: number
}
```

Props accepted by all icon components.

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `size` | `number` | No | `24` | Icon width and height in pixels |
| `color` | `string` | No | `'currentColor'` | Stroke color (inherited from CSS) |
| `strokeWidth` | `number` | No | `2` | Stroke width |
| `className` | `string` | No | — | Additional CSS class |
| `style` | `CSSProperties` | No | — | Inline styles |

Plus all standard `HTMLAttributes<SVGElement>` props.

## Examples

### Basic Usage

```tsx
import { Search, Settings, User, Bell } from '@vacano/ui/icons'

<Search />
<Settings />
<User />
<Bell />
```

### With Size

```tsx
import { Search } from '@vacano/ui/icons'

<Search size={16} />  // Small
<Search size={24} />  // Default
<Search size={32} />  // Large
<Search size={48} />  // Extra large
```

### With Color

```tsx
import { Heart, Star } from '@vacano/ui/icons'

// Inherits from parent
<div style={{ color: 'red' }}>
  <Heart size={24} />
</div>

// Explicit color
<Star size={24} color="#ffd700" />
<Star size={24} color="var(--primary-color)" />
```

### With Type Annotations

```tsx
import { Search } from '@vacano/ui/icons'
import type { IconLucideProps } from '@vacano/ui/icons'

const MyIcon = (props: IconLucideProps) => {
  return <Search {...props} />
}

// Or with explicit props
const iconProps: IconLucideProps = {
  size: 24,
  className: 'my-icon',
}

<Search {...iconProps} />
```

### In Components

```tsx
import { Button, Input } from '@vacano/ui'
import { Search, Download, Mail } from '@vacano/ui/icons'
import type { ReactNode } from 'react'

// Button with icon
const icon: ReactNode = <Search size={18} />
<Button icon={icon}>Search</Button>

// Input with icon
<Input
  value={value}
  onChange={onChange}
  icon={<Mail size={16} />}
/>
```

### Icon-Only Button

```tsx
import { Button } from '@vacano/ui'
import { Plus, X, Settings } from '@vacano/ui/icons'

<Button icon={<Plus size={18} />} aria-label="Add item" />
<Button icon={<X size={18} />} aria-label="Close" />
<Button icon={<Settings size={18} />} aria-label="Settings" />
```

## Available Icons

Vacano UI includes all 1500+ icons from the [Lucide](https://lucide.dev) icon library.

Browse all icons at [lucide.dev/icons](https://lucide.dev/icons).

### Naming Convention

Icon names match Lucide's naming in PascalCase:

| Lucide Name | Import Name |
|-------------|-------------|
| `arrow-right` | `ArrowRight` |
| `chevron-down` | `ChevronDown` |
| `file-text` | `FileText` |
| `user-plus` | `UserPlus` |
| `settings-2` | `Settings2` |

### Common Icons

```tsx
import {
  // Navigation
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,

  // Actions
  Plus,
  Minus,
  Edit,
  Trash,
  Download,
  Upload,
  Copy,
  Save,

  // Communication
  Mail,
  MessageCircle,
  Bell,
  Phone,

  // User
  User,
  Users,
  UserPlus,
  LogIn,
  LogOut,

  // Media
  Image,
  Video,
  Music,
  File,
  Folder,

  // UI
  Search,
  Settings,
  Home,
  Star,
  Heart,
  Check,
  AlertCircle,
  Info,
} from '@vacano/ui/icons'
```

## Accessibility

Icons are decorative by default. For meaningful icons, add accessibility attributes:

```tsx
// Decorative (hidden from screen readers)
<Search size={24} />

// Meaningful icon
<Search size={24} aria-label="Search" role="img" />

// Icon with visible text (icon is decorative)
<Button icon={<Search size={18} />}>Search</Button>

// Icon-only button (needs aria-label)
<Button icon={<Search size={18} />} aria-label="Search" />
```

## See Also

- [Icons Guide](/guide/icons) — Complete icons usage guide
- [Button](/api/button) — Button with icon support
- [Input](/api/input) — Input with icon support
