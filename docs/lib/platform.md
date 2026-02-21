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

Detects the current operating system.

```tsx
import { getOperatingSystem } from '@vacano/ui'

const os = getOperatingSystem()
// → 'macos' | 'windows' | 'linux' | 'ios' | 'android' | 'unknown'
```

**Returns:** `OperatingSystem`

| Value | Platform |
|-------|----------|
| `'macos'` | macOS |
| `'windows'` | Windows |
| `'linux'` | Linux |
| `'ios'` | iPhone, iPad, iPod |
| `'android'` | Android |
| `'unknown'` | SSR or unrecognized |

## getBrowser

Detects the current browser.

```tsx
import { getBrowser } from '@vacano/ui'

const browser = getBrowser()
// → 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'unknown'
```

**Returns:** `Browser`

| Value | Browser |
|-------|---------|
| `'chrome'` | Google Chrome |
| `'firefox'` | Mozilla Firefox |
| `'safari'` | Apple Safari |
| `'edge'` | Microsoft Edge |
| `'opera'` | Opera |
| `'unknown'` | SSR or unrecognized |

## SSR Safety

Both functions return `'unknown'` when `navigator` is not available (server-side rendering).

## Related

- [Keyboard](/lib/keyboard) - Uses OS detection for platform-specific key symbols
- [Types](/lib/types) - `OperatingSystem` and `Browser` type definitions
