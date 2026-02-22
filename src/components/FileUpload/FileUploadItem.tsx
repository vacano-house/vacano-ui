import { formatFileSize } from './helpers'
import {
  StyledCheckIcon,
  StyledItem,
  StyledItemAction,
  StyledItemContent,
  StyledItemHeader,
  StyledItemIcon,
  StyledItemInfo,
  StyledItemName,
  StyledItemProgress,
  StyledItemSize,
  StyledProgressBar,
  StyledProgressText,
  StyledProgressTrack,
  StyledRetryLink,
  StyledStatusRow,
} from './styled'
import { FileUploadItemProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('file-upload-item')

const DefaultFileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
)

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const FileUploadItem = ({
  name,
  size,
  status = 'uploading',
  progress = 0,
  icon,
  onRemove,
  onRetry,
  className,
  classnames,
  ref,
}: FileUploadItemProps) => {
  return (
    <StyledItem ref={ref} className={css('item', className)} $status={status}>
      <StyledItemIcon className={css('icon', classnames?.icon)} $status={status}>
        {icon || <DefaultFileIcon />}
      </StyledItemIcon>

      <StyledItemContent>
        <StyledItemHeader>
          <StyledItemInfo className={css('info', classnames?.info)}>
            <StyledItemName className={css('name', classnames?.name)}>{name}</StyledItemName>
            <StyledItemSize className={css('size', classnames?.size)}>
              {formatFileSize(size)}
            </StyledItemSize>
          </StyledItemInfo>

          {onRemove && (
            <StyledItemAction
              className={css('action', classnames?.action)}
              onClick={onRemove}
              aria-label="Remove file"
              type="button"
            >
              <CloseIcon />
            </StyledItemAction>
          )}
        </StyledItemHeader>

        {status === 'uploading' && (
          <StyledItemProgress className={css('progress', classnames?.progress)}>
            <StyledProgressTrack>
              <StyledProgressBar $value={progress} $status={status} />
            </StyledProgressTrack>
            <StyledProgressText>{progress}%</StyledProgressText>
          </StyledItemProgress>
        )}

        {status === 'complete' && (
          <StyledStatusRow>
            <StyledCheckIcon>
              <CheckIcon />
            </StyledCheckIcon>
            Complete
          </StyledStatusRow>
        )}

        {status === 'failed' && (
          <StyledStatusRow>
            Upload failed.{' '}
            {onRetry && (
              <StyledRetryLink onClick={onRetry} type="button">
                Try again
              </StyledRetryLink>
            )}
          </StyledStatusRow>
        )}
      </StyledItemContent>
    </StyledItem>
  )
}
