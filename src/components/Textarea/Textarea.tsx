import {
  StyledContainer,
  StyledCounter,
  StyledFooter,
  StyledLabel,
  StyledMessage,
  StyledTextarea,
} from './styled'
import { TextareaProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('textarea')

export const Textarea = ({
  className,
  classnames,
  count,
  disabled,
  fullWidth,
  label,
  message,
  ref,
  value,
  variant = 'normal',
  rows = 4,
  ...rest
}: TextareaProps) => {
  const length = typeof value === 'string' ? value.length : 0
  const showFooter = message || count !== undefined

  return (
    <StyledContainer className={css('container', className)} $fullWidth={Boolean(fullWidth)}>
      {label && (
        <StyledLabel variant={variant} className={css('label', classnames?.label)}>
          {label}
        </StyledLabel>
      )}
      <StyledTextarea
        {...rest}
        ref={ref}
        rows={rows}
        value={value}
        disabled={disabled}
        $variant={variant}
        className={css('textarea', classnames?.textarea)}
      />
      {showFooter && (
        <StyledFooter>
          {message && (
            <StyledMessage variant={variant} className={css('message')}>
              {message}
            </StyledMessage>
          )}
          {count !== undefined && (
            <StyledCounter $variant={variant} className={css('counter')}>
              {length}/{count}
            </StyledCounter>
          )}
        </StyledFooter>
      )}
    </StyledContainer>
  )
}
