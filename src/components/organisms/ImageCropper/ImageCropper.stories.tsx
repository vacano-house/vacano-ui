import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageCropper as ImageCropperComponent } from './ImageCropper'

const meta: Meta<typeof ImageCropperComponent> = {
  title: 'organisms/ImageCropper',
  component: ImageCropperComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    previewSize: 120,
    buttonLabel: 'Select Image',
  },
  argTypes: {
    previewSize: { control: 'number' },
    buttonLabel: { control: 'text' },
    outputSize: { control: 'number' },
    portalSize: { control: 'number' },
    compression: { control: { type: 'range', min: 0.1, max: 1, step: 0.1 } },
    type: { control: 'select', options: ['jpeg', 'png'] },
    onCrop: { action: 'cropped' },
    onError: { action: 'error' },
  },
}

export default meta

type Story = StoryObj<typeof ImageCropperComponent>

export const Playground: Story = {
  args: {},
}

export const LargePreview: Story = {
  args: {
    previewSize: 200,
  },
}

export const SmallPreview: Story = {
  args: {
    previewSize: 80,
  },
}

export const CustomLabels: Story = {
  args: {
    buttonLabel: 'Upload Avatar',
    applyLabel: 'Save',
    cancelLabel: 'Close',
  },
}

export const HighQuality: Story = {
  args: {
    outputSize: 800,
    compression: 1,
    type: 'png',
  },
}

export const WithInitialValue: Story = {
  args: {
    value: 'https://picsum.photos/200',
  },
}
