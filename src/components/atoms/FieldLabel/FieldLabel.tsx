import { StyledFieldLabel } from './styled'
import { FieldLabelProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('field-label')
export const FieldLabel = ({
  children,
  className,
  ref,
  required,
  variant = 'normal',
  ...rest
}: FieldLabelProps) => {
  if (!children) {
    return null
  }

  return (
    <StyledFieldLabel
      {...rest}
      ref={ref}
      className={css('container', className)}
      $variant={variant}
    >
      {children} {required && '*'}
    </StyledFieldLabel>
  )
}
