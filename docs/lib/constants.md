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

// COLORS.black      → '#212529'
// COLORS.white      → '#ffffff'
// COLORS.red        → '#C1121F'
// COLORS.green      → '#16a34a'
// COLORS.yellow     → '#ffb703'
// COLORS.gray       → '#e5e7eb'
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

| Key | Description |
|-----|-------------|
| `rotate` | Full 360-degree rotation |
| `fadeIn` | Fade in (opacity 0 → 1) |
| `fadeOut` | Fade out (opacity 1 → 0) |
| `slideInLeft` | Slide in from left |
| `slideOutLeft` | Slide out to left |
| `slideInRight` | Slide in from right |
| `slideOutRight` | Slide out to right |
| `slideInTop` | Slide in from top |
| `slideOutTop` | Slide out to top |
| `slideInBottom` | Slide in from bottom |
| `slideOutBottom` | Slide out to bottom |
| `scaleIn` | Scale in with fade (0.95 → 1) |
| `slideInTopFade` | Slide in from top with fade |
| `slideOutTopFade` | Slide out to top with fade |
| `slideInBottomFade` | Slide in from bottom with fade |
| `slideOutBottomFade` | Slide out to bottom with fade |

## KEY_SYMBOLS

Keyboard key to display symbol mappings. Platform-aware (macOS vs other). Used by [getKeySymbols](/lib/keyboard).

```tsx
import { KEY_SYMBOLS } from '@vacano/ui'

// KEY_SYMBOLS.Meta    → { mac: '⌘', other: 'Win' }
// KEY_SYMBOLS.Control → { mac: '⌃', other: 'Ctrl' }
// KEY_SYMBOLS.Alt     → { mac: '⌥', other: 'Alt' }
// KEY_SYMBOLS.Shift   → { mac: '⇧', other: '⇧' }
```

| Key | macOS | Other |
|-----|-------|-------|
| `Meta` | ⌘ | Win |
| `Control` | ⌃ | Ctrl |
| `Alt` | ⌥ | Alt |
| `Shift` | ⇧ | ⇧ |
| `ArrowUp` | ↑ | ↑ |
| `ArrowDown` | ↓ | ↓ |
| `ArrowLeft` | ← | ← |
| `ArrowRight` | → | → |
| `Enter` | Enter | Enter |
| `Backspace` | ⌫ | ⌫ |
| `Delete` | ⌦ | ⌦ |
| `Escape` | Esc | Esc |
| `Tab` | ⇥ | ⇥ |
| `' '` (Space) | ␣ | ␣ |

## Related

- [Colors](/lib/colors) - Color manipulation utilities
- [Media](/lib/media) - Media query helpers using BREAKPOINTS
- [Keyboard](/lib/keyboard) - Symbol resolution using KEY_SYMBOLS
