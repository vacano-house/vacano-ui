import { useState } from 'react'

import { StyledContainer, StyledPlaceholder, StyledPreview } from './styled'
import { ImageCropperProps } from './types'
import { Button } from '../Button'
import { useImageCropper } from '../../hooks/useImageCropper'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('image-cropper')

export const ImageCropper = ({
  allowedTypes,
  applyLabel,
  buttonLabel = 'Select Image',
  cancelLabel,
  className,
  classnames,
  compression,
  maxFileSize,
  onCrop,
  onError,
  outputSize,
  portalSize,
  previewSize = 120,
  ref,
  type,
  value,
  ...rest
}: ImageCropperProps) => {
  const [preview, setPreview] = useState<string | null>(value ?? null)

  const { open } = useImageCropper({
    allowedTypes,
    applyLabel,
    cancelLabel,
    compression,
    maxFileSize,
    onCrop: (result) => {
      setPreview(result.base64)
      onCrop?.(result)
    },
    onError,
    outputSize,
    portalSize,
    type,
  })

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      <StyledPreview $size={previewSize} className={css('preview', classnames?.preview)}>
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <StyledPlaceholder>No image</StyledPlaceholder>
        )}
      </StyledPreview>
      <Button
        variant="system"
        onClick={open}
        className={css('button', classnames?.button)}
        style={{ width: previewSize }}
      >
        {buttonLabel}
      </Button>
    </StyledContainer>
  )
}
