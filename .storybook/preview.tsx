import type { Preview } from '@storybook/react-vite'

import { ThemeProvider } from '../src/theme/ThemeProvider'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Icons', 'Atoms', 'Molecules', 'Organisms', 'hooks', '*'],
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
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
