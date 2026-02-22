# Colors

HEX color manipulation utilities.

*Also known as: color utils, hex utils, opacity, transparency, alpha channel, color helpers*

## When to use

- Use `alpha` to add transparency to HEX colors in styled components.
- Use `isValid` to validate user-provided color values.
- Use `toHEX` to convert percentage values to HEX. For the color palette, see [COLORS](/lib/constants#colors).

## Import

```tsx
import { alpha, toHEX, isValid } from '@vacano/ui'
```

## alpha

Applies alpha transparency to a HEX color. Strips any existing alpha channel from the input before appending the new one.

```tsx
import { alpha } from '@vacano/ui'

alpha('#C1121F', 50)  // → '#C1121F80'
alpha('#212529', 10)  // → '#2125291A'
alpha('#16a34a', 100) // → '#16a34aFF'
alpha('#16a34a', 0)   // → '#16a34a00'
alpha('invalid', 50)  // → '#000000FF' (fallback for invalid input)
```

| Param | Type | Description |
|-------|------|-------------|
| `hexColor` | `string` | HEX color string with `#` prefix (e.g. `#FF0000`, `#ff0000FF`). Validated via `isValid()`. Only the first 6 hex characters (after `#`) are used; any existing alpha suffix is stripped. |
| `percentage` | `number` | Opacity from 0 (fully transparent) to 100 (fully opaque). Converted to HEX via `toHEX()`. |

**Returns:** `string` — 8-character HEX color with alpha channel (e.g. `#RRGGBBAA`). Returns `#000000FF` if the input `hexColor` fails `isValid()` validation.

## toHEX

Converts a percentage (0-100) to a two-character HEX string. Values outside 0-100 are clamped.

```tsx
import { toHEX } from '@vacano/ui'

toHEX(100) // → 'ff'
toHEX(50)  // → '80'
toHEX(0)   // → '00'
toHEX(150) // → 'ff' (clamped to 100)
toHEX(-10) // → '00' (clamped to 0)
```

| Param | Type | Description |
|-------|------|-------------|
| `n` | `number` | Percentage value from 0 to 100. Clamped via `Math.max(0, Math.min(100, n))`. |

**Returns:** `string` — Two-character HEX string (lowercase). The value is computed as `Math.round((clamped / 100) * 255)` then converted to base-16.

## isValid

Validates a HEX color string. Supports 3, 4, 6, and 8 character hex formats (case-insensitive).

**Pattern:** `/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i`

```tsx
import { isValid } from '@vacano/ui'

isValid('#FF0000')   // → true   (6-char RGB)
isValid('#ff0')      // → true   (3-char shorthand)
isValid('#ff00')     // → true   (4-char shorthand with alpha)
isValid('#FF0000FF') // → true   (8-char RGBA)
isValid('red')       // → false  (named color)
isValid('#GGG')      // → false  (invalid hex chars)
isValid('FF0000')    // → false  (missing # prefix)
```

| Param | Type | Description |
|-------|------|-------------|
| `hexColor` | `string` | String to validate. Must start with `#` followed by 3, 4, 6, or 8 hex characters. |

**Returns:** `boolean` -- `true` if the string is a valid HEX color.

## Related

- [Constants — COLORS](/lib/constants#colors) - Design system color palette
