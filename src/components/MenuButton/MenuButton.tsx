import { useCallback, useState } from 'react'

import { StyledButton, StyledLine, StyledLines } from './styled'
import { type MenuButtonProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('menu-button')

export const MenuButton = ({
  className,
  classnames,
  defaultOpen = false,
  disabled = false,
  onOpenChange,
  open: controlledOpen,
  ref,
  size = 'default',
  ...rest
}: MenuButtonProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const handleClick = useCallback(() => {
    if (disabled) return

    const next = !isOpen

    if (!isControlled) {
      setInternalOpen(next)
    }

    onOpenChange?.(next)
  }, [disabled, isOpen, isControlled, onOpenChange])

  return (
    <StyledButton
      {...rest}
      ref={ref}
      type="button"
      disabled={disabled}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={css('container', className)}
      $size={size}
      $disabled={disabled}
      onClick={handleClick}
    >
      <StyledLines $size={size} $open={isOpen}>
        <StyledLine
          $size={size}
          $position="top"
          $open={isOpen}
          className={css('line', classnames?.line)}
        />
        <StyledLine
          $size={size}
          $position="middle"
          $open={isOpen}
          className={css('line', classnames?.line)}
        />
        <StyledLine
          $size={size}
          $position="bottom"
          $open={isOpen}
          className={css('line', classnames?.line)}
        />
      </StyledLines>
    </StyledButton>
  )
}
