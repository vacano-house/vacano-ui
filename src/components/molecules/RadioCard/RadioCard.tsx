import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledInput,
  StyledLabel,
} from './styled'
import { RadioCardProps } from './types'
import { Radio } from '../../atoms/Radio'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('radio-card')

export const RadioCard = ({
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
}: RadioCardProps) => {
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
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Radio
        className={classnames?.radio}
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
