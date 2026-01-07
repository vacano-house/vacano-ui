import type { Meta, StoryObj } from '@storybook/react-vite'

import { KeysBindings as KeysBindingsComponent } from './KeysBindings'

const meta: Meta<typeof KeysBindingsComponent> = {
  title: 'components/KeysBindings',
  component: KeysBindingsComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    keys: ['Meta', 'Shift', 'A'],
    variant: 'dark',
  },
  argTypes: {
    keys: { control: 'object' },
    variant: { control: 'select', options: ['dark', 'light'] },
  },
}

export default meta

type Story = StoryObj<typeof KeysBindingsComponent>

export const Playground: Story = {
  render: (args) => <KeysBindingsComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dark (default)</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <KeysBindingsComponent keys={['Meta', 'C']} variant="dark" />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'P']} variant="dark" />
          <KeysBindingsComponent keys={['Control', 'Alt', 'Delete']} variant="dark" />
        </div>
      </div>
      <div style={{ background: '#1a1a1a', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#999' }}>Light</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <KeysBindingsComponent keys={['Meta', 'C']} variant="light" />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'P']} variant="light" />
          <KeysBindingsComponent keys={['Control', 'Alt', 'Delete']} variant="light" />
        </div>
      </div>
    </div>
  ),
}

export const CommonBindings: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Common keyboard shortcuts</div>
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
          <span style={{ fontSize: 14, color: '#333' }}>Copy</span>
          <KeysBindingsComponent keys={['Meta', 'C']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Paste</span>
          <KeysBindingsComponent keys={['Meta', 'V']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Cut</span>
          <KeysBindingsComponent keys={['Meta', 'X']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Save</span>
          <KeysBindingsComponent keys={['Meta', 'S']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Undo</span>
          <KeysBindingsComponent keys={['Meta', 'Z']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Redo</span>
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Select All</span>
          <KeysBindingsComponent keys={['Meta', 'A']} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#333' }}>Find</span>
          <KeysBindingsComponent keys={['Meta', 'F']} />
        </div>
      </div>
    </div>
  ),
}

export const SingleKey: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Single key bindings</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Escape']} />
            <span style={{ fontSize: 11, color: '#999' }}>Escape</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Enter']} />
            <span style={{ fontSize: 11, color: '#999' }}>Enter</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Tab']} />
            <span style={{ fontSize: 11, color: '#999' }}>Tab</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={[' ']} />
            <span style={{ fontSize: 11, color: '#999' }}>Space</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Backspace']} />
            <span style={{ fontSize: 11, color: '#999' }}>Backspace</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Delete']} />
            <span style={{ fontSize: 11, color: '#999' }}>Delete</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Arrow keys</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['ArrowUp']} />
            <span style={{ fontSize: 11, color: '#999' }}>Up</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['ArrowDown']} />
            <span style={{ fontSize: 11, color: '#999' }}>Down</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['ArrowLeft']} />
            <span style={{ fontSize: 11, color: '#999' }}>Left</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['ArrowRight']} />
            <span style={{ fontSize: 11, color: '#999' }}>Right</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Function keys</div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <KeysBindingsComponent keys={['F1']} />
          <KeysBindingsComponent keys={['F2']} />
          <KeysBindingsComponent keys={['F3']} />
          <KeysBindingsComponent keys={['F4']} />
          <KeysBindingsComponent keys={['F5']} />
          <KeysBindingsComponent keys={['F12']} />
        </div>
      </div>
    </div>
  ),
}

