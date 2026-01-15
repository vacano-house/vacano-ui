import { useState } from 'react'

import { Button } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Textarea as TextareaComponent } from './Textarea'
import { TextareaProps } from './types'

const meta: Meta<typeof TextareaComponent> = {
  title: 'components/Textarea',
  component: TextareaComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Textarea label',
    placeholder: 'Enter text...',
    rows: 4,
    variant: 'normal',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof TextareaComponent>

const InteractiveTextarea = (props: TextareaProps) => {
  const [value, setValue] = useState((props.value as string) ?? '')

  return <TextareaComponent {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Playground: Story = {
  render: (args) => <InteractiveTextarea {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveTextarea variant="normal" label="Label" placeholder="Normal textarea" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveTextarea variant="error" label="Label" placeholder="Error textarea" />
        </div>
      </div>
    </div>
  ),
}

export const Rows: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>rows: 2</div>
        <InteractiveTextarea rows={2} label="Small" placeholder="2 rows textarea" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>rows: 4 (default)</div>
        <InteractiveTextarea rows={4} label="Default" placeholder="4 rows textarea" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>rows: 8</div>
        <InteractiveTextarea rows={8} label="Large" placeholder="8 rows textarea" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <TextareaComponent
            disabled
            variant="normal"
            label="Disabled"
            placeholder="Disabled textarea"
          />
          <TextareaComponent
            disabled
            variant="normal"
            label="With value"
            value="Disabled with value"
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <TextareaComponent
            disabled
            variant="error"
            label="Disabled"
            placeholder="Disabled error textarea"
          />
          <TextareaComponent
            disabled
            variant="error"
            label="With value"
            value="Disabled error with value"
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveTextarea placeholder="Without label" rows={3} />
      <InteractiveTextarea placeholder="Another textarea" rows={3} />
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          fullWidth: false (default)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveTextarea label="Default width" placeholder="Textarea fits content" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>fullWidth: true</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveTextarea
            fullWidth
            label="Full width"
            placeholder="Textarea expands to container"
          />
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
        display: block (default) - each textarea takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveTextarea fullWidth label="Description" placeholder="Enter description" />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveTextarea fullWidth label="Comments" placeholder="Enter comments" />
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
          flex-direction: row, gap: 24px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea label="First" placeholder="First" rows={3} />
          <InteractiveTextarea label="Second" placeholder="Second" rows={3} />
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
            width: 600,
          }}
        >
          <InteractiveTextarea label="Left" placeholder="Left textarea" rows={3} />
          <InteractiveTextarea label="Right" placeholder="Right textarea" rows={3} />
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
          <InteractiveTextarea label="Centered 1" placeholder="First" rows={3} />
          <InteractiveTextarea label="Centered 2" placeholder="Second" rows={3} />
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea label="End 1" placeholder="First" rows={3} />
          <InteractiveTextarea label="End 2" placeholder="Second" rows={3} />
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
            width: 300,
          }}
        >
          <InteractiveTextarea label="Start 1" placeholder="Textarea 1" rows={2} />
          <InteractiveTextarea label="Start 2" placeholder="Textarea 2" rows={2} />
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
            width: 300,
          }}
        >
          <InteractiveTextarea label="Center 1" placeholder="Textarea 1" rows={2} />
          <InteractiveTextarea label="Center 2" placeholder="Textarea 2" rows={2} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 300,
          }}
        >
          <InteractiveTextarea fullWidth label="Stretch 1" placeholder="Textarea 1" rows={2} />
          <InteractiveTextarea fullWidth label="Stretch 2" placeholder="Textarea 2" rows={2} />
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
          grid-template-columns: repeat(2, 1fr) - Form layout
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea fullWidth label="Description" placeholder="Enter description" />
          <InteractiveTextarea fullWidth label="Notes" placeholder="Enter notes" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Auto-fit columns: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea fullWidth label="Field 1" placeholder="Auto 1" rows={3} />
          <InteractiveTextarea fullWidth label="Field 2" placeholder="Auto 2" rows={3} />
          <InteractiveTextarea fullWidth label="Field 3" placeholder="Auto 3" rows={3} />
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Textarea with submit button
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea fullWidth label="Message" placeholder="Enter your message" />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="normal">Send</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Textarea with validation message (error state)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveTextarea fullWidth variant="error" label="Bio" placeholder="Enter your bio" />
          <div style={{ marginTop: 4, fontSize: 12, color: '#dc3545' }}>
            Bio must be at least 50 characters
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Form with textarea and inputs
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveTextarea fullWidth label="Feedback" placeholder="Enter your feedback" />
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <Button variant="system">Cancel</Button>
            <Button variant="normal">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  ),
}
