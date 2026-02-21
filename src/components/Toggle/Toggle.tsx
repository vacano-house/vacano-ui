import { StyledContainer, StyledInput, StyledLabel, StyledThumb, StyledTrack } from './styled'
import { ToggleProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('toggle')

export const Toggle = ({
  checked,
  className,
  classnames,
  disabled,
  label,
  onChange,
  ref,
  variant = 'normal',
  ...rest
}: ToggleProps) => {
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
      <StyledTrack
        className={css('track', classnames?.track)}
        $checked={checked}
        $variant={variant}
      >
        <StyledThumb
          className={css('thumb', classnames?.thumb)}
          $checked={checked}
          $variant={variant}
        />
      </StyledTrack>
      {label && (
        <StyledLabel className={css('label', classnames?.label)} $variant={variant}>
          {label}
        </StyledLabel>
      )}
    </StyledContainer>
  )
}
