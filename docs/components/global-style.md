# GlobalStyle

Global CSS reset and base styles component.

*Also known as: CSS reset, base styles, global CSS, theme provider*


## When to use

- Always wrap your app with GlobalStyle. It provides CSS reset, Inter font, and base styles. Required for all Vacano UI components.

## Import

```tsx
import { GlobalStyle } from '@vacano/ui'
```

## Usage

Add to the root of your application:

```tsx
import { GlobalStyle } from '@vacano/ui'

function App() {
  return (
    <>
      <GlobalStyle />
      <YourApp />
    </>
  )
}
```

## What It Includes

The GlobalStyle component applies:

- CSS reset (box-sizing, margin, padding)
- System font stack (GitHub-style)
- Base text styles
- Focus visible styles

## With Emotion

If you're using Emotion, GlobalStyle works seamlessly:

```tsx
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@vacano/ui'

function App() {
  return (
    <ThemeProvider theme={yourTheme}>
      <GlobalStyle />
      <YourApp />
    </ThemeProvider>
  )
}
```

## Notes

- Should be rendered once at the root level
- Does not accept any props
- Applies styles globally to the document
