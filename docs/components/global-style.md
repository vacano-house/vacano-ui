# GlobalStyle

Global CSS reset and base styles component.

<a href="https://ui.vacano.io/components/?path=/docs/global-globalstyle--docs" target="_blank">View in Storybook</a>

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
- Inter font family
- Base text styles
- Focus visible styles
- Smooth scrolling

## Font Loading

GlobalStyle includes the Inter font. Make sure to preload it in your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

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
