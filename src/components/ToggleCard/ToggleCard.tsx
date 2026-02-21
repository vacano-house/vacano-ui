import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledInput,
  StyledLabel,
} from './styled'
import { ToggleCardProps } from './types'
import { Toggle } from '../Toggle'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('toggle-card')

export const ToggleCard = ({
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
}: ToggleCardProps) => {
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
      <Toggle
        className={classnames?.toggle}
        checked={checked}
        disabled={disabled}
        variant={variant}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden
      />
    </StyledContainer>
  )
}
