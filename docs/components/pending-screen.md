# PendingScreen

An engaging waiting screen with a split-flap display animation that cycles through entertaining phrases. Designed for long-running operations where a standard spinner fails to communicate that the system is still active. Uses [SplitFlapText](/components/split-flap-text) internally.

*Also known as: loading screen, wait screen, processing indicator, long-polling indicator*

<a href="/storybook/?path=/story/components-pendingscreen--playground" target="_blank">View in Storybook</a>

## When to use

- Long-running server requests (report generation, data import/export, heavy computations)
- Situations where a plain spinner may cause users to think the system is frozen
- Full-screen or section-level loading states that last more than a few seconds

## When NOT to use

- For short loading states (under 2-3 seconds), prefer [Spinner](/components/spinner) or [Skeleton](/components/skeleton)
- For determinate progress (known percentage), use [Progress](/components/progress)
- If you only need the text animation without the indicator/description, use [SplitFlapText](/components/split-flap-text) directly

## Import

```tsx
import { PendingScreen } from '@vacano/ui'
```

## Usage

With no props, displays 78 built-in space-themed phrases in Russian, cycling every 3.5 seconds in random non-repeating order.

```tsx
<PendingScreen />
```

## With description

A static description below the animated text provides context about what is happening:

```tsx
<PendingScreen description="Загрузка данных с сервера. Пожалуйста, не закрывайте страницу." />
```

## Custom phrases

Override the built-in phrases with your own array. All phrases are shown in random order without repeats until the full list is exhausted, then reshuffled.

```tsx
<PendingScreen
  phrases={[
    'Compiling shaders',
    'Loading textures',
    'Building scene graph',
    'Initializing renderer',
    'Connecting to server',
  ]}
/>
```

## Custom interval

Control how long each phrase is displayed before switching (in milliseconds):

```tsx
<PendingScreen interval={2000} />
```

## Full page example

```tsx
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <PendingScreen
        description="Generating your report. This usually takes a minute or two."
      />
    </div>
  )
}
```

## Phrase rotation behavior

- Phrases are shuffled using Fisher-Yates algorithm on mount
- The component walks through the entire shuffled list before reshuffling
- When reshuffling, the last shown phrase is guaranteed not to appear first in the new cycle
- With 78 built-in phrases at the default 3.5s interval, a full cycle takes ~4.5 minutes before any phrase repeats

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phrases` | `string[]` | 78 built-in phrases | Array of phrases to cycle through. All phrases are shown in random order before any repeats. |
| `interval` | `number` | `3500` | Time between phrase changes in milliseconds. Must be positive. |
| `description` | `string` | `undefined` | Optional static description text displayed below the animated board. |
| `className` | `string` | `undefined` | CSS class name applied to the root `div` element. Merged with the internal `vacano_pending-screen_container` class. |
| `classnames` | `PendingScreenClassNames` | `undefined` | Class names for sub-elements (see slots table below). |
| `ref` | `Ref<HTMLDivElement>` | `undefined` | Ref forwarded to the root `div` element. |
| `data-test-id` | `string` | `undefined` | Test identifier attribute for automated testing. |

### PendingScreenClassNames

```typescript
type PendingScreenClassNames = {
  board?: string
  description?: string
  indicator?: string
}
```

## Classname slots

| Slot | Element | Description |
|------|---------|-------------|
| `board` | `SplitFlapText` root | The animated split-flap text area. Passed as `className` to the internal `SplitFlapText` component. |
| `description` | `<p>` | The static description text below the board. |
| `indicator` | `<div>` | The animated orbital indicator (three dots) above the board. |

## Accessibility

The component sets `role="status"` on the root element for live region announcements. The animated board is `aria-hidden="true"` and a visually-hidden `<span>` provides the current phrase text to screen readers.

## Related

- [SplitFlapText](/components/split-flap-text) - The text animation component used internally. Use directly when you need the animation without phrase rotation.
- [Spinner](/components/spinner) - Simple loading indicator for short waits
- [Skeleton](/components/skeleton) - Placeholder shapes while content loads
- [Progress](/components/progress) - Determinate progress bar
- [EmptyState](/components/empty-state) - Empty content placeholder
