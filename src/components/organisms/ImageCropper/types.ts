import { ImageCropperResult, UseImageCropperOptions } from '../../../hooks/useImageCropper'
import { VacanoComponentProps } from '../../../lib'

export type ImageCropperClassNames = {
  button?: string
  preview?: string
}

export type ImageCropperProps = VacanoComponentProps<HTMLDivElement, ImageCropperClassNames> &
  Omit<UseImageCropperOptions, 'onCrop'> & {
    buttonLabel?: string
    onCrop?: (result: ImageCropperResult) => void
    previewSize?: number
    value?: string | null
  }
