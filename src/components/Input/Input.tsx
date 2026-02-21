import { StyledInput, StyledInputContainer, StyledLabel, StyledMessage } from './styled'
import { InputProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('input')
export const Input = ({
  className,
  classnames,
  disabled,
  fullWidth,
  label,
  ref,
  message,
  size = 'default',
  variant = 'normal',
  ...rest
}: InputProps) => {
  return (
    <StyledInputContainer className={css('container', className)} $fullWidth={Boolean(fullWidth)}>
      <StyledLabel variant={variant} className={css('label', classnames?.label)}>
        {label}
      </StyledLabel>
      <StyledInput
        {...rest}
        ref={ref}
        disabled={disabled}
        $size={size}
        $variant={variant}
        className={css('input', classnames?.input)}
      />
      {message && <StyledMessage variant={variant}>{message}</StyledMessage>}
    </StyledInputContainer>
  )
}
