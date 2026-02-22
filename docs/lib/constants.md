# Constants

Shared design tokens and configuration values.

*Also known as: tokens, design tokens, config, theme values, variables*

## When to use

- Use `BREAKPOINTS` with [media query helpers](/lib/media) for responsive design.
- Use `COLORS` for consistent color palette across your app. For color manipulation, see [Colors](/lib/colors).
- Use `KEYFRAMES` with Emotion for reusable animations.
- Use `KEY_SYMBOLS` with [getKeySymbols](/lib/keyboard) for keyboard shortcut display.

## Import

```tsx
import { BREAKPOINTS, COLORS, KEYFRAMES, KEY_SYMBOLS } from '@vacano/ui'
```

All constants are declared with `as const` for literal type inference.

## BREAKPOINTS

Responsive breakpoint values in pixels. Used by [mediaUp, mediaDown, mediaBetween](/lib/media).

```tsx
import { BREAKPOINTS } from '@vacano/ui'

// BREAKPOINTS.sm   → 640
// BREAKPOINTS.md   → 768
// BREAKPOINTS.lg   → 1024
// BREAKPOINTS.xl   → 1280
// BREAKPOINTS['2xl'] → 1536
```

| Key | Value |
|-----|-------|
| `sm` | `640` |
| `md` | `768` |
| `lg` | `1024` |
| `xl` | `1280` |
| `2xl` | `1536` |

## COLORS

Design system color palette.

```tsx
import { COLORS } from '@vacano/ui'

// COLORS.black              → '#212529'
// COLORS.white              → '#ffffff'
// COLORS.red                → '#C1121F'
// COLORS.green              → '#16a34a'
// COLORS.yellow             → '#ffb703'
// COLORS.gray               → '#e5e7eb'
// COLORS['steel-blue']      → '#0582ca'
// COLORS['iron-grey']       → '#495057'
// COLORS['baltic-blue']     → '#1e6091'
```

| Key | Value |
|-----|-------|
| `black` | `#212529` |
| `white` | `#ffffff` |
| `red` | `#C1121F` |
| `green` | `#16a34a` |
| `yellow` | `#ffb703` |
| `gray` | `#e5e7eb` |
| `steel-blue` | `#0582ca` |
| `iron-grey` | `#495057` |
| `baltic-blue` | `#1e6091` |

## KEYFRAMES

Reusable Emotion CSS keyframe animations.

```tsx
import { KEYFRAMES } from '@vacano/ui'
import { css } from '@emotion/react'

const fadeInStyle = css`
  animation: ${KEYFRAMES.fadeIn} 200ms ease-out;
`
```

Each value is an Emotion `keyframes` object (created with `keyframes` from `@emotion/react`). Use directly in `animation` properties within Emotion `css` or `styled` calls.

| Key | Description | CSS transform/opacity |
|-----|-------------|----------------------|
| `rotate` | Full 360-degree rotation | `to { transform: rotate(1turn) }` |
| `fadeIn` | Fade in | `from { opacity: 0 } to { opacity: 1 }` |
| `fadeOut` | Fade out | `from { opacity: 1 } to { opacity: 0 }` |
| `slideInLeft` | Slide in from left | `from { translateX(-100%) } to { translateX(0) }` |
| `slideOutLeft` | Slide out to left | `from { translateX(0) } to { translateX(-100%) }` |
| `slideInRight` | Slide in from right | `from { translateX(100%) } to { translateX(0) }` |
| `slideOutRight` | Slide out to right | `from { translateX(0) } to { translateX(100%) }` |
| `slideInTop` | Slide in from top | `from { translateY(-100%) } to { translateY(0) }` |
| `slideOutTop` | Slide out to top | `from { translateY(0) } to { translateY(-100%) }` |
| `slideInBottom` | Slide in from bottom | `from { translateY(100%) } to { translateY(0) }` |
| `slideOutBottom` | Slide out to bottom | `from { translateY(0) } to { translateY(100%) }` |
| `scaleIn` | Scale in with fade | `from { opacity: 0; scale(0.95) } to { opacity: 1; scale(1) }` |
| `slideInTopFade` | Slide in from top with fade | `from { opacity: 0; translateY(-100%) } to { opacity: 1; translateY(0) }` |
| `slideOutTopFade` | Slide out to top with fade | `from { opacity: 1; translateY(0) } to { opacity: 0; translateY(-100%) }` |
| `slideInBottomFade` | Slide in from bottom with fade | `from { opacity: 0; translateY(100%) } to { opacity: 1; translateY(0) }` |
| `slideOutBottomFade` | Slide out to bottom with fade | `from { opacity: 1; translateY(0) } to { opacity: 0; translateY(100%) }` |

## KEY_SYMBOLS

Keyboard key to display symbol mappings. Platform-aware (macOS vs other). Used by [getKeySymbols](/lib/keyboard).

```tsx
import { KEY_SYMBOLS } from '@vacano/ui'

// KEY_SYMBOLS.Meta    → { mac: '⌘', other: 'Win' }
// KEY_SYMBOLS.Control → { mac: '⌃', other: 'Ctrl' }
// KEY_SYMBOLS.Alt     → { mac: '⌥', other: 'Alt' }
// KEY_SYMBOLS.Shift   → { mac: '⇧', other: '⇧' }
```

The type is `Partial<Record<KeyboardEventKey, { mac: string; other: string }>>`. Only the keys listed below have symbol mappings; all other `KeyboardEventKey` values (letters, digits, function keys, punctuation, numpad) are returned as-is by [getKeySymbols](/lib/keyboard).

| Key | macOS | Other | Category |
|-----|-------|-------|----------|
| `Meta` | ⌘ | Win | Modifier |
| `Control` | ⌃ | Ctrl | Modifier |
| `Alt` | ⌥ | Alt | Modifier |
| `Shift` | ⇧ | ⇧ | Modifier |
| `ArrowUp` | ↑ | ↑ | Navigation |
| `ArrowDown` | ↓ | ↓ | Navigation |
| `ArrowLeft` | ← | ← | Navigation |
| `ArrowRight` | → | → | Navigation |
| `Home` | ↖ | ↖ | Navigation |
| `End` | ↘ | ↘ | Navigation |
| `PageUp` | ⇞ | ⇞ | Navigation |
| `PageDown` | ⇟ | ⇟ | Navigation |
| `' '` (Space) | ␣ | ␣ | Whitespace |
| `Enter` | Enter | Enter | Whitespace |
| `Tab` | ⇥ | ⇥ | Whitespace |
| `Backspace` | ⌫ | ⌫ | Editing |
| `Delete` | ⌦ | ⌦ | Editing |
| `Escape` | Esc | Esc | Editing |
| `Insert` | Ins | Ins | Editing |
| `CapsLock` | ⇪ | ⇪ | System |
| `NumLock` | ⇭ | ⇭ | System |

## Related

- [Colors](/lib/colors) - Color manipulation utilities
- [Media](/lib/media) - Media query helpers using BREAKPOINTS
- [Keyboard](/lib/keyboard) - Symbol resolution using KEY_SYMBOLS
