# SplitFlapText

Animated text component that simulates a split-flap (Solari board) display. When the `text` prop changes, each character position rapidly cycles through random characters before settling on the target character with a left-to-right cascade.

*Also known as: Solari board, flip board, departure board text, mechanical letter display*

<a href="/storybook/?path=/story/components-splitflaptext--playground" target="_blank">View in Storybook</a>

## When to use

- Animated text transitions for status messages, headings, or counters
- As part of loading/pending screens (see [PendingScreen](/components/pending-screen))
- Anywhere a mechanical, retro-futuristic text animation fits the UI

## When NOT to use

- For static text that never changes — no animation will play on initial render, use a regular element
- For rapidly changing text (updates faster than ~500ms) — animations will overlap and look chaotic

## Import

```tsx
import { SplitFlapText } from '@vacano/ui'
```

## Usage

The component renders text in a monospace font. On first render it displays the text immediately. Animation only triggers when the `text` prop value changes.

```tsx
<SplitFlapText text="Hello World" />
```

## Reacting to changes

The animation triggers automatically when the `text` prop changes. Each character position cycles through random Cyrillic/Latin/digit characters at 40ms intervals, then settles left-to-right with a 30ms stagger between positions.

```tsx
const [message, setMessage] = useState('Departing to New York')

<SplitFlapText text={message} />
<button onClick={() => setMessage('Arriving from London')}>Change</button>
```

## Fixed-width text

When cycling between strings of different lengths, the container width will shift. To prevent layout jumps, pad all strings to the same length:

```tsx
const maxLength = Math.max(...phrases.map(p => p.length))
const padded = phrase.padEnd(maxLength)

<SplitFlapText text={padded} />
```

## Animation timing

The animation has two phases per character position:

1. **Cycling** — random characters shown every 40ms
2. **Settling** — character locks to target after `200ms + (index * 30ms)`

For a 30-character string, the full animation completes in ~1100ms (`200 + 29 * 30`).

## Accessibility

The component sets `aria-hidden="true"` on its root element. When used inside an interactive context, wrap it with a screen-reader-friendly label:

```tsx
<div role="status">
  <SplitFlapText text={statusMessage} />
  <span className="sr-only">{statusMessage}</span>
</div>
```

[PendingScreen](/components/pending-screen) handles this automatically.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | *required* | Text to display. Animation triggers when this value changes. Initial render shows text immediately without animation. |
| `className` | `string` | `undefined` | CSS class name applied to the root `div` element. Merged with the internal `vacano_split-flap-text_container` class. |
| `ref` | `Ref<HTMLDivElement>` | `undefined` | Ref forwarded to the root `div` element |
| `data-test-id` | `string` | `undefined` | Test identifier attribute for automated testing |

::: info
SplitFlapText has an empty `classnames` type (`Record<string, never>`) — there are no sub-element class name slots. Style the root element via `className`.
:::

## Styling

The root element uses `white-space: pre` and monospace font stack (`SF Mono`, `Fira Code`, `Cascadia Code`, `JetBrains Mono`, `monospace`). Override via `className`:

```tsx
<SplitFlapText text="Custom styled" className="my-flap" />
```

```css
.my-flap {
  font-size: 24px;
  color: #0582ca;
}
```

## Related

- [PendingScreen](/components/pending-screen) - Loading screen that uses SplitFlapText internally with phrase rotation
