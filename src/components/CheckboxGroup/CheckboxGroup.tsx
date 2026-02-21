import { StyledContainer, StyledLabel, StyledOptions } from './styled'
import { CheckboxGroupProps } from './types'
import { Checkbox } from '../Checkbox'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('checkbox-group')

export const CheckboxGroup = ({
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
}: CheckboxGroupProps) => {
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
          <Checkbox
            key={option.value}
            className={classnames?.checkbox}
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
