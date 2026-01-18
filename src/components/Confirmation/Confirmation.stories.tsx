import type { Meta, StoryObj } from '@storybook/react-vite'

import { ConfirmationProvider } from './ConfirmationProvider'
import { useConfirmation } from './useConfirmation'
import { Button } from '../Button'

const meta: Meta = {
  title: 'components/Confirmation',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ConfirmationProvider>
        <Story />
      </ConfirmationProvider>
    ),
  ],
}

export default meta

type Story = StoryObj

const BasicDemo = () => {
  const { show } = useConfirmation()

  const handleDelete = () => {
    show(
      'Are you sure you want to delete this item?',
      () => console.log('Confirmed!'),
      () => console.log('Cancelled'),
    )
  }

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete Item
    </Button>
  )
}

export const Playground: Story = {
  render: () => <BasicDemo />,
}

const CustomLabelsDemo = () => {
  const { show } = useConfirmation()

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button
        variant="danger"
        onClick={() =>
          show('Delete this file permanently?', () => {}, undefined, {
            confirmLabel: 'Delete',
            cancelLabel: 'Keep',
          })
        }
      >
        Delete File
      </Button>
      <Button
        variant="warning"
        onClick={() =>
          show('Save changes before closing?', () => {}, undefined, {
            confirmLabel: 'Save',
            cancelLabel: 'Discard',
          })
        }
      >
        Close Editor
      </Button>
      <Button
        variant="success"
        onClick={() =>
          show('Submit your application?', () => {}, undefined, {
            confirmLabel: 'Submit',
            cancelLabel: 'Not yet',
          })
        }
      >
        Submit Form
      </Button>
    </div>
  )
}

export const CustomLabels: Story = {
  render: () => <CustomLabelsDemo />,
}

const AsyncDemo = () => {
  const { show } = useConfirmation()

  const handleDelete = () => {
    show(
      'Are you sure you want to delete this item?',
      async () => {
        // Simulate async operation
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log('Deleted!')
      },
      () => console.log('Cancelled'),
      { confirmLabel: 'Delete', cancelLabel: 'Cancel' },
    )
  }

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete with Loading
    </Button>
  )
}

export const AsyncWithLoading: Story = {
  name: 'Async with Loading',
  render: () => <AsyncDemo />,
}

const FileListDemo = () => {
  const { show } = useConfirmation()

  const handleDeleteFile = (fileName: string) => {
    show(`Delete "${fileName}"?`, () => console.log(`Deleted: ${fileName}`), undefined, {
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 300 }}>
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
          <Button variant="transparent" size="compact" onClick={() => handleDeleteFile(file)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}

export const FileListExample: Story = {
  name: 'Example: File List',
  render: () => <FileListDemo />,
}
