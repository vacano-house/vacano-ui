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

Applies alpha transparency to a HEX color.

```tsx
import { alpha } from '@vacano/ui'

alpha('#C1121F', 50)  // → '#C1121F80'
alpha('#212529', 10)  // → '#2125291A'
alpha('#16a34a', 100) // → '#16a34aFF'
alpha('#16a34a', 0)   // → '#16a34a00'
```

| Param | Type | Description |
|-------|------|-------------|
| `hexColor` | `string` | HEX color (e.g. `#FF0000`) |
| `percentage` | `number` | Opacity from 0 to 100 |

**Returns:** `string` — HEX color with alpha channel. Returns `#000000FF` if input color is invalid.

## toHEX

Converts a percentage (0–100) to a two-character HEX string.

```tsx
import { toHEX } from '@vacano/ui'

toHEX(100) // → 'ff'
toHEX(50)  // → '80'
toHEX(0)   // → '00'
```

| Param | Type | Description |
|-------|------|-------------|
| `n` | `number` | Value from 0 to 100 |

**Returns:** `string` — Two-character HEX string.

## isValid

Validates a HEX color string. Supports 3, 4, 6, and 8 character formats.

```tsx
import { isValid } from '@vacano/ui'

isValid('#FF0000')   // → true
isValid('#ff0')      // → true  (shorthand)
isValid('#FF0000FF') // → true  (with alpha)
isValid('red')       // → false
isValid('#GGG')      // → false
```

| Param | Type | Description |
|-------|------|-------------|
| `hexColor` | `string` | String to validate |

**Returns:** `boolean`

## Related

- [Constants — COLORS](/lib/constants#colors) - Design system color palette
