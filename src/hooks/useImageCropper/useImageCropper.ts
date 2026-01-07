import { useCallback, useRef } from 'react'

import { HqCropper } from 'hq-cropper'

import { CROPPER_CSS, DEFAULT_CONFIG, injectCropperStyles } from './constants'
import { ImageCropperState, UseImageCropperOptions, UseImageCropperReturn } from './types'

type CropperInstance = {
  open: () => void
}

export const useImageCropper = (options: UseImageCropperOptions = {}): UseImageCropperReturn => {
  const {
    allowedTypes = DEFAULT_CONFIG.allowedTypes,
    applyLabel = DEFAULT_CONFIG.applyLabel,
    cancelLabel = DEFAULT_CONFIG.cancelLabel,
    compression = DEFAULT_CONFIG.compression,
    maxFileSize = DEFAULT_CONFIG.maxFileSize,
    onCrop,
    onError,
    outputSize = DEFAULT_CONFIG.outputSize,
    portalSize = DEFAULT_CONFIG.portalSize,
    type = DEFAULT_CONFIG.type,
  } = options

  const cropperRef = useRef<CropperInstance | null>(null)

  const open = useCallback(() => {
    if (!cropperRef.current) {
      injectCropperStyles()
      cropperRef.current = HqCropper(
        (base64: string, blob: Blob | null, state: ImageCropperState) => {
          if (blob) {
            onCrop?.({ base64, blob, state })
          }
        },
        {
          portalSize,
          outputSize,
          compression,
          type,
          maxFileSize,
          allowedTypes,
          applyButtonLabel: applyLabel,
          cancelButtonLabel: cancelLabel,
        },
        CROPPER_CSS,
        (message: string) => {
          onError?.({ code: 'CROPPER_ERROR', message })
        },
      )
    }

    cropperRef.current.open()
  }, [
    allowedTypes,
    applyLabel,
    cancelLabel,
    compression,
    maxFileSize,
    onCrop,
    onError,
    outputSize,
    portalSize,
    type,
  ])

  return { open }
}
