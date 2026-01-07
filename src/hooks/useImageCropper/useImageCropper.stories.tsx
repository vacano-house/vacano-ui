import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { useImageCropper } from './useImageCropper'
import { Button } from '../../components/organisms/Button'

const meta: Meta = {
  title: 'hooks/useImageCropper',
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj

const PlaygroundExample = () => {
  const [image, setImage] = useState<string | null>(null)

  const { open } = useImageCropper({
    onCrop: (result) => {
      setImage(result.base64)
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Button variant="normal" onClick={open}>
        Select Image
      </Button>
      {image && (
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          <img
            src={image}
            alt="Cropped"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundExample />,
}

const HighQualityExample = () => {
  const [image, setImage] = useState<string | null>(null)

  const { open } = useImageCropper({
    outputSize: 800,
    compression: 1,
    type: 'png',
    onCrop: (result) => {
      setImage(result.base64)
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Button variant="normal" onClick={open}>
        Select High Quality Image
      </Button>
      {image && (
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          <img
            src={image}
            alt="Cropped"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  )
}

export const HighQuality: Story = {
  render: () => <HighQualityExample />,
}

const CustomLabelsExample = () => {
  const [image, setImage] = useState<string | null>(null)

  const { open } = useImageCropper({
    applyLabel: 'Save',
    cancelLabel: 'Close',
    onCrop: (result) => {
      setImage(result.base64)
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Button variant="normal" onClick={open}>
        Open Cropper (Custom Labels)
      </Button>
      {image && (
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          <img
            src={image}
            alt="Cropped"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  )
}

export const CustomLabels: Story = {
  render: () => <CustomLabelsExample />,
}

const AvatarUploadExample = () => {
  const [avatar, setAvatar] = useState<string | null>(null)

  const { open } = useImageCropper({
    outputSize: 200,
    portalSize: 150,
    onCrop: (result) => {
      setAvatar(result.base64)
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div
        onClick={open}
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '2px dashed #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: 12, color: '#666' }}>Click to upload</span>
        )}
      </div>
    </div>
  )
}

export const AvatarUpload: Story = {
  render: () => <AvatarUploadExample />,
}

const ProfileCardExample = () => {
  const [avatar, setAvatar] = useState<string | null>(null)

  const { open } = useImageCropper({
    outputSize: 200,
    portalSize: 150,
    onCrop: (result) => {
      setAvatar(result.base64)
    },
  })

  return (
    <div
      style={{
        width: 320,
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div
        onClick={open}
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '3px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          transition: 'border-color 0.2s',
        }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: 32, color: '#ccc' }}>+</span>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: 18, fontWeight: 600 }}>John Doe</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>Click avatar to change</p>
      </div>
    </div>
  )
}

export const ProfileCard: Story = {
  render: () => <ProfileCardExample />,
}

const WithErrorHandlingExample = () => {
  const [image, setImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { open } = useImageCropper({
    maxFileSize: 1024 * 1024, // 1MB limit for demo
    onCrop: (result) => {
      setImage(result.base64)
      setError(null)
    },
    onError: (err) => {
      setError(err.message)
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <Button variant="normal" onClick={open}>
        Select Image (1MB limit)
      </Button>
      {error && <p style={{ color: '#C1121F', fontSize: 14, margin: 0 }}>{error}</p>}
      {image && (
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          <img
            src={image}
            alt="Cropped"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  )
}

export const WithErrorHandling: Story = {
  render: () => <WithErrorHandlingExample />,
}
