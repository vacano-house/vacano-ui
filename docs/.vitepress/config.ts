import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vacano UI',
  description: 'Vacano React components library',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: 'https://components.vacano.io' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Introduction', link: '/' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vacano-house/vacano-ui' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Vacano',
    },
  },
})
