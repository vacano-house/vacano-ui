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
      {
        text: 'MMLA',
        link: 'https://ui.vacano.io/mmla.md',
        target: '_blank',
        rel: 'noopener',
      },
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
            { text: 'Checkbox', link: '/components/atoms/checkbox' },
            { text: 'Chip', link: '/components/atoms/chip' },
            { text: 'Dropdown', link: '/components/atoms/dropdown' },
            { text: 'Input', link: '/components/atoms/input' },
            { text: 'Loader', link: '/components/atoms/loader' },
            { text: 'MultiSelect', link: '/components/atoms/multi-select' },
            { text: 'Radio', link: '/components/atoms/radio' },
            { text: 'Select', link: '/components/atoms/select' },
            { text: 'Spinner', link: '/components/atoms/spinner' },
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
            { text: 'Checkbox', link: '/api/checkbox' },
            { text: 'Chip', link: '/api/chip' },
            { text: 'Dropdown', link: '/api/dropdown' },
            { text: 'Input', link: '/api/input' },
            { text: 'Loader', link: '/api/loader' },
            { text: 'MultiSelect', link: '/api/multi-select' },
            { text: 'Radio', link: '/api/radio' },
            { text: 'Select', link: '/api/select' },
            { text: 'Spinner', link: '/api/spinner' },
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
