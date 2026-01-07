import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Confirmation as ConfirmationComponent } from './Confirmation'
import { Button } from '../Button'

const meta: Meta<typeof ConfirmationComponent> = {
  title: 'components/Confirmation',
  component: ConfirmationComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'Are you sure you want to delete this item?',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    open: true,
    loading: false,
  },
  argTypes: {
    message: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    open: { control: 'boolean' },
    loading: { control: 'boolean' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
}

export default meta

type Story = StoryObj<typeof ConfirmationComponent>

export const Playground: Story = {
  args: {
    message: 'Are you sure you want to delete this item?',
  },
}

export const ShortMessage: Story = {
  args: {
    message: 'Delete item?',
    confirmLabel: 'Delete',
  },
}

export const LongMessage: Story = {
  args: {
    message: 'This action cannot be undone. Are you sure you want to proceed?',
  },
}

export const Loading: Story = {
  args: {
    message: 'Deleting item...',
    confirmLabel: 'Delete',
    loading: true,
  },
}

export const WithKeyBindings: Story = {
  args: {
    message: 'Delete this item?',
    confirmLabel: 'Delete',
    cancelBindings: ['Escape'],
    submitBindings: ['Meta', 'Enter'],
  },
}

export const CustomLabelsDelete: Story = {
  name: 'Custom Labels: Delete',
  args: {
    message: 'Delete this file permanently?',
    confirmLabel: 'Delete',
    cancelLabel: 'Keep',
  },
}

export const CustomLabelsSave: Story = {
  name: 'Custom Labels: Save',
  args: {
    message: 'Save changes before closing?',
    confirmLabel: 'Save',
    cancelLabel: 'Discard',
  },
}

export const CustomLabelsSubmit: Story = {
  name: 'Custom Labels: Submit',
  args: {
    message: 'Submit your application?',
    confirmLabel: 'Submit',
    cancelLabel: 'Not yet',
  },
}

const InteractiveConfirmation = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleConfirm = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResult('Confirmed!')
      setOpen(false)
    }, 1500)
  }

  const handleCancel = () => {
    setResult('Cancelled')
    setOpen(false)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete Item
      </Button>
      {result && <p style={{ margin: 0, fontSize: 14, color: '#666' }}>Result: {result}</p>}
      <ConfirmationComponent
        open={open}
        message="Are you sure you want to delete this item?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        loading={loading}
        cancelBindings={['Escape']}
        submitBindings={['Meta', 'Enter']}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveConfirmation />,
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 32, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ margin: '0 0 16px 0', fontSize: 20 }}>My Files</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['document.pdf', 'image.png', 'video.mp4', 'archive.zip'].map((file) => (
          <div
            key={file}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: '#fff',
              borderRadius: 8,
              border: '1px solid #e5e7eb',
            }}
          >
            <span style={{ fontSize: 14 }}>{file}</span>
            <Button variant="transparent" size="compact">
              Delete
            </Button>
          </div>
        ))}
      </div>
      <ConfirmationComponent
        message="Delete document.pdf?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
      />
    </div>
  ),
}
