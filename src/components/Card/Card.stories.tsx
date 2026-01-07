import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card as CardComponent } from './Card'

const meta: Meta<typeof CardComponent> = {
  title: 'components/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    border: false,
    shadow: false,
  },
  argTypes: {
    border: {
      control: 'boolean',
    },
    shadow: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof CardComponent>

export const Playground: Story = {
  render: (args) => (
    <CardComponent {...args} style={{ width: 300, padding: 16 }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Card Title</h3>
      <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
        This is a basic card with customizable border and shadow props.
      </p>
    </CardComponent>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>No Border, No Shadow</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent style={{ width: 280, padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Plain Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              Basic card without border or shadow.
            </p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Border Only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border style={{ width: 280, padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Bordered Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>Card with border only.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Shadow Only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent shadow style={{ width: 280, padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Shadow Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>Card with shadow only.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Border and Shadow</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 280, padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Full Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              Card with both border and shadow.
            </p>
          </CardComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithHeader: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Simple Header</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #eee',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Card Header</h3>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This card has a header section with a bottom border separator.
              </p>
            </div>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Header with Subtitle</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #eee',
              }}
            >
              <h3 style={{ margin: '0 0 4px 0', fontSize: 16, fontWeight: 600 }}>
                Project Details
              </h3>
              <p style={{ margin: 0, fontSize: 12, color: '#888' }}>Last updated 2 hours ago</p>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                Card content goes here with detailed information.
              </p>
            </div>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Header with Action</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Settings</h3>
              <button
                style={{
                  border: 'none',
                  background: 'none',
                  color: '#0066cc',
                  fontSize: 14,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Edit
              </button>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                Configure your account settings here.
              </p>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithFooter: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Simple Footer</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Card Title</h3>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This card has a footer section at the bottom.
              </p>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderTop: '1px solid #eee',
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <span style={{ fontSize: 12, color: '#888' }}>Posted on Jan 1, 2024</span>
            </div>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Footer with Actions</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Confirm Action</h3>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                Are you sure you want to proceed with this action?
              </p>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <button
                style={{
                  padding: '6px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  background: '#fff',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: 4,
                  background: '#0066cc',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Confirm
              </button>
            </div>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Footer with Stats</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Article Title</h3>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                A brief description of the article content.
              </p>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <span style={{ fontSize: 12, color: '#888' }}>5 min read</span>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 12, color: '#888' }}>42 likes</span>
                <span style={{ fontSize: 12, color: '#888' }}>8 comments</span>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithHeaderAndFooter: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Full Card Layout</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 360 }}>
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Task Details</h3>
              <span
                style={{
                  padding: '2px 8px',
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  borderRadius: 12,
                  fontSize: 12,
                }}
              >
                Active
              </span>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: 14 }}>
                Complete the quarterly report and submit for review. Include all relevant data from
                the past three months.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: 4,
                    fontSize: 12,
                    color: '#666',
                  }}
                >
                  High Priority
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: 4,
                    fontSize: 12,
                    color: '#666',
                  }}
                >
                  Due: Jan 15
                </span>
              </div>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <span style={{ fontSize: 12, color: '#888' }}>Assigned to: John Doe</span>
              <button
                style={{
                  padding: '4px 12px',
                  border: 'none',
                  borderRadius: 4,
                  background: '#0066cc',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                View
              </button>
            </div>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Modal-style Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 400 }}>
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid #eee',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Delete Confirmation</h3>
            </div>
            <div style={{ padding: '20px' }}>
              <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: 14, lineHeight: 1.6 }}>
                Are you sure you want to delete this item? This action cannot be undone and all
                associated data will be permanently removed.
              </p>
              <div
                style={{
                  padding: 12,
                  backgroundColor: '#fff3e0',
                  borderRadius: 8,
                  border: '1px solid #ffcc80',
                }}
              >
                <p style={{ margin: 0, fontSize: 13, color: '#e65100' }}>
                  Warning: This will also delete 5 related items.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: '16px 20px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 12,
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <button
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: 6,
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: 6,
                  background: '#d32f2f',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Delete
              </button>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Small (240px)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 240, padding: 12 }}>
            <h3 style={{ margin: '0 0 6px 0', fontSize: 14, fontWeight: 600 }}>Small Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 12 }}>Compact content area.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Medium (320px)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320, padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}>Medium Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              Standard content area for most use cases.
            </p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Large (480px)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 480, padding: 20 }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: 18, fontWeight: 600 }}>Large Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              Expanded content area for detailed information and complex layouts. This size works
              well for forms, detailed views, and content-heavy sections.
            </p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Full Width (100%)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: '100%', padding: 20 }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: 18, fontWeight: 600 }}>Full Width Card</h3>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              This card expands to fill its container width. Useful for responsive layouts.
            </p>
          </CardComponent>
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
          flex-direction: row, gap: 16px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <CardComponent border shadow style={{ width: 200, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Card 1</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>First card content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 200, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Card 2</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Second card content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 200, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Card 3</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Third card content.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <CardComponent border shadow style={{ width: 180, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Centered 1</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content here.</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 180, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Centered 2</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content here.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <CardComponent border shadow style={{ width: 180, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Left Card</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Aligned to start.</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 180, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Right Card</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Aligned to end.</p>
          </CardComponent>
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
          flex-direction: column, gap: 12px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            width: 280,
          }}
        >
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>First Item</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Card stacked vertically.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Second Item</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Another stacked card.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Third Item</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Third stacked card.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: center (container width: 400px)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            width: 400,
          }}
        >
          <CardComponent border shadow style={{ width: 240, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Centered Card</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Width: 240px</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 300, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Wider Card</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Width: 300px</p>
          </CardComponent>
          <CardComponent border shadow style={{ width: 200, padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Narrow Card</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Width: 200px</p>
          </CardComponent>
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
          grid-template-columns: repeat(2, 1fr), gap: 16px
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            maxWidth: 600,
          }}
        >
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Grid Item 1</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>First grid cell.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Grid Item 2</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Second grid cell.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Grid Item 3</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Third grid cell.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Grid Item 4</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Fourth grid cell.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(3, 1fr), gap: 16px
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 1</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 2</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 3</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 4</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 5</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
          <CardComponent border shadow style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>Column 6</h4>
            <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Content.</p>
          </CardComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Mixed grid: repeat(auto-fill, minmax(200px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <CardComponent key={num} border shadow style={{ padding: 16 }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 600 }}>
                Auto Card {num}
              </h4>
              <p style={{ margin: 0, color: '#666', fontSize: 13 }}>Responsive grid item.</p>
            </CardComponent>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 800 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Profile Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 320 }}>
            <div style={{ padding: 20, textAlign: 'center' }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: '#e0e0e0',
                  margin: '0 auto 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  color: '#666',
                }}
              >
                JD
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: 18, fontWeight: 600 }}>John Doe</h3>
              <p style={{ margin: '0 0 12px 0', color: '#888', fontSize: 14 }}>Senior Developer</p>
              <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: 13 }}>
                Building amazing products with React and TypeScript.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>128</div>
                  <div style={{ fontSize: 12, color: '#888' }}>Posts</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>1.2k</div>
                  <div style={{ fontSize: 12, color: '#888' }}>Followers</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>356</div>
                  <div style={{ fontSize: 12, color: '#888' }}>Following</div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '12px 20px',
                borderTop: '1px solid #eee',
                display: 'flex',
                gap: 8,
                backgroundColor: '#fafafa',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: 6,
                  background: '#0066cc',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Follow
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: 6,
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Message
              </button>
            </div>
          </CardComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Product Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 280 }}>
            <div
              style={{
                height: 160,
                backgroundColor: '#e8e8e8',
                borderRadius: '16px 16px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              Product Image
            </div>
            <div style={{ padding: 16 }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}
              >
                <h3 style={{ margin: '0 0 4px 0', fontSize: 16, fontWeight: 600 }}>
                  Wireless Headphones
                </h3>
                <span style={{ fontWeight: 600, color: '#0066cc' }}>$99.99</span>
              </div>
              <p style={{ margin: '0 0 12px 0', color: '#888', fontSize: 13 }}>
                Premium sound quality
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
                <span style={{ color: '#ffc107' }}>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                <span style={{ fontSize: 12, color: '#888' }}>(128 reviews)</span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: 6,
                  background: '#0066cc',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Add to Cart
              </button>
            </div>
          </CardComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Info/Stats Cards</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <CardComponent border style={{ padding: 20 }}>
            <p style={{ margin: '0 0 4px 0', color: '#888', fontSize: 13 }}>Total Revenue</p>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 28, fontWeight: 600 }}>$45,231</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#2e7d32' }}>+20.1% from last month</p>
          </CardComponent>
          <CardComponent border style={{ padding: 20 }}>
            <p style={{ margin: '0 0 4px 0', color: '#888', fontSize: 13 }}>Active Users</p>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 28, fontWeight: 600 }}>2,350</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#2e7d32' }}>+180 new users</p>
          </CardComponent>
          <CardComponent border style={{ padding: 20 }}>
            <p style={{ margin: '0 0 4px 0', color: '#888', fontSize: 13 }}>Conversion Rate</p>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 28, fontWeight: 600 }}>3.2%</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#d32f2f' }}>-0.4% from last week</p>
          </CardComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Notification Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 400 }}>
            <div style={{ padding: 16, display: 'flex', gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#e3f2fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 18 }}>&#128276;</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>New message received</h4>
                  <span style={{ fontSize: 12, color: '#888' }}>2m ago</span>
                </div>
                <p style={{ margin: 0, color: '#666', fontSize: 13 }}>
                  Sarah commented on your post: &ldquo;Great work on the new feature!&rdquo;
                </p>
              </div>
            </div>
            <div
              style={{
                padding: '8px 16px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
              }}
            >
              <button
                style={{
                  padding: '4px 12px',
                  border: 'none',
                  background: 'transparent',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 13,
                }}
              >
                Dismiss
              </button>
              <button
                style={{
                  padding: '4px 12px',
                  border: 'none',
                  background: 'transparent',
                  color: '#0066cc',
                  cursor: 'pointer',
                  fontSize: 13,
                }}
              >
                View
              </button>
            </div>
          </CardComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Article Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <CardComponent border shadow style={{ width: 400 }}>
            <div
              style={{
                height: 180,
                backgroundColor: '#e8e8e8',
                borderRadius: '16px 16px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              Article Cover Image
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  Technology
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: '#fce4ec',
                    color: '#c2185b',
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  React
                </span>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: 18, fontWeight: 600 }}>
                Building Scalable React Applications
              </h3>
              <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: 14, lineHeight: 1.5 }}>
                Learn the best practices for building large-scale React applications with proper
                architecture and performance optimization.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: '#666',
                  }}
                >
                  JS
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Jane Smith</div>
                  <div style={{ fontSize: 12, color: '#888' }}>Dec 15, 2024 · 8 min read</div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  ),
}
