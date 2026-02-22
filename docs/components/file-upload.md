# FileUpload

Dropzone with drag-and-drop file upload and file list with progress indicators.

*Also known as: file input, dropzone, file picker, upload area*

<a href="/storybook/?path=/story/components-fileupload--playground" target="_blank">View in Storybook</a>

## When to use

- Uploading files with drag-and-drop support.
- Showing upload progress for each file.
- Restricting file types or sizes.

## Import

```tsx
import { FileUpload, FileUploadItem } from '@vacano/ui'
```

## Usage

```tsx
<FileUpload onChange={(files) => console.log(files)}>
  {/* File list rendered here */}
</FileUpload>
```

## Accept file types

```tsx
<FileUpload accept="image/*" onChange={handleChange} />
<FileUpload accept=".pdf,.doc,.docx" onChange={handleChange} />
```

## Max file size

Limit in bytes. Rejected files trigger `onReject` with `reason: 'size'`.

```tsx
<FileUpload maxSize={5 * 1024 * 1024} onReject={handleReject}>
  ...
</FileUpload>
```

## Multiple files

```tsx
<FileUpload multiple onChange={handleChange} />
```

## File list with progress

Use `FileUploadItem` to display individual files with upload status.

```tsx
<FileUpload onChange={handleChange}>
  <FileUploadItem
    name="document.pdf"
    size={1024000}
    status="uploading"
    progress={45}
    onRemove={() => {}}
  />
  <FileUploadItem
    name="photo.jpg"
    size={2048000}
    status="complete"
    onRemove={() => {}}
  />
  <FileUploadItem
    name="broken.txt"
    size={512}
    status="failed"
    onRemove={() => {}}
    onRetry={() => {}}
  />
</FileUpload>
```

## Custom description

```tsx
<FileUpload
  description="Drop your SVG icons here"
  hint="SVG only, max 1MB"
  onChange={handleChange}
/>
```

## FileUpload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accept` | `string` | - | Accepted file types (MIME types or extensions) |
| `children` | `ReactNode` | - | File list content below the dropzone |
| `description` | `ReactNode` | - | Custom dropzone description text |
| `disabled` | `boolean` | `false` | Disable the dropzone |
| `hint` | `ReactNode` | - | Hint text below description |
| `icon` | `ReactNode` | - | Custom dropzone icon |
| `maxSize` | `number` | - | Max file size in bytes |
| `multiple` | `boolean` | `true` | Allow multiple files |
| `onChange` | `(files: File[]) => void` | - | Callback with accepted files |
| `onReject` | `(files: File[], reason: 'type' \| 'size') => void` | - | Callback for rejected files |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `FileUploadClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

## FileUploadItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | File name |
| `size` | `number` | **required** | File size in bytes |
| `status` | `'uploading' \| 'complete' \| 'failed'` | `'uploading'` | Upload status |
| `progress` | `number` | - | Upload progress (0-100) |
| `icon` | `ReactNode` | - | Custom file icon |
| `onRemove` | `() => void` | - | Remove file callback |
| `onRetry` | `() => void` | - | Retry upload callback (shown when failed) |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `FileUploadItemClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

### FileUploadFile Type

The `FileUploadFile` type can be used to manage file state in your application:

```tsx
type FileUploadFile = {
  id: string
  name: string
  size: number
  progress?: number
  status: 'uploading' | 'complete' | 'failed'
  file?: File
}
```

### ClassNames (FileUpload)

| Key | Description |
|-----|-------------|
| `dropzone` | The drop area container |
| `icon` | Dropzone icon |
| `text` | Dropzone text content |
| `hint` | Hint text below description |
| `list` | File list container |

### ClassNames (FileUploadItem)

| Key | Description |
|-----|-------------|
| `icon` | File type icon |
| `info` | File info container |
| `name` | File name text |
| `size` | File size text |
| `progress` | Progress bar |
| `action` | Action buttons (remove, retry) |

## Related

- [Progress](/components/progress) - Standalone progress bar
- [Button](/components/button) - Action buttons
