import type { Meta, StoryObj } from '@storybook/react-vite'

import { SaveProgressProvider } from './SaveProgressProvider'
import { useSaveProgress } from './useSaveProgress'
import { Button } from '../Button'

const meta: Meta<typeof SaveProgressProvider> = {
  title: 'components/SaveProgress',
  component: SaveProgressProvider,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof SaveProgressProvider>

const PlaygroundDemo = () => {
  const { show, hide, isVisible } = useSaveProgress()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Save Progress Indicator</h3>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        Shows a saving indicator in the bottom-right corner (like auto-save in video games)
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="normal" onClick={() => show()} disabled={isVisible}>
          Show
        </Button>
        <Button variant="system" onClick={() => hide()} disabled={!isVisible}>
          Hide
        </Button>
      </div>
    </div>
  )
}

export const Playground: Story = {
  render: () => (
    <SaveProgressProvider>
      <PlaygroundDemo />
    </SaveProgressProvider>
  ),
}

const CustomMessageDemo = () => {
  const { show, hide, isVisible } = useSaveProgress()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Custom Messages</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="system" onClick={() => show('Saving...')} disabled={isVisible}>
          Show &quot;Saving...&quot;
        </Button>
        <Button variant="system" onClick={() => show('Auto-saving')} disabled={isVisible}>
          Show &quot;Auto-saving&quot;
        </Button>
        <Button variant="system" onClick={() => show('Syncing')} disabled={isVisible}>
          Show &quot;Syncing&quot;
        </Button>
        <Button variant="system" onClick={() => show('Uploading')} disabled={isVisible}>
          Show &quot;Uploading&quot;
        </Button>
        <Button variant="danger" onClick={() => hide()} disabled={!isVisible}>
          Hide
        </Button>
      </div>
    </div>
  )
}

export const CustomMessages: Story = {
  render: () => (
    <SaveProgressProvider>
      <CustomMessageDemo />
    </SaveProgressProvider>
  ),
}

const DefaultMessageDemo = () => {
  const { show, hide, isVisible } = useSaveProgress()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Default Message Override</h3>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        Provider configured with defaultMessage=&quot;Auto-saving&quot;
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="normal" onClick={() => show()} disabled={isVisible}>
          Show Default
        </Button>
        <Button variant="system" onClick={() => hide()} disabled={!isVisible}>
          Hide
        </Button>
      </div>
    </div>
  )
}

export const DefaultMessageOverride: Story = {
  render: () => (
    <SaveProgressProvider defaultMessage="Auto-saving">
      <DefaultMessageDemo />
    </SaveProgressProvider>
  ),
}

const SimulatedSaveDemo = () => {
  const { show, hide } = useSaveProgress()

  const simulateSave = () => {
    show()
    setTimeout(() => {
      hide()
    }, 2000)
  }

  const simulateLongSave = () => {
    show('Saving large file...')
    setTimeout(() => {
      hide()
    }, 5000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Simulated Save Operations</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="normal" onClick={simulateSave}>
          Save (2 seconds)
        </Button>
        <Button variant="system" onClick={simulateLongSave}>
          Save Large File (5 seconds)
        </Button>
      </div>
    </div>
  )
}

export const SimulatedSave: Story = {
  render: () => (
    <SaveProgressProvider>
      <SimulatedSaveDemo />
    </SaveProgressProvider>
  ),
}

const RealWorldDemo = () => {
  const { show, hide } = useSaveProgress()

  const handleInputChange = () => {
    show()
    setTimeout(() => {
      hide()
    }, 1500)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Real-world Example</h3>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        Type in the input to trigger auto-save indicator
      </p>

      <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={{ fontSize: 14, fontWeight: 500 }}>Document Title</label>
          <input
            type="text"
            placeholder="Enter document title..."
            onChange={handleInputChange}
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              fontSize: 14,
            }}
          />
          <label style={{ fontSize: 14, fontWeight: 500 }}>Content</label>
          <textarea
            placeholder="Start typing..."
            onChange={handleInputChange}
            rows={4}
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              fontSize: 14,
              resize: 'vertical',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const RealWorld: Story = {
  name: 'Real-world Example',
  render: () => (
    <SaveProgressProvider>
      <RealWorldDemo />
    </SaveProgressProvider>
  ),
}
