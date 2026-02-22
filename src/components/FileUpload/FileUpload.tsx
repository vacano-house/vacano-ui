import { useCallback, useRef, useState } from 'react'

import { isFileTypeAccepted } from './helpers'
import {
  StyledDropzone,
  StyledDropzoneAction,
  StyledDropzoneHint,
  StyledDropzoneIcon,
  StyledDropzoneText,
  StyledInput,
} from './styled'
import { FileUploadProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('file-upload')

const UploadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
)

export const FileUpload = ({
  accept,
  children,
  className,
  classnames,
  description,
  disabled = false,
  hint,
  icon,
  maxSize,
  multiple = false,
  onChange,
  onReject,
  ref,
  ...rest
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  const processFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return

      const files = Array.from(fileList)

      if (accept) {
        const rejected = files.filter((f) => !isFileTypeAccepted(f, accept))
        if (rejected.length > 0) {
          onReject?.(rejected, 'type')
          const accepted = files.filter((f) => isFileTypeAccepted(f, accept))
          if (accepted.length === 0) return
          onChange?.(accepted)
          return
        }
      }

      if (maxSize) {
        const rejected = files.filter((f) => f.size > maxSize)
        if (rejected.length > 0) {
          onReject?.(rejected, 'size')
          const accepted = files.filter((f) => f.size <= maxSize)
          if (accepted.length === 0) return
          onChange?.(accepted)
          return
        }
      }

      onChange?.(files)
    },
    [accept, maxSize, onChange, onReject],
  )

  const handleClick = () => {
    if (disabled) return
    inputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
    if (!disabled) processFiles(e.dataTransfer.files)
  }

  return (
    <div ref={ref} className={className} {...rest}>
      <StyledDropzone
        className={css('dropzone', classnames?.dropzone)}
        $disabled={disabled}
        $dragOver={dragOver}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        <StyledDropzoneIcon className={css('icon', classnames?.icon)}>
          {icon || <UploadIcon />}
        </StyledDropzoneIcon>

        <StyledDropzoneText className={css('text', classnames?.text)}>
          {description || (
            <span>
              <StyledDropzoneAction>Click to upload</StyledDropzoneAction> or drag and drop
            </span>
          )}
        </StyledDropzoneText>

        {hint && (
          <StyledDropzoneHint className={css('hint', classnames?.hint)}>{hint}</StyledDropzoneHint>
        )}
      </StyledDropzone>

      <StyledInput
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        tabIndex={-1}
      />

      {children}
    </div>
  )
}
