# Media

Responsive media query helpers for Emotion CSS-in-JS. Uses [BREAKPOINTS](/lib/constants#breakpoints) values.

*Also known as: responsive, breakpoints, media queries, responsive design, screen size, mobile first*

## When to use

- Use `mediaUp` for mobile-first responsive styles.
- Use `mediaDown` to target small screens.
- Use `mediaBetween` to target a specific range. For raw breakpoint values, see [BREAKPOINTS](/lib/constants#breakpoints).

## Import

```tsx
import { mediaUp, mediaDown, mediaBetween } from '@vacano/ui'
```

## mediaUp

Media query for screens **at or above** a breakpoint.

```tsx
import { mediaUp } from '@vacano/ui'
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 16px;

  ${mediaUp('md')} {
    padding: 24px;
  }

  ${mediaUp('lg')} {
    padding: 32px;
  }
`
```

Generates: `@media (min-width: 768px)`, `@media (min-width: 1024px)`

## mediaDown

Media query for screens **below** a breakpoint.

```tsx
import { mediaDown } from '@vacano/ui'
import styled from '@emotion/styled'

const Sidebar = styled.aside`
  width: 280px;

  ${mediaDown('md')} {
    display: none;
  }
`
```

Generates: `@media (max-width: 767px)`

## mediaBetween

Media query for screens **between** two breakpoints.

```tsx
import { mediaBetween } from '@vacano/ui'
import styled from '@emotion/styled'

const Layout = styled.div`
  ${mediaBetween('md', 'lg')} {
    grid-template-columns: 1fr 1fr;
  }
`
```

Generates: `@media (min-width: 768px) and (max-width: 1023px)`

## Breakpoint Values

| Key | `mediaUp` | `mediaDown` |
|-----|-----------|-------------|
| `sm` | `min-width: 640px` | `max-width: 639px` |
| `md` | `min-width: 768px` | `max-width: 767px` |
| `lg` | `min-width: 1024px` | `max-width: 1023px` |
| `xl` | `min-width: 1280px` | `max-width: 1279px` |
| `2xl` | `min-width: 1536px` | `max-width: 1535px` |

## Parameters

All functions accept a `Breakpoint` key: `'sm' | 'md' | 'lg' | 'xl' | '2xl'`

| Function | Params | Returns |
|----------|--------|---------|
| `mediaUp(bp)` | `bp: Breakpoint` | `@media (min-width: ...)` |
| `mediaDown(bp)` | `bp: Breakpoint` | `@media (max-width: ...)` |
| `mediaBetween(min, max)` | `min: Breakpoint, max: Breakpoint` | `@media (min-width: ...) and (max-width: ...)` |

## Related

- [Constants — BREAKPOINTS](/lib/constants#breakpoints) - Raw breakpoint values
