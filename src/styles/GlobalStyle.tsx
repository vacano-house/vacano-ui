import { css, Global } from '@emotion/react'

const globalStyles = css`
  /*
   * CSS Reset
   * Based on modern reset practices (Josh Comeau + Andy Bell)
   */

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

  /*
   * Inter Font Configuration
   * Optimized for UI with modern CSS features
   */

  html {
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;

    /* Variable font optical sizing */
    font-optical-sizing: auto;

    /*
     * OpenType features for Inter:
     * - cv01: alternate 1 (distinguishable from l/I)
     * - cv02: alternate 4 (open top)
     * - cv03: alternate 6 (straight tail)
     * - cv04: alternate 9 (straight tail)
     * - ss01: open digits
     * - ss02: disambiguation (alt a, g)
     * - tnum: tabular numbers (monospaced digits for alignment)
     * - zero: slashed zero
     */
    font-feature-settings:
      'cv01' 1,
      'cv02' 1,
      'ss01' 1,
      'tnum' 1,
      'zero' 1;

    /* Improved kerning */
    font-kerning: normal;

    /* Slight negative tracking for Inter at UI sizes */
    letter-spacing: -0.011em;
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
