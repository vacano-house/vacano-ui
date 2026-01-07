import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip as ChipComponent } from './Chip'

const meta: Meta<typeof ChipComponent> = {
  title: 'components/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Chip label',
    variant: 'gray',
    deletable: false,
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['gray', 'red', 'blue', 'black'] },
    deletable: { control: 'boolean' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta

type Story = StoryObj<typeof ChipComponent>

export const Playground: Story = {
  render: (args) => <ChipComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ChipComponent variant="gray">Gray</ChipComponent>
      <ChipComponent variant="red">Red</ChipComponent>
      <ChipComponent variant="blue">Blue</ChipComponent>
      <ChipComponent variant="black">Black</ChipComponent>
    </div>
  ),
}

export const Deletable: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Non-deletable</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <ChipComponent variant="gray">Gray</ChipComponent>
          <ChipComponent variant="red">Red</ChipComponent>
          <ChipComponent variant="blue">Blue</ChipComponent>
          <ChipComponent variant="black">Black</ChipComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Deletable</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <ChipComponent variant="gray" deletable onDelete={() => {}}>
            Gray
          </ChipComponent>
          <ChipComponent variant="red" deletable onDelete={() => {}}>
            Red
          </ChipComponent>
          <ChipComponent variant="blue" deletable onDelete={() => {}}>
            Blue
          </ChipComponent>
          <ChipComponent variant="black" deletable onDelete={() => {}}>
            Black
          </ChipComponent>
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
        display: block - each chip takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <ChipComponent>First chip</ChipComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <ChipComponent variant="blue">Second chip</ChipComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <ChipComponent variant="red">Third chip</ChipComponent>
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
        display: inline - chips flow inline with text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <span>Tags: </span>
        <ChipComponent>React</ChipComponent>{' '}
        <ChipComponent variant="blue">TypeScript</ChipComponent>{' '}
        <ChipComponent variant="red">Important</ChipComponent>
        <span> are applied to this item.</span>
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
          <ChipComponent>Tag 1</ChipComponent>
          <ChipComponent variant="blue">Tag 2</ChipComponent>
          <ChipComponent variant="red">Tag 3</ChipComponent>
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
            width: 400,
          }}
        >
          <ChipComponent>Left</ChipComponent>
          <ChipComponent variant="blue">Center</ChipComponent>
          <ChipComponent variant="red">Right</ChipComponent>
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
          <ChipComponent>Centered 1</ChipComponent>
          <ChipComponent variant="blue">Centered 2</ChipComponent>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-start</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
            width: 200,
            height: 150,
          }}
        >
          <ChipComponent>Start 1</ChipComponent>
          <ChipComponent variant="blue">Start 2</ChipComponent>
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
            width: 200,
            height: 150,
          }}
        >
          <ChipComponent>Center 1</ChipComponent>
          <ChipComponent variant="blue">Center 2</ChipComponent>
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
            width: 200,
            height: 150,
          }}
        >
          <ChipComponent>End 1</ChipComponent>
          <ChipComponent variant="blue">End 2</ChipComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexWrap: Story = {
  name: 'Layout: Flex Wrap',
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        flex-wrap: wrap (resize container to see wrapping)
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          border: '1px dashed #ccc',
          padding: 16,
          maxWidth: 300,
        }}
      >
        <ChipComponent>JavaScript</ChipComponent>
        <ChipComponent variant="blue">TypeScript</ChipComponent>
        <ChipComponent variant="red">React</ChipComponent>
        <ChipComponent variant="black">Node.js</ChipComponent>
        <ChipComponent>CSS</ChipComponent>
        <ChipComponent variant="blue">HTML</ChipComponent>
        <ChipComponent variant="red">Vite</ChipComponent>
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
          grid-template-columns: repeat(3, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ChipComponent>Item 1</ChipComponent>
          <ChipComponent variant="blue">Item 2</ChipComponent>
          <ChipComponent variant="red">Item 3</ChipComponent>
          <ChipComponent variant="black">Item 4</ChipComponent>
          <ChipComponent>Item 5</ChipComponent>
          <ChipComponent variant="blue">Item 6</ChipComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-items: center</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
            justifyItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ChipComponent>Center 1</ChipComponent>
          <ChipComponent variant="blue">Center 2</ChipComponent>
          <ChipComponent variant="red">Center 3</ChipComponent>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Chips with long text</div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ChipComponent>Short</ChipComponent>
          <ChipComponent variant="blue">Medium length chip</ChipComponent>
          <ChipComponent variant="red">This is a longer chip label</ChipComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Deletable chips in a tag input scenario
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 6,
            padding: 8,
          }}
        >
          <ChipComponent deletable onDelete={() => {}}>
            react
          </ChipComponent>
          <ChipComponent deletable onDelete={() => {}}>
            typescript
          </ChipComponent>
          <ChipComponent deletable onDelete={() => {}}>
            emotion
          </ChipComponent>
          <input
            type="text"
            placeholder="Add tag..."
            style={{ border: 'none', outline: 'none', flex: 1, minWidth: 100 }}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Status chips with icon-like appearance
        </div>
        <div style={{ display: 'flex', gap: 8, border: '1px dashed #ccc', padding: 16 }}>
          <ChipComponent variant="blue">Active</ChipComponent>
          <ChipComponent variant="gray">Pending</ChipComponent>
          <ChipComponent variant="red">Rejected</ChipComponent>
          <ChipComponent variant="black">Archived</ChipComponent>
        </div>
      </div>
    </div>
  ),
}
