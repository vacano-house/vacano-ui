import { StyledFieldMessage } from './styled'
import { FieldMessageProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('field-message')

export const FieldMessage = ({
  children,
  className,
  ref,
  variant = 'normal',
  ...rest
}: FieldMessageProps) => {
  if (!children) {
    return null
  }

  return (
    <StyledFieldMessage
      {...rest}
      ref={ref}
      className={css('container', className)}
      $variant={variant}
    >
      {children}
    </StyledFieldMessage>
  )
}
