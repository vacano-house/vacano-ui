# ImageCropper

Image cropping component with preview and file selection.

*Also known as: avatar upload, image editor, photo crop, profile picture upload*

<a href="/storybook/?path=/story/components-imagecropper--playground" target="_blank">View in Storybook</a>

## When to use

- Uploading and cropping images (avatars, profile pictures). Provides crop preview and configurable aspect ratio.

## Import

```tsx
import { ImageCropper } from '@vacano/ui'
```

## Usage

```tsx
const [image, setImage] = useState<string | null>(null)

<ImageCropper
  value={image}
  onCrop={(result) => setImage(result.dataUrl)}
/>
```

## Custom Button Label

```tsx
<ImageCropper
  value={image}
  onCrop={handleCrop}
  buttonLabel="Upload Photo"
/>
```

## Preview Size

```tsx
<ImageCropper
  value={image}
  onCrop={handleCrop}
  previewSize={150}
/>
```

## Crop Options

Configure the cropping behavior:

```tsx
<ImageCropper
  value={image}
  onCrop={handleCrop}
  aspectRatio={1}        // Square crop
  minWidth={100}
  minHeight={100}
/>
```

## Crop Result

The `onCrop` callback receives a result object:

```tsx
type ImageCropperResult = {
  dataUrl: string    // Base64 data URL
  blob: Blob         // Image blob
  width: number      // Cropped width
  height: number     // Cropped height
}
```

## Full Example

```tsx
function AvatarUploader() {
  const [avatar, setAvatar] = useState<string | null>(null)

  const handleCrop = (result: ImageCropperResult) => {
    setAvatar(result.dataUrl)
    // Upload to server
    uploadAvatar(result.blob)
  }

  return (
    <div>
      <h3>Profile Picture</h3>
      <ImageCropper
        value={avatar}
        onCrop={handleCrop}
        buttonLabel="Choose Photo"
        previewSize={120}
        aspectRatio={1}
      />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| null` | - | Current image URL |
| `onCrop` | `(result: ImageCropperResult) => void` | - | Crop complete callback |
| `buttonLabel` | `string` | - | Upload button label |
| `previewSize` | `number` | - | Preview image size |
| `aspectRatio` | `number` | - | Crop aspect ratio |
| `minWidth` | `number` | - | Minimum crop width |
| `minHeight` | `number` | - | Minimum crop height |
| `className` | `string` | - | CSS class name |
| `classnames` | `ImageCropperClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `button` | Upload button |
| `preview` | Image preview |
