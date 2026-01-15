import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vacano UI',
  description: 'Vacano React components library',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vacano UI',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Storybook', link: '/storybook/', target: '_blank' },
      { text: 'AI Docs', link: '/MLAPI.txt', target: '_blank' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Form',
          items: [
            { text: 'Autocomplete', link: '/components/autocomplete' },
            { text: 'Button', link: '/components/button' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'CheckboxCard', link: '/components/checkbox-card' },
            { text: 'CheckboxGroup', link: '/components/checkbox-group' },
            { text: 'DatePicker', link: '/components/date-picker' },
            { text: 'Input', link: '/components/input' },
            { text: 'MultiSelect', link: '/components/multi-select' },
            { text: 'OtpCode', link: '/components/otp-code' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'RadioCard', link: '/components/radio-card' },
            { text: 'RadioGroup', link: '/components/radio-group' },
            { text: 'Select', link: '/components/select' },
            { text: 'Tags', link: '/components/tags' },
          ],
        },
        {
          text: 'Data Display',
          items: [
            { text: 'Card', link: '/components/card' },
            { text: 'Chip', link: '/components/chip' },
            { text: 'Progress', link: '/components/progress' },
            { text: 'StatusCard', link: '/components/status-card' },
            { text: 'Tabs', link: '/components/tabs' },
          ],
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Confirmation', link: '/components/confirmation' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Drawer', link: '/components/drawer' },
            { text: 'SaveProgress', link: '/components/save-progress' },
            { text: 'Spinner', link: '/components/spinner' },
            { text: 'Toastr', link: '/components/toastr' },
            { text: 'Tooltip', link: '/components/tooltip' },
          ],
        },
        {
          text: 'Layout',
          items: [
            { text: 'Container', link: '/components/container' },
            { text: 'Panel', link: '/components/panel' },
          ],
        },
        {
          text: 'Navigation',
          items: [
            { text: 'Dropdown', link: '/components/dropdown' },
            { text: 'Stepper', link: '/components/stepper' },
          ],
        },
        {
          text: 'Utility',
          items: [
            { text: 'FieldLabel', link: '/components/field-label' },
            { text: 'FieldMessage', link: '/components/field-message' },
            { text: 'GlobalStyle', link: '/components/global-style' },
            { text: 'ImageCropper', link: '/components/image-cropper' },
            { text: 'KeysBindings', link: '/components/keys-bindings' },
            { text: 'KeySymbol', link: '/components/key-symbol' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vacano-house/vacano-ui' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Vacano',
    },
    search: {
      provider: 'local',
    },
  },
})
