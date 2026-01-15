import { StyledContainer, StyledLabel, StyledTextarea } from './styled'
import { TextareaProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('textarea')

export const Textarea = ({
  className,
  classnames,
  disabled,
  fullWidth,
  label,
  ref,
  variant = 'normal',
  rows = 4,
  ...rest
}: TextareaProps) => {
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
        disabled={disabled}
        $variant={variant}
        className={css('textarea', classnames?.textarea)}
      />
    </StyledContainer>
  )
}
