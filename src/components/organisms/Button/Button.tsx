import { useImperativeHandle, useMemo, useRef } from 'react'

import { useKeyBinding } from '../../../hooks'
import { Tooling } from '../../../lib/utils'
import { KeysBindings } from '../../molecules'
import { StyledButton, StyledIcon, StyledLabel, StyledLoading } from './styled'
import { ButtonProps } from './types'

const css = Tooling.newClassNameGetter('button')
export const Button = ({
  children,
  className,
  classnames,
  disabled,
  fullWidth,
  icon,
  loading,
  onClick,
  ref = null,
  keyBindings = [],
  size = 'default',
  type = 'button',
  variant = 'normal',
  ...rest
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => buttonRef.current!, [])
  useKeyBinding(keyBindings, () => {
    buttonRef.current?.click()
  })

  const computedType = useMemo(() => {
    switch (type) {
      case 'link':
        return 'button'

      default:
        return type
    }
  }, [type])

  return (
    <StyledButton
      {...rest}
      onClick={onClick}
      ref={buttonRef}
      type={computedType}
      disabled={disabled}
      className={css('container', className)}
      $variant={variant}
      $size={size}
      $fullWidth={Boolean(fullWidth)}
      $iconOnly={Boolean(icon) && !(children || keyBindings?.length > 0)}
    >
      {loading && <StyledLoading $size={size} />}
      {icon && !loading && <StyledIcon $size={size}>{icon}</StyledIcon>}
      {children && (
        <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
      )}
      <KeysBindings keys={keyBindings} variant={variant === 'system' ? 'light' : 'dark'} />
    </StyledButton>
  )
}