export const MultipleKeys: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Two-key combinations</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Meta', 'K']} />
            <span style={{ fontSize: 11, color: '#999' }}>Command Palette</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Control', 'C']} />
            <span style={{ fontSize: 11, color: '#999' }}>Ctrl+C</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Alt', 'Tab']} />
            <span style={{ fontSize: 11, color: '#999' }}>Alt+Tab</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Three-key combinations</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Meta', 'Shift', 'P']} />
            <span style={{ fontSize: 11, color: '#999' }}>Quick Open</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Control', 'Shift', 'Escape']} />
            <span style={{ fontSize: 11, color: '#999' }}>Task Manager</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Meta', 'Alt', 'I']} />
            <span style={{ fontSize: 11, color: '#999' }}>Dev Tools</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Four-key combinations</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Control', 'Alt', 'Shift', 'R']} />
            <span style={{ fontSize: 11, color: '#999' }}>Record Screen</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <KeysBindingsComponent keys={['Meta', 'Control', 'Shift', 'F']} />
            <span style={{ fontSize: 11, color: '#999' }}>Full Screen</span>
          </div>
        </div>
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
          align-items: center (default alignment with other content)
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <span style={{ fontSize: 14 }}>Save document</span>
          <KeysBindingsComponent keys={['Meta', 'S']} />
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
            alignItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
            width: 300,
          }}
        >
          <span style={{ fontSize: 14 }}>Copy</span>
          <KeysBindingsComponent keys={['Meta', 'C']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'Z']} />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
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
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'Q']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple bindings in a row with gap
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'X']} />
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
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 160,
            height: 180,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 160,
            height: 180,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-end</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 160,
            height: 180,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 160,
            height: 180,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'Shift', 'Z']} />
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
          place-items: center (grid with centered items)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            placeItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
            width: 400,
          }}
        >
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <KeysBindingsComponent keys={['Meta', 'X']} />
          <KeysBindingsComponent keys={['Meta', 'Z']} />
          <KeysBindingsComponent keys={['Meta', 'S']} />
          <KeysBindingsComponent keys={['Meta', 'A']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Shortcut reference grid (2 columns)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '12px 24px',
            alignItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
            width: 280,
          }}
        >
          <span style={{ fontSize: 14 }}>Copy</span>
          <KeysBindingsComponent keys={['Meta', 'C']} />
          <span style={{ fontSize: 14 }}>Paste</span>
          <KeysBindingsComponent keys={['Meta', 'V']} />
          <span style={{ fontSize: 14 }}>Cut</span>
          <KeysBindingsComponent keys={['Meta', 'X']} />
          <span style={{ fontSize: 14 }}>Undo</span>
          <KeysBindingsComponent keys={['Meta', 'Z']} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-items: start vs center vs end
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 8,
              justifyItems: 'start',
              border: '1px dashed #ccc',
              padding: 16,
              width: 120,
            }}
          >
            <KeysBindingsComponent keys={['Meta', 'C']} />
            <KeysBindingsComponent keys={['Meta', 'V']} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 8,
              justifyItems: 'center',
              border: '1px dashed #ccc',
              padding: 16,
              width: 120,
            }}
          >
            <KeysBindingsComponent keys={['Meta', 'C']} />
            <KeysBindingsComponent keys={['Meta', 'V']} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 8,
              justifyItems: 'end',
              border: '1px dashed #ccc',
              padding: 16,
              width: 120,
            }}
          >
            <KeysBindingsComponent keys={['Meta', 'C']} />
            <KeysBindingsComponent keys={['Meta', 'V']} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>In a button</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 16px',
              fontSize: 14,
              background: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: 6,
              cursor: 'pointer',
            }}
          >
            <span>Save</span>
            <KeysBindingsComponent keys={['Meta', 'S']} />
          </button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>In menu items</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 4,
            width: 240,
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {[
            { label: 'New File', keys: ['Meta', 'N'] as const },
            { label: 'Open...', keys: ['Meta', 'O'] as const },
            { label: 'Save', keys: ['Meta', 'S'] as const },
            { label: 'Save As...', keys: ['Meta', 'Shift', 'S'] as const },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                fontSize: 14,
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              <span>{item.label}</span>
              <KeysBindingsComponent keys={[...item.keys]} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>In a tooltip hint</div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            background: '#333',
            color: '#fff',
            borderRadius: 6,
            fontSize: 13,
          }}
        >
          <span>Open command palette</span>
          <KeysBindingsComponent keys={['Meta', 'K']} variant="light" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>In a modal footer</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Confirm Action</div>
          <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
            Are you sure you want to proceed?
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 12,
              borderTop: '1px solid #eee',
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#999' }}
            >
              <KeysBindingsComponent keys={['Escape']} />
              <span>to cancel</span>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#999' }}
            >
              <KeysBindingsComponent keys={['Enter']} />
              <span>to confirm</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Navigation instructions</div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            padding: 16,
            background: '#f9f9f9',
            borderRadius: 8,
            border: '1px dashed #ccc',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KeysBindingsComponent keys={['ArrowUp', 'ArrowDown']} />
            <span style={{ fontSize: 13, color: '#666' }}>Navigate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KeysBindingsComponent keys={['Enter']} />
            <span style={{ fontSize: 13, color: '#666' }}>Select</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KeysBindingsComponent keys={['Escape']} />
            <span style={{ fontSize: 13, color: '#666' }}>Close</span>
          </div>
        </div>
      </div>

      <div style={{ background: '#1a1a1a', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Light variant in dark context
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#ccc' }}>Toggle sidebar</span>
            <KeysBindingsComponent keys={['Meta', 'B']} variant="light" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#ccc' }}>Toggle terminal</span>
            <KeysBindingsComponent keys={['Meta', 'J']} variant="light" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#ccc' }}>Quick open</span>
            <KeysBindingsComponent keys={['Meta', 'P']} variant="light" />
          </div>
        </div>
      </div>
    </div>
  ),
}
