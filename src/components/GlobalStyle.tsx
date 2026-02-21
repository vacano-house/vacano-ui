import { css, Global } from '@emotion/react'

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
  }

  body {
    min-height: 100vh;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Tabular figures for numbers in data contexts */
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  /* Proportional figures for running text */
  .proportional-nums {
    font-variant-numeric: proportional-nums;
  }

  /* Selection styling */
  ::selection {
    background-color: rgba(0, 122, 255, 0.25);
  }

  /* Focus visible for accessibility */
  :focus-visible {
    outline: 2px solid rgba(0, 122, 255, 0.5);
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`

export const GlobalStyle = () => {
  return <Global styles={globalStyles} />
}
