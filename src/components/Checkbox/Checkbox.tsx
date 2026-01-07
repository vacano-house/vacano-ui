import { StyledBox, StyledContainer, StyledIcon, StyledInput, StyledLabel } from './styled'
import { CheckboxProps } from './types'
import { Check, Minus } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('checkbox')

export const Checkbox = ({
  checked,
  className,
  classnames,
  disabled,
  indeterminate = false,
  label,
  onChange,
  ref,
  variant = 'normal',
  ...rest
}: CheckboxProps) => {
  return (
    <StyledContainer
      className={css('container', className)}
      $disabled={Boolean(disabled)}
      $variant={variant}
    >
      <StyledInput
        {...rest}
        ref={ref}
        type="checkbox"
        className={css('input', classnames?.input)}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledBox
        className={css('box', classnames?.box)}
        $checked={checked}
        $indeterminate={indeterminate}
        $variant={variant}
      >
        <StyledIcon
          className={css('icon', classnames?.icon)}
          $visible={indeterminate || checked}
          $variant={variant}
        >
          {indeterminate ? <Minus /> : <Check />}
        </StyledIcon>
      </StyledBox>
      {label && (
        <StyledLabel className={css('label', classnames?.label)} $variant={variant}>
          {label}
        </StyledLabel>
      )}
    </StyledContainer>
  )
}
