# Platform

OS and browser detection utilities based on `navigator.userAgent`.

*Also known as: os detection, browser detection, user agent, device detection, platform check, operating system*

## When to use

- Use `getOperatingSystem` to adapt UI for different platforms (e.g. showing ⌘ on macOS, Ctrl on Windows).
- Use `getBrowser` to work around browser-specific quirks. Both functions are SSR-safe.

## Import

```tsx
import { getOperatingSystem, getBrowser } from '@vacano/ui'
```

## getOperatingSystem

Detects the current operating system from `navigator.userAgent`.

```tsx
import { getOperatingSystem } from '@vacano/ui'

const os = getOperatingSystem()
// → 'macos' | 'windows' | 'linux' | 'ios' | 'android' | 'unknown'
```

**Parameters:** none

**Returns:** `OperatingSystem`

Detection order (first match wins):

| Check order | Regex | Returns |
|-------------|-------|---------|
| 1 | `/iphone\|ipad\|ipod/` | `'ios'` |
| 2 | `/android/` | `'android'` |
| 3 | `/mac/` | `'macos'` |
| 4 | `/win/` | `'windows'` |
| 5 | `/linux/` | `'linux'` |
| fallback | -- | `'unknown'` |

## getBrowser

Detects the current browser from `navigator.userAgent`.

```tsx
import { getBrowser } from '@vacano/ui'

const browser = getBrowser()
// → 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'unknown'
```

**Parameters:** none

**Returns:** `Browser`

Detection order (first match wins, order matters because Chrome UA includes "safari" and Edge UA includes "chrome"):

| Check order | Regex | Returns |
|-------------|-------|---------|
| 1 | `/edg/` | `'edge'` |
| 2 | `/opr\|opera/` | `'opera'` |
| 3 | `/chrome/` | `'chrome'` |
| 4 | `/safari/` | `'safari'` |
| 5 | `/firefox/` | `'firefox'` |
| fallback | -- | `'unknown'` |

## SSR Safety

Both functions check `typeof navigator === 'undefined'` and return `'unknown'` when `navigator` is not available (server-side rendering).

## Related

- [Keyboard](/lib/keyboard) - Uses OS detection for platform-specific key symbols
- [Types](/lib/types) - `OperatingSystem` and `Browser` type definitions
