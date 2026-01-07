import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox as CheckboxComponent } from './Checkbox'
import { CheckboxProps } from './types'

const meta: Meta<typeof CheckboxComponent> = {
  title: 'components/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    label: 'Checkbox label',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxComponent>

const InteractiveCheckbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <CheckboxComponent
      {...props}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveCheckbox {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <InteractiveCheckbox checked={false} label="Unchecked" onChange={() => {}} />
      <InteractiveCheckbox checked={true} label="Checked" onChange={() => {}} />
      <InteractiveCheckbox
        checked={false}
        indeterminate
        label="Indeterminate"
        onChange={() => {}}
      />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveCheckbox
            checked={false}
            variant="normal"
            label="Unchecked"
            onChange={() => {}}
          />
          <InteractiveCheckbox
            checked={true}
            variant="normal"
            label="Checked"
            onChange={() => {}}
          />
          <InteractiveCheckbox
            checked={false}
            indeterminate
            variant="normal"
            label="Indeterminate"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveCheckbox
            checked={false}
            variant="error"
            label="Unchecked"
            onChange={() => {}}
          />
          <InteractiveCheckbox checked={true} variant="error" label="Checked" onChange={() => {}} />
          <InteractiveCheckbox
            checked={false}
            indeterminate
            variant="error"
            label="Indeterminate"
            onChange={() => {}}
          />
        </div>
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
          <CheckboxComponent checked={false} disabled label="Unchecked" onChange={() => {}} />
          <CheckboxComponent checked={true} disabled label="Checked" onChange={() => {}} />
          <CheckboxComponent
            checked={false}
            disabled
            indeterminate
            label="Indeterminate"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <CheckboxComponent
            checked={false}
            disabled
            variant="error"
            label="Unchecked"
            onChange={() => {}}
          />
          <CheckboxComponent
            checked={true}
            disabled
            variant="error"
            label="Checked"
            onChange={() => {}}
          />
          <CheckboxComponent
            checked={false}
            disabled
            indeterminate
            variant="error"
            label="Indeterminate"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <InteractiveCheckbox checked={false} onChange={() => {}} />
      <InteractiveCheckbox checked={true} onChange={() => {}} />
      <InteractiveCheckbox checked={false} indeterminate onChange={() => {}} />
      <span style={{ color: '#666', fontSize: 14 }}>Checkboxes without labels</span>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - each checkbox takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveCheckbox checked={false} label="First option" onChange={() => {}} />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveCheckbox
            checked={true}
            label="Second option with longer text"
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveCheckbox checked={false} label="Third option" onChange={() => {}} />
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
        display: inline / inline-block - checkboxes flow inline with text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <span>Select options: </span>
        <span style={{ display: 'inline-block', marginRight: 16 }}>
          <InteractiveCheckbox checked={false} label="Option A" onChange={() => {}} />
        </span>
        <span style={{ display: 'inline-block', marginRight: 16 }}>
          <InteractiveCheckbox checked={true} label="Option B" onChange={() => {}} />
        </span>
        <span style={{ display: 'inline-block' }}>
          <InteractiveCheckbox checked={false} label="Option C" onChange={() => {}} />
        </span>
        <span> and continue with text.</span>
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
          <InteractiveCheckbox checked={false} label="Option 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Option 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Option 3" onChange={() => {}} />
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
            width: 500,
          }}
        >
          <InteractiveCheckbox checked={false} label="Left" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Center" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Right" onChange={() => {}} />
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
          <InteractiveCheckbox checked={false} label="Centered 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Centered 2" onChange={() => {}} />
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
          <InteractiveCheckbox checked={false} label="End 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="End 2" onChange={() => {}} />
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
            width: 200,
            height: 150,
          }}
        >
          <InteractiveCheckbox checked={false} label="Start 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Start 2" onChange={() => {}} />
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
            width: 200,
            height: 150,
          }}
        >
          <InteractiveCheckbox checked={false} label="Center 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Center 2" onChange={() => {}} />
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
            width: 200,
            height: 150,
          }}
        >
          <InteractiveCheckbox checked={false} label="End 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="End 2" onChange={() => {}} />
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
            width: 200,
            height: 150,
          }}
        >
          <InteractiveCheckbox checked={false} label="Stretch 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Stretch 2" onChange={() => {}} />
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
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
          maxWidth: 400,
        }}
      >
        <InteractiveCheckbox checked={false} label="Apple" onChange={() => {}} />
        <InteractiveCheckbox checked={true} label="Banana" onChange={() => {}} />
        <InteractiveCheckbox checked={false} label="Cherry" onChange={() => {}} />
        <InteractiveCheckbox checked={true} label="Date" onChange={() => {}} />
        <InteractiveCheckbox checked={false} label="Elderberry" onChange={() => {}} />
        <InteractiveCheckbox checked={false} label="Fig" onChange={() => {}} />
        <InteractiveCheckbox checked={true} label="Grape" onChange={() => {}} />
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
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="Item 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Item 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Item 3" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Item 4" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Item 5" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Item 6" onChange={() => {}} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: start
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="Start 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Start 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Start 3" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Start 4" onChange={() => {}} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: center
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="Center 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Center 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Center 3" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Center 4" onChange={() => {}} />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: end
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'end',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="End 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="End 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="End 3" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="End 4" onChange={() => {}} />
        </div>
      </div>
    </div>
  ),
}

export const LayoutGridStretch: Story = {
  name: 'Layout: Grid Stretch',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-items: stretch (checkbox container stretches to fill cell)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            justifyItems: 'stretch',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <div style={{ border: '1px solid #eee', padding: 8 }}>
            <InteractiveCheckbox checked={false} label="Stretch 1" onChange={() => {}} />
          </div>
          <div style={{ border: '1px solid #eee', padding: 8 }}>
            <InteractiveCheckbox checked={true} label="Stretch 2" onChange={() => {}} />
          </div>
          <div style={{ border: '1px solid #eee', padding: 8 }}>
            <InteractiveCheckbox checked={false} label="Stretch 3" onChange={() => {}} />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Auto-fit columns: grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="Auto 1" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Auto 2" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Auto 3" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Auto 4" onChange={() => {}} />
          <InteractiveCheckbox checked={false} label="Auto 5" onChange={() => {}} />
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
          Checkbox in a form row with button
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckbox checked={false} label="I agree to the terms" onChange={() => {}} />
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Submit</button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Checkbox with long label in constrained width
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 250 }}>
          <InteractiveCheckbox
            checked={false}
            label="This is a very long label that should wrap to multiple lines when the container is narrow"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple checkboxes with varying label lengths
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
          <InteractiveCheckbox checked={false} label="Short" onChange={() => {}} />
          <InteractiveCheckbox checked={true} label="Medium length label" onChange={() => {}} />
          <InteractiveCheckbox
            checked={false}
            label="This is a longer label to show alignment"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}
