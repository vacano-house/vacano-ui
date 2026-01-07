export type ImageCropperOutputType = 'jpeg' | 'png'

export type ImageCropperState = {
  fileName: string
  sourceBase64: string
  sourceWidth: number
  sourceHeight: number
}

export type ImageCropperResult = {
  base64: string
  blob: Blob
  state: ImageCropperState
}

export type ImageCropperError = {
  code: string
  message: string
}

export type UseImageCropperOptions = {
  allowedTypes?: string[]
  applyLabel?: string
  cancelLabel?: string
  compression?: number
  maxFileSize?: number
  onCrop?: (result: ImageCropperResult) => void
  onError?: (error: ImageCropperError) => void
  outputSize?: number
  portalSize?: number
  type?: ImageCropperOutputType
}

export type UseImageCropperReturn = {
  open: () => void
}
