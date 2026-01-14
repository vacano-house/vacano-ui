import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio as RadioComponent } from './Radio'
import { RadioProps } from './types'

const meta: Meta<typeof RadioComponent> = {
  title: 'components/Radio',
  component: RadioComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Radio label',
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof RadioComponent>

const InteractiveRadio = (props: RadioProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <RadioComponent {...props} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveRadio {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <RadioComponent checked={false} label="Unchecked" onChange={() => {}} />
      <RadioComponent checked={true} label="Checked" onChange={() => {}} />
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
          <RadioComponent checked={false} variant="normal" label="Unchecked" onChange={() => {}} />
          <RadioComponent checked={true} variant="normal" label="Checked" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <RadioComponent checked={false} variant="error" label="Unchecked" onChange={() => {}} />
          <RadioComponent checked={true} variant="error" label="Checked" onChange={() => {}} />
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
          <RadioComponent checked={false} disabled label="Unchecked" onChange={() => {}} />
          <RadioComponent checked={true} disabled label="Checked" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <RadioComponent
            checked={false}
            disabled
            variant="error"
            label="Unchecked"
            onChange={() => {}}
          />
          <RadioComponent
            checked={true}
            disabled
            variant="error"
            label="Checked"
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
      <RadioComponent checked={false} onChange={() => {}} />
      <RadioComponent checked={true} onChange={() => {}} />
      <span style={{ color: '#666', fontSize: 14 }}>Radio buttons without labels</span>
    </div>
  ),
}

const RadioGroupDemo = () => {
  const [selected, setSelected] = useState('option1')
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {options.map((option) => (
        <RadioComponent
          key={option.value}
          name="radio-group"
          checked={selected === option.value}
          label={option.label}
          onChange={() => setSelected(option.value)}
        />
      ))}
    </div>
  )
}

export const AsGroup: Story = {
  name: 'As Radio Group',
  parameters: { layout: 'padded' },
  render: () => <RadioGroupDemo />,
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - each radio takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <RadioComponent checked={false} label="First option" onChange={() => {}} />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <RadioComponent
            checked={true}
            label="Second option with longer text"
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <RadioComponent checked={false} label="Third option" onChange={() => {}} />
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
        display: inline / inline-block - radios flow inline with text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <span>Select option: </span>
        <span style={{ display: 'inline-block', marginRight: 16 }}>
          <RadioComponent checked={false} label="Option A" onChange={() => {}} />
        </span>
        <span style={{ display: 'inline-block', marginRight: 16 }}>
          <RadioComponent checked={true} label="Option B" onChange={() => {}} />
        </span>
        <span style={{ display: 'inline-block' }}>
          <RadioComponent checked={false} label="Option C" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Option 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Option 2" onChange={() => {}} />
          <RadioComponent checked={false} label="Option 3" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Left" onChange={() => {}} />
          <RadioComponent checked={true} label="Center" onChange={() => {}} />
          <RadioComponent checked={false} label="Right" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Centered 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Centered 2" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Start 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Start 2" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Center 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Center 2" onChange={() => {}} />
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
          <RadioComponent checked={false} label="End 1" onChange={() => {}} />
          <RadioComponent checked={true} label="End 2" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Item 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Item 2" onChange={() => {}} />
          <RadioComponent checked={false} label="Item 3" onChange={() => {}} />
          <RadioComponent checked={false} label="Item 4" onChange={() => {}} />
          <RadioComponent checked={false} label="Item 5" onChange={() => {}} />
          <RadioComponent checked={false} label="Item 6" onChange={() => {}} />
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
          <RadioComponent checked={false} label="Center 1" onChange={() => {}} />
          <RadioComponent checked={true} label="Center 2" onChange={() => {}} />
          <RadioComponent checked={false} label="Center 3" onChange={() => {}} />
          <RadioComponent checked={false} label="Center 4" onChange={() => {}} />
        </div>
      </div>
    </div>
  ),
}

export const WithLinks: Story = {
  name: 'With Links in Label',
  parameters: { layout: 'padded' },
  render: () => {
    const RadioWithLinksDemo = () => {
      const [selected, setSelected] = useState('')

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
              Label with link (click link to navigate, click text to select)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <RadioComponent
                name="plan"
                checked={selected === 'free'}
                onChange={() => setSelected('free')}
                label={
                  <>
                    Free plan - <a href="https://example.com/free">see details</a>
                  </>
                }
              />
              <RadioComponent
                name="plan"
                checked={selected === 'pro'}
                onChange={() => setSelected('pro')}
                label={
                  <>
                    Pro plan - <a href="https://example.com/pro">see details</a>
                  </>
                }
              />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
              Error variant with link
            </div>
            <RadioComponent
              checked={false}
              variant="error"
              onChange={() => {}}
              label={
                <>
                  Select to accept <a href="https://example.com/terms">Terms</a>
                </>
              }
            />
          </div>

          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Long text with link</div>
            <div style={{ width: 300 }}>
              <RadioComponent
                checked={false}
                onChange={() => {}}
                label={
                  <>
                    I want to receive marketing emails according to the{' '}
                    <a href="https://example.com/privacy">Privacy Policy</a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      )
    }

    return <RadioWithLinksDemo />
  },
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Radio with long label in constrained width
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 250 }}>
          <RadioComponent
            checked={false}
            label="This is a very long label that should wrap to multiple lines when the container is narrow"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple radios with varying label lengths
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
          <RadioComponent checked={false} label="Short" onChange={() => {}} />
          <RadioComponent checked={true} label="Medium length label" onChange={() => {}} />
          <RadioComponent
            checked={false}
            label="This is a longer label to show alignment"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}
