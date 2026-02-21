import {
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
  StyledLabel,
  StyledMessage,
  StyledPrefix,
} from './styled'
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
  prefix,
  size = 'default',
  variant = 'normal',
  ...rest
}: InputProps) => {
  const hasPrefix = prefix !== undefined && prefix !== null

  const input = (
    <StyledInput
      {...rest}
      ref={ref}
      disabled={disabled}
      $size={size}
      $variant={variant}
      $hasPrefix={hasPrefix}
      className={css('input', classnames?.input)}
    />
  )

  return (
    <StyledInputContainer className={css('container', className)} $fullWidth={Boolean(fullWidth)}>
      <StyledLabel variant={variant} className={css('label', classnames?.label)}>
        {label}
      </StyledLabel>
      {hasPrefix ? (
        <StyledInputWrapper $size={size} $variant={variant} $disabled={Boolean(disabled)}>
          <StyledPrefix
            $size={size}
            $variant={variant}
            $disabled={Boolean(disabled)}
            className={css('prefix')}
          >
            {prefix}
          </StyledPrefix>
          {input}
        </StyledInputWrapper>
      ) : (
        input
      )}
      {message && <StyledMessage variant={variant}>{message}</StyledMessage>}
    </StyledInputContainer>
  )
}
