import { useImperativeHandle, useMemo, useRef } from 'react'

import { useKeyBind } from '../../hooks'
import { classNameGetter } from '../../lib/utils'
import { getKeySymbols } from '../../utils/keyboard'
import {
  StyledBindings,
  StyledBindKey,
  StyledButton,
  StyledIcon,
  StyledLabel,
  StyledLoading,
} from './styled'
import { ButtonProps } from './types'

const css = classNameGetter('button')

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
  binding = [],
  size = 'default',
  type = 'button',
  variant = 'normal',
  ...rest
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const bindingSymbols = getKeySymbols(binding)

  useImperativeHandle(ref, () => buttonRef.current!, [])
  useKeyBind(binding, () => {
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
      $iconOnly={Boolean(icon) && !(children || binding?.length > 0)}
    >
      {loading && <StyledLoading $size={size} />}
      {icon && !loading && <StyledIcon $size={size}>{icon}</StyledIcon>}
      {children && (
        <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
      )}
      {bindingSymbols.length > 0 && (
        <StyledBindings>
          {bindingSymbols.map((symbol) => (
            <StyledBindKey key={symbol} $variant={variant}>
              {symbol}
            </StyledBindKey>
          ))}
        </StyledBindings>
      )}
    </StyledButton>
  )
}
