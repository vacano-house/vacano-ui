import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vacano UI',
  description: 'Vacano React components library',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vacano UI',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Utilities', link: '/lib/' },
      { text: 'Storybook', link: '/storybook/', target: '_blank' },
      { text: 'MCP', link: '/guide/mcp' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'MCP Server', link: '/guide/mcp' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Overview',
          items: [
            { text: 'All Components', link: '/components/' },
            { text: 'Icons', link: '/components/icons' },
          ],
        },
        {
          text: 'Form',
          items: [
            { text: 'Autocomplete', link: '/components/autocomplete' },
            { text: 'Button', link: '/components/button' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'CheckboxCard', link: '/components/checkbox-card' },
            { text: 'CheckboxGroup', link: '/components/checkbox-group' },
            { text: 'DatePicker', link: '/components/date-picker' },
            { text: 'FileUpload', link: '/components/file-upload' },
            { text: 'Input', link: '/components/input' },
            { text: 'MultiSelect', link: '/components/multi-select' },
            { text: 'OtpCode', link: '/components/otp-code' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'RadioCard', link: '/components/radio-card' },
            { text: 'RadioGroup', link: '/components/radio-group' },
            { text: 'Select', link: '/components/select' },
            { text: 'Tags', link: '/components/tags' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Toggle', link: '/components/toggle' },
            { text: 'ToggleCard', link: '/components/toggle-card' },
            { text: 'ToggleGroup', link: '/components/toggle-group' },
          ],
        },
        {
          text: 'Form Wrappers',
          items: [{ text: 'Overview', link: '/components/form-wrappers' }],
        },
        {
          text: 'Data Display',
          items: [
            { text: 'Badge', link: '/components/badge' },
            { text: 'Card', link: '/components/card' },
            { text: 'Chip', link: '/components/chip' },
            { text: 'DateRange', link: '/components/date-range' },
            { text: 'Hashtag', link: '/components/hashtag' },
            { text: 'Heading', link: '/components/heading' },
            { text: 'Overline', link: '/components/overline' },
            { text: 'Progress', link: '/components/progress' },
            { text: 'Stat', link: '/components/stat' },
            { text: 'Tabs', link: '/components/tabs' },
            { text: 'User', link: '/components/user' },
          ],
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Confirmation', link: '/components/confirmation' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'NotifyConfirmation', link: '/components/notify-confirmation' },
            { text: 'Drawer', link: '/components/drawer' },
            { text: 'Notification', link: '/components/notification' },
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
            { text: 'Divider', link: '/components/divider' },
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
            { text: 'FieldRow', link: '/components/field-row' },
          ],
        },
      ],
      '/lib/': [
        {
          text: 'Overview',
          items: [{ text: 'All Utilities', link: '/lib/' }],
        },
        {
          text: 'Constants',
          items: [{ text: 'Constants', link: '/lib/constants' }],
        },
        {
          text: 'Utils',
          items: [
            { text: 'Colors', link: '/lib/colors' },
            { text: 'Media', link: '/lib/media' },
            { text: 'Platform', link: '/lib/platform' },
            { text: 'Keyboard', link: '/lib/keyboard' },
          ],
        },
        {
          text: 'Hooks',
          items: [{ text: 'useKeyBinding', link: '/lib/use-key-binding' }],
        },
        {
          text: 'Validation',
          items: [{ text: 'Validation', link: '/lib/validation' }],
        },
        {
          text: 'Types',
          items: [{ text: 'Types', link: '/lib/types' }],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vacano-house/vacano-ui' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Vacano',
    },
    search: {
      provider: 'local',
    },
  },
})
