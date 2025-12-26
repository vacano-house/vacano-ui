import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vacano UI',
  description: 'Vacano React components library',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/atoms/button' },
      { text: 'API', link: '/api/' },
      { text: 'Storybook', link: 'https://ui.vacano.io/storybook/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Icons', link: '/guide/icons' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Atoms',
          items: [
            { text: 'Button', link: '/components/atoms/button' },
            { text: 'Input', link: '/components/atoms/input' },
            { text: 'Checkbox', link: '/components/atoms/checkbox' },
            { text: 'Radio', link: '/components/atoms/radio' },
            { text: 'Chip', link: '/components/atoms/chip' },
            { text: 'Spinner', link: '/components/atoms/spinner' },
            { text: 'Loader', link: '/components/atoms/loader' },
          ],
        },
        {
          text: 'Molecules',
          items: [
            { text: 'RadioGroup', link: '/components/molecules/radio-group' },
            { text: 'CheckboxGroup', link: '/components/molecules/checkbox-group' },
            { text: 'RadioCard', link: '/components/molecules/radio-card' },
            { text: 'CheckboxCard', link: '/components/molecules/checkbox-card' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
          ],
        },
        {
          text: 'Theme',
          items: [
            { text: 'ThemeProvider', link: '/api/theme-provider' },
            { text: 'useTheme', link: '/api/use-theme' },
            { text: 'Theme Types', link: '/api/theme-types' },
          ],
        },
        {
          text: 'Atoms',
          items: [
            { text: 'Button', link: '/api/button' },
            { text: 'Input', link: '/api/input' },
            { text: 'Checkbox', link: '/api/checkbox' },
            { text: 'Radio', link: '/api/radio' },
            { text: 'Chip', link: '/api/chip' },
            { text: 'Spinner', link: '/api/spinner' },
            { text: 'Loader', link: '/api/loader' },
          ],
        },
        {
          text: 'Molecules',
          items: [
            { text: 'RadioGroup', link: '/api/radio-group' },
            { text: 'CheckboxGroup', link: '/api/checkbox-group' },
            { text: 'RadioCard', link: '/api/radio-card' },
            { text: 'CheckboxCard', link: '/api/checkbox-card' },
          ],
        },
        {
          text: 'Icons',
          items: [
            { text: 'Icon Props', link: '/api/icons' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vacano-house/vacano-ui' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Vacano',
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
    },
  },
})
