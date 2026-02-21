import { StyledContainer, StyledLabel, StyledOptions } from './styled'
import { ToggleGroupProps } from './types'
import { Toggle } from '../Toggle'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('toggle-group')

export const ToggleGroup = ({
  className,
  classnames,
  disabled,
  label,
  onChange,
  options,
  ref,
  value,
  variant = 'normal',
  ...rest
}: ToggleGroupProps) => {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...value, optionValue])
    } else {
      onChange(value.filter((v) => v !== optionValue))
    }
  }

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <StyledLabel className={css('label', classnames?.label)} $disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledOptions className={css('options', classnames?.options)}>
        {options.map((option) => (
          <Toggle
            key={option.value}
            className={classnames?.toggle}
            checked={value.includes(option.value)}
            label={option.label}
            disabled={disabled}
            variant={variant}
            onChange={(e) => handleChange(option.value, e.target.checked)}
          />
        ))}
      </StyledOptions>
    </StyledContainer>
  )
}
