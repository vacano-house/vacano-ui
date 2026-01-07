import { DEFAULT_CANCEL_LABEL, DEFAULT_CONFIRM_LABEL } from './constants'
import { StyledActions, StyledContainer, StyledMessage } from './styled'
import { ConfirmationProps } from './types'
import { Button } from '../Button'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('confirmation')

export const Confirmation = ({
  cancelBindings,
  cancelLabel = DEFAULT_CANCEL_LABEL,
  className,
  classnames,
  confirmLabel = DEFAULT_CONFIRM_LABEL,
  loading = false,
  message,
  onCancel,
  onConfirm,
  open = true,
  ref,
  submitBindings,
  ...rest
}: ConfirmationProps) => {
  if (!open) return null

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} $open={open}>
      <StyledMessage className={css('message', classnames?.message)}>{message}</StyledMessage>
      <StyledActions className={css('actions', classnames?.actions)}>
        <Button
          variant="system"
          size="compact"
          onClick={onCancel}
          keyBindings={cancelBindings}
          className={css('cancel-button', classnames?.cancelButton)}
        >
          {cancelLabel}
        </Button>
        <Button
          variant="danger"
          size="compact"
          onClick={onConfirm}
          loading={loading}
          keyBindings={submitBindings}
          className={css('confirm-button', classnames?.confirmButton)}
        >
          {confirmLabel}
        </Button>
      </StyledActions>
    </StyledContainer>
  )
}
