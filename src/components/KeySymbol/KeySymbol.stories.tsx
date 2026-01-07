import type { Meta, StoryObj } from '@storybook/react-vite'

import { KeySymbol as KeySymbolComponent } from './KeySymbol'

const meta: Meta<typeof KeySymbolComponent> = {
  title: 'components/KeySymbol',
  component: KeySymbolComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    symbol: 'Esc',
    variant: 'dark',
  },
  argTypes: {
    symbol: { control: 'text' },
    variant: { control: 'select', options: ['dark', 'light'] },
  },
}

export default meta

type Story = StoryObj<typeof KeySymbolComponent>

export const Playground: Story = {
  render: (args) => <KeySymbolComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dark (default)</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <KeySymbolComponent symbol="Esc" variant="dark" />
          <KeySymbolComponent symbol="Enter" variant="dark" />
          <KeySymbolComponent symbol="Tab" variant="dark" />
        </div>
      </div>
      <div style={{ background: '#1a1a1a', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#999' }}>Light</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <KeySymbolComponent symbol="Esc" variant="light" />
          <KeySymbolComponent symbol="Enter" variant="light" />
          <KeySymbolComponent symbol="Tab" variant="light" />
        </div>
      </div>
    </div>
  ),
}

export const CommonKeys: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Navigation Keys</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="Esc" />
          <KeySymbolComponent symbol="Tab" />
          <KeySymbolComponent symbol="Enter" />
          <KeySymbolComponent symbol="Space" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Arrow Keys</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="↑" />
          <KeySymbolComponent symbol="↓" />
          <KeySymbolComponent symbol="←" />
          <KeySymbolComponent symbol="→" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Modifier Keys (Mac)</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="⌘" />
          <KeySymbolComponent symbol="⌥" />
          <KeySymbolComponent symbol="⌃" />
          <KeySymbolComponent symbol="⇧" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Modifier Keys (Windows)</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="Ctrl" />
          <KeySymbolComponent symbol="Alt" />
          <KeySymbolComponent symbol="Shift" />
          <KeySymbolComponent symbol="Win" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Function Keys</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="F1" />
          <KeySymbolComponent symbol="F2" />
          <KeySymbolComponent symbol="F3" />
          <KeySymbolComponent symbol="F12" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Special Keys</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <KeySymbolComponent symbol="Del" />
          <KeySymbolComponent symbol="Backspace" />
          <KeySymbolComponent symbol="Home" />
          <KeySymbolComponent symbol="End" />
          <KeySymbolComponent symbol="PgUp" />
          <KeySymbolComponent symbol="PgDn" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block - each key symbol takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <KeySymbolComponent symbol="Esc" />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <KeySymbolComponent symbol="Enter" />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <KeySymbolComponent symbol="Tab" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutInline: Story = {
  name: 'Layout: Inline',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: inline / inline-block - key symbols flow inline with text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16, lineHeight: 2 }}>
        <span>Press </span>
        <KeySymbolComponent symbol="⌘" />
        <span> + </span>
        <KeySymbolComponent symbol="K" />
        <span> to open the command palette, or </span>
        <KeySymbolComponent symbol="Esc" />
        <span> to close it.</span>
      </div>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          flex-direction: row, gap: 8px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeySymbolComponent symbol="⌘" />
          <KeySymbolComponent symbol="⇧" />
          <KeySymbolComponent symbol="P" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
            width: 300,
          }}
        >
          <KeySymbolComponent symbol="←" />
          <KeySymbolComponent symbol="↑" />
          <KeySymbolComponent symbol="↓" />
          <KeySymbolComponent symbol="→" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeySymbolComponent symbol="Ctrl" />
          <KeySymbolComponent symbol="Alt" />
          <KeySymbolComponent symbol="Del" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: flex-end
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeySymbolComponent symbol="⌘" />
          <KeySymbolComponent symbol="Q" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: flex-start (default)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            width: 120,
            height: 150,
          }}
        >
          <KeySymbolComponent symbol="Esc" />
          <KeySymbolComponent symbol="Tab" />
          <KeySymbolComponent symbol="Enter" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            width: 120,
            height: 150,
          }}
        >
          <KeySymbolComponent symbol="Esc" />
          <KeySymbolComponent symbol="Tab" />
          <KeySymbolComponent symbol="Enter" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-end</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            width: 120,
            height: 150,
          }}
        >
          <KeySymbolComponent symbol="Esc" />
          <KeySymbolComponent symbol="Tab" />
          <KeySymbolComponent symbol="Enter" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            width: 120,
            height: 150,
          }}
        >
          <KeySymbolComponent symbol="Esc" />
          <KeySymbolComponent symbol="Tab" />
          <KeySymbolComponent symbol="Enter" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(4, auto)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: 8,
            justifyContent: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeySymbolComponent symbol="F1" />
          <KeySymbolComponent symbol="F2" />
          <KeySymbolComponent symbol="F3" />
          <KeySymbolComponent symbol="F4" />
          <KeySymbolComponent symbol="F5" />
          <KeySymbolComponent symbol="F6" />
          <KeySymbolComponent symbol="F7" />
          <KeySymbolComponent symbol="F8" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Arrow key layout (3x3 grid)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: 4,
            justifyContent: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <div />
          <KeySymbolComponent symbol="↑" />
          <div />
          <KeySymbolComponent symbol="←" />
          <KeySymbolComponent symbol="↓" />
          <KeySymbolComponent symbol="→" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-items: center</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 80px)',
            gap: 8,
            justifyItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeySymbolComponent symbol="Q" />
          <KeySymbolComponent symbol="W" />
          <KeySymbolComponent symbol="E" />
          <KeySymbolComponent symbol="A" />
          <KeySymbolComponent symbol="S" />
          <KeySymbolComponent symbol="D" />
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Keyboard shortcuts list</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#333' }}>Save document</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" />
              <KeySymbolComponent symbol="S" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#333' }}>Open file</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" />
              <KeySymbolComponent symbol="O" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#333' }}>Find and replace</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" />
              <KeySymbolComponent symbol="⇧" />
              <KeySymbolComponent symbol="H" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#333' }}>Undo</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" />
              <KeySymbolComponent symbol="Z" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Command palette hint</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            background: '#f9f9f9',
            borderRadius: 8,
          }}
        >
          <span style={{ fontSize: 14, color: '#666' }}>Press</span>
          <KeySymbolComponent symbol="⌘" />
          <KeySymbolComponent symbol="K" />
          <span style={{ fontSize: 14, color: '#666' }}>to open command palette</span>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Escape hint in modal context
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Modal Title</div>
          <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
            Some modal content goes here.
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              color: '#999',
            }}
          >
            <span>Press</span>
            <KeySymbolComponent symbol="Esc" />
            <span>to close</span>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Navigation instructions</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="↑" />
              <KeySymbolComponent symbol="↓" />
            </div>
            <span style={{ fontSize: 14, color: '#333' }}>Navigate items</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <KeySymbolComponent symbol="Enter" />
            <span style={{ fontSize: 14, color: '#333' }}>Select item</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KeySymbolComponent symbol="Esc" />
            <span style={{ fontSize: 14, color: '#333' }}>Cancel</span>
          </div>
        </div>
      </div>

      <div style={{ background: '#1a1a1a', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Light variant in dark context
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#ccc' }}>Toggle sidebar</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" variant="light" />
              <KeySymbolComponent symbol="B" variant="light" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#ccc' }}>Toggle terminal</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <KeySymbolComponent symbol="⌘" variant="light" />
              <KeySymbolComponent symbol="J" variant="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
