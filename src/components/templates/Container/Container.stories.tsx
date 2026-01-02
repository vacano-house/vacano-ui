import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container as ContainerComponent } from './Container'

const meta: Meta<typeof ContainerComponent> = {
  title: 'templates/Container',
  component: ContainerComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Container: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <div style={{ display: 'flex' }}>
        <ContainerComponent
          style={{
            backgroundColor: '#fff',
            border: '1px dashed #ccc',
            padding: 24,
            minHeight: 200,
          }}
        >
          <p>Container resizes based on viewport width:</p>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li>sm (≥640px): max-width 640px</li>
            <li>md (≥768px): max-width 768px</li>
            <li>lg (≥1024px): max-width 1024px</li>
            <li>xl (≥1280px): max-width 1280px</li>
            <li>2xl (≥1536px): max-width 1536px</li>
          </ul>
        </ContainerComponent>
      </div>
    </div>
  ),
}
