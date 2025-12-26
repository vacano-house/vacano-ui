import '@emotion/react'

import type { Theme as AppTheme } from './themes'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends AppTheme {}
}
