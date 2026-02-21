import styled from '@emotion/styled'

export const StyledFieldRow = styled.div<{ $gap: number | string }>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  column-gap: ${(props) => (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap)};

  > * {
    grid-row: 1 / -1;
    display: grid;
    grid-template-rows: subgrid;
    gap: 2px;
  }

  > * > [class*='field-label'] {
    grid-row: 1;
  }

  > * > [class*='field-message'] {
    grid-row: 3;
  }

  > * > :not([class*='field-label']):not([class*='field-message']) {
    grid-row: 2;
  }
`
