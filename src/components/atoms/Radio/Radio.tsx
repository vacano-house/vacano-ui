import { StyledBox, StyledContainer, StyledDot, StyledInput, StyledLabel } from './styled'
import { RadioProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('radio')

export const Radio = ({
  checked,
  className,
  classnames,
  disabled,
  label,
  onChange,
  ref,
  variant = 'normal',
  ...rest
}: RadioProps) => {
  return (
    <StyledContainer
      className={css('container', className)}
      $disabled={Boolean(disabled)}
      $variant={variant}
    >
      <StyledInput
        {...rest}
        ref={ref}
        type="radio"
        className={css('input', classnames?.input)}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledBox className={css('box', classnames?.box)} $checked={checked} $variant={variant}>
        <StyledDot className={css('dot', classnames?.dot)} $visible={checked} $variant={variant} />
      </StyledBox>
      {label && (
        <StyledLabel className={css('label', classnames?.label)} $variant={variant}>
          {label}
        </StyledLabel>
      )}
    </StyledContainer>
  )
}
