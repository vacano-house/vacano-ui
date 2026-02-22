import styled from '@emotion/styled'

import { FileUploadItemStatus } from './types'
import { COLORS } from '../../lib'

export const StyledDropzone = styled.div<{ $disabled: boolean; $dragOver: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  border: 1.5px dashed ${({ $dragOver }) => ($dragOver ? COLORS.black : COLORS.gray)};
  border-radius: 12px;
  background-color: ${({ $dragOver }) => ($dragOver ? '#f9fafb' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  ${({ $disabled, $dragOver }) =>
    !$disabled &&
    !$dragOver &&
    `
    &:hover {
      border-color: ${COLORS['iron-grey']};
      background-color: #f9fafb;
    }
  `}
`

export const StyledDropzoneIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray};
  color: ${COLORS['iron-grey']};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  & svg {
    width: 20px;
    height: 20px;
  }
`

export const StyledDropzoneText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  text-align: center;
`

export const StyledDropzoneAction = styled.span`
  color: ${COLORS.black};
  font-weight: 600;
  cursor: pointer;
`

export const StyledDropzoneHint = styled.div`
  font-size: 12px;
  color: ${COLORS['iron-grey']};
  text-align: center;
`

export const StyledInput = styled.input`
  display: none;
`

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`

// File item styles

const STATUS_BORDER: Record<FileUploadItemStatus, string> = {
  uploading: COLORS.gray,
  complete: COLORS.gray,
  failed: COLORS.red,
}

export const StyledItem = styled.div<{ $status: FileUploadItemStatus }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border: 1px solid ${({ $status }) => STATUS_BORDER[$status]};
  border-radius: 12px;
  transition: border-color 0.15s ease;
`

export const StyledItemIcon = styled.div<{ $status: FileUploadItemStatus }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ $status }) => ($status === 'failed' ? '#fef2f2' : '#f9fafb')};
  color: ${({ $status }) => ($status === 'failed' ? COLORS.red : COLORS['iron-grey'])};

  & svg {
    width: 20px;
    height: 20px;
  }
`

export const StyledItemContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`

export const StyledItemInfo = styled.div`
  min-width: 0;
`

export const StyledItemName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledItemSize = styled.div`
  font-size: 14px;
  color: ${COLORS['iron-grey']};
`

export const StyledItemProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
`

export const StyledProgressTrack = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
  overflow: hidden;
`

export const StyledProgressBar = styled.div<{ $value: number; $status: FileUploadItemStatus }>`
  height: 100%;
  width: ${({ $value }) => Math.min(100, Math.max(0, $value))}%;
  border-radius: 4px;
  background-color: ${({ $status }) => ($status === 'failed' ? COLORS.red : COLORS.black)};
  transition: width 0.2s ease;
`

export const StyledProgressText = styled.span`
  flex-shrink: 0;
  font-size: 14px;
  color: ${COLORS.black};
  font-weight: 500;
  min-width: 36px;
  text-align: right;
`

export const StyledItemAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${COLORS['iron-grey']};
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.15s ease;

  & svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export const StyledRetryLink = styled.button`
  display: inline;
  padding: 0;
  border: none;
  background: transparent;
  color: ${COLORS.red};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const StyledStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
`

export const StyledCheckIcon = styled.span`
  display: inline-flex;
  color: ${COLORS.green};

  & svg {
    width: 16px;
    height: 16px;
  }
`
