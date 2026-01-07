import { COLORS } from '../../lib'

export const DEFAULT_CONFIG = {
  portalSize: 200,
  outputSize: 400,
  compression: 0.9,
  type: 'jpeg' as const,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  applyLabel: 'Apply',
  cancelLabel: 'Cancel',
}

const STYLE_ID = 'vacano-image-cropper-styles'

const CUSTOM_STYLES = `
  .vacano-cropper-root {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .vacano-cropper-header {
    border-bottom: 1px solid ${COLORS.gray};
    padding: 16px 20px;
  }

  .vacano-cropper-footer {
    border-top: 1px solid ${COLORS.gray};
    padding: 16px 20px;
    gap: 12px;
  }

  .vacano-cropper-cancel-button {
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid ${COLORS.gray};
    background-color: ${COLORS.white};
    color: ${COLORS.black};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .vacano-cropper-cancel-button:hover {
    background-color: ${COLORS.gray};
  }

  .vacano-cropper-apply-button {
    padding: 8px 16px;
    border-radius: 16px;
    border: none;
    background-color: ${COLORS.black};
    color: ${COLORS.white};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .vacano-cropper-apply-button:hover {
    background-color: ${COLORS['iron-grey']};
  }
`

export const injectCropperStyles = (): void => {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = CUSTOM_STYLES
  document.head.appendChild(style)
}

export const CROPPER_CSS = {
  root: ['vacano-cropper-root'],
  container: ['vacano-cropper-container'],
  header: ['vacano-cropper-header'],
  body: ['vacano-cropper-body'],
  footer: ['vacano-cropper-footer'],
  cancelButton: ['vacano-cropper-cancel-button'],
  applyButton: ['vacano-cropper-apply-button'],
  portal: ['vacano-cropper-portal'],
}
