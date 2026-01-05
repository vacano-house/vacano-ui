import { createPortal } from 'react-dom'

import { StyledContent, StyledOverlay } from './styled'
import { ModalProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('modal')

export const Modal = ({
  animated,
  children,
  className,
  classnames,
  open,
  ref,
  width = '500px',
  ...rest
}: ModalProps) => {
  if (!open) {
    return null
  }

  return createPortal(
    <StyledOverlay className={css('overlay', classnames?.overlay)} $animated={Boolean(animated)}>
      <StyledContent
        {...rest}
        ref={ref}
        className={css('content', className, classnames?.content)}
        $animated={Boolean(animated)}
        $width={width}
      >
        {children}
      </StyledContent>
    </StyledOverlay>,
    document.body,
  )
}
