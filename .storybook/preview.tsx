import type { Preview } from '@storybook/react-vite'

import { GlobalStyle } from '../src/components/GlobalStyle'

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
