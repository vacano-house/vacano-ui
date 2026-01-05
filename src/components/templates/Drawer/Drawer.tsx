import { createPortal } from 'react-dom'

import { StyledContainer } from './styled'
import { DrawerProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('drawer')
export const Drawer = ({
  animated,
  children,
  className,
  open,
  position = 'right',
  ref,
  size = '400px',
  ...rest
}: DrawerProps) => {
  if (!open) {
    return null
  }

  return createPortal(
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $animated={Boolean(animated)}
      $position={position}
      $size={size}
    >
      {children}
    </StyledContainer>,
    document.body,
  )
}
