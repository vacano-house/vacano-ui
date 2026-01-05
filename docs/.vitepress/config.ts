import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vacano UI',
  description: 'Vacano React components library',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [],
    sidebar: {},
    socialLinks: [{ icon: 'github', link: 'https://github.com/vacano-house/vacano-ui' }],
  },
})
