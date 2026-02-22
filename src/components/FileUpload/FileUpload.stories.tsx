import { useCallback, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileUpload as FileUploadComponent } from './FileUpload'
import { FileUploadItem } from './FileUploadItem'
import { StyledList } from './styled'
import { FileUploadFile } from './types'

const meta: Meta<typeof FileUploadComponent> = {
  title: 'components/FileUpload',
  component: FileUploadComponent,
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj<typeof FileUploadComponent>

let fileIdCounter = 0

const useFileUpload = () => {
  const [files, setFiles] = useState<FileUploadFile[]>([])

  const simulateUpload = useCallback((file: File) => {
    const id = String(++fileIdCounter)
    const entry: FileUploadFile = {
      id,
      name: file.name,
      size: file.size,
      status: 'uploading',
      progress: 0,
      file,
    }

    setFiles((prev) => [...prev, entry])

    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, progress: 100, status: 'complete' } : f)),
        )
      } else {
        setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, progress } : f)))
      }
    }, 500)
  }, [])

  const handleChange = useCallback(
    (newFiles: File[]) => {
      newFiles.forEach(simulateUpload)
    },
    [simulateUpload],
  )

  const handleRemove = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const handleRetry = useCallback((id: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'uploading', progress: 0 } : f)),
    )

    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, progress: 100, status: 'complete' } : f)),
        )
      } else {
        setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, progress } : f)))
      }
    }, 500)
  }, [])

  return { files, handleChange, handleRemove, handleRetry }
}

const PlaygroundExample = () => {
  const { files, handleChange, handleRemove, handleRetry } = useFileUpload()

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent
        multiple
        onChange={handleChange}
        hint="SVG, PNG, JPG or GIF (max. 800x400px)"
      >
        {files.length > 0 && (
          <StyledList>
            {files.map((f) => (
              <FileUploadItem
                key={f.id}
                name={f.name}
                size={f.size}
                status={f.status}
                progress={f.progress}
                onRemove={() => handleRemove(f.id)}
                onRetry={() => handleRetry(f.id)}
              />
            ))}
          </StyledList>
        )}
      </FileUploadComponent>
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundExample />,
}

export const FileStatuses: Story = {
  render: () => (
    <div style={{ maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FileUploadItem name="design-mockup.png" size={1048576} status="uploading" progress={45} />
      <FileUploadItem
        name="presentation.pdf"
        size={2621440}
        status="complete"
        onRemove={() => {}}
      />
      <FileUploadItem
        name="archive-data-backup-2024.zip"
        size={5242880}
        status="failed"
        onRemove={() => {}}
        onRetry={() => {}}
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent disabled hint="SVG, PNG, JPG or GIF (max. 800x400px)" />
    </div>
  ),
}

const AcceptImagesExample = () => {
  const { files, handleChange, handleRemove, handleRetry } = useFileUpload()

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent
        multiple
        accept="image/*"
        onChange={handleChange}
        hint="PNG, JPG, GIF, SVG, WEBP"
      >
        {files.length > 0 && (
          <StyledList>
            {files.map((f) => (
              <FileUploadItem
                key={f.id}
                name={f.name}
                size={f.size}
                status={f.status}
                progress={f.progress}
                onRemove={() => handleRemove(f.id)}
                onRetry={() => handleRetry(f.id)}
              />
            ))}
          </StyledList>
        )}
      </FileUploadComponent>
    </div>
  )
}

export const AcceptImages: Story = {
  name: 'Accept Images Only',
  render: () => <AcceptImagesExample />,
}

const MaxSizeExample = () => {
  const { files, handleChange, handleRemove, handleRetry } = useFileUpload()
  const [rejected, setRejected] = useState<string[]>([])

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent
        multiple
        maxSize={1048576}
        onChange={handleChange}
        onReject={(rejectedFiles) => {
          setRejected(rejectedFiles.map((f) => f.name))
          setTimeout(() => setRejected([]), 3000)
        }}
        hint="Max file size: 1MB"
      >
        {rejected.length > 0 && (
          <div
            style={{
              marginTop: 12,
              padding: '10px 14px',
              borderRadius: 8,
              backgroundColor: '#fef2f2',
              color: '#C1121F',
              fontSize: 14,
            }}
          >
            Rejected: {rejected.join(', ')} (exceeds 1MB)
          </div>
        )}
        {files.length > 0 && (
          <StyledList>
            {files.map((f) => (
              <FileUploadItem
                key={f.id}
                name={f.name}
                size={f.size}
                status={f.status}
                progress={f.progress}
                onRemove={() => handleRemove(f.id)}
                onRetry={() => handleRetry(f.id)}
              />
            ))}
          </StyledList>
        )}
      </FileUploadComponent>
    </div>
  )
}

export const MaxSize: Story = {
  name: 'Max File Size (1MB)',
  render: () => <MaxSizeExample />,
}

const SingleFileExample = () => {
  const { files, handleChange, handleRemove, handleRetry } = useFileUpload()

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent onChange={handleChange} hint="Upload a single file">
        {files.length > 0 && (
          <StyledList>
            {files.map((f) => (
              <FileUploadItem
                key={f.id}
                name={f.name}
                size={f.size}
                status={f.status}
                progress={f.progress}
                onRemove={() => handleRemove(f.id)}
                onRetry={() => handleRetry(f.id)}
              />
            ))}
          </StyledList>
        )}
      </FileUploadComponent>
    </div>
  )
}

export const SingleFile: Story = {
  render: () => <SingleFileExample />,
}

const CustomDescriptionExample = () => {
  const { files, handleChange, handleRemove } = useFileUpload()

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent
        multiple
        description={
          <span>
            <strong>Drop files here</strong> or browse your computer
          </span>
        }
        hint="PDF, DOC, DOCX up to 10MB"
        onChange={handleChange}
      >
        {files.length > 0 && (
          <StyledList>
            {files.map((f) => (
              <FileUploadItem
                key={f.id}
                name={f.name}
                size={f.size}
                status={f.status}
                progress={f.progress}
                onRemove={() => handleRemove(f.id)}
              />
            ))}
          </StyledList>
        )}
      </FileUploadComponent>
    </div>
  )
}

export const CustomDescription: Story = {
  render: () => <CustomDescriptionExample />,
}

const WithFailedUploadExample = () => {
  const [files, setFiles] = useState<FileUploadFile[]>([
    { id: '1', name: 'report-q4-2024.pdf', size: 3145728, status: 'complete' },
    { id: '2', name: 'data-export.csv', size: 524288, status: 'failed', progress: 67 },
    { id: '3', name: 'screenshot.png', size: 204800, status: 'uploading', progress: 32 },
  ])

  return (
    <div style={{ maxWidth: 520 }}>
      <FileUploadComponent multiple hint="SVG, PNG, JPG or GIF (max. 800x400px)">
        <StyledList>
          {files.map((f) => (
            <FileUploadItem
              key={f.id}
              name={f.name}
              size={f.size}
              status={f.status}
              progress={f.progress}
              onRemove={() => setFiles((prev) => prev.filter((file) => file.id !== f.id))}
              onRetry={() =>
                setFiles((prev) =>
                  prev.map((file) =>
                    file.id === f.id ? { ...file, status: 'uploading', progress: 0 } : file,
                  ),
                )
              }
            />
          ))}
        </StyledList>
      </FileUploadComponent>
    </div>
  )
}

export const WithFailedUpload: Story = {
  render: () => <WithFailedUploadExample />,
}
