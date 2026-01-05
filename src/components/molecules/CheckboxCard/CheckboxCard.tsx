import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledInput,
  StyledLabel,
} from './styled'
import { CheckboxCardProps } from './types'
import { Checkbox } from '../../atoms/Checkbox'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('checkbox-card')

export const CheckboxCard = ({
  checked,
  className,
  classnames,
  description,
  disabled,
  fullWidth = false,
  label,
  onChange,
  ref,
  variant = 'normal',
  ...rest
}: CheckboxCardProps) => {
  return (
    <StyledContainer
      className={css('container', className)}
      $checked={checked}
      $disabled={Boolean(disabled)}
      $fullWidth={fullWidth}
      $variant={variant}
      data-disabled={disabled}
    >
      <StyledInput
        {...rest}
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Checkbox
        className={classnames?.checkbox}
        checked={checked}
        disabled={disabled}
        variant={variant}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden
      />
      <StyledContent className={css('content', classnames?.content)}>
        <StyledLabel className={css('label', classnames?.label)} $variant={variant}>
          {label}
        </StyledLabel>
        {description && (
          <StyledDescription
            className={css('description', classnames?.description)}
            $variant={variant}
          >
            {description}
          </StyledDescription>
        )}
      </StyledContent>
    </StyledContainer>
  )
}
