import { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type FileUploadClassNames = {
  dropzone?: string
  icon?: string
  text?: string
  hint?: string
  list?: string
}

export type FileUploadItemStatus = 'uploading' | 'complete' | 'failed'

export type FileUploadFile = {
  id: string
  name: string
  size: number
  progress?: number
  status: FileUploadItemStatus
  file?: File
}

export type FileUploadItemClassNames = {
  icon?: string
  info?: string
  name?: string
  size?: string
  progress?: string
  action?: string
}

export type FileUploadProps = VacanoComponentProps<HTMLDivElement, FileUploadClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    accept?: string
    children?: ReactNode
    description?: ReactNode
    disabled?: boolean
    hint?: ReactNode
    icon?: ReactNode
    maxSize?: number
    multiple?: boolean
    onChange?: (files: File[]) => void
    onReject?: (files: File[], reason: 'type' | 'size') => void
  }

export type FileUploadItemProps = VacanoComponentProps<HTMLDivElement, FileUploadItemClassNames> & {
  name: string
  size: number
  status?: FileUploadItemStatus
  progress?: number
  icon?: ReactNode
  onRemove?: () => void
  onRetry?: () => void
}
