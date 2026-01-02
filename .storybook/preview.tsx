import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import type { Preview } from '@storybook/react-vite'

import { GlobalStyle } from '../src/components/global'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['atoms', 'molecules', 'organisms', 'templates'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
}

export default preview
