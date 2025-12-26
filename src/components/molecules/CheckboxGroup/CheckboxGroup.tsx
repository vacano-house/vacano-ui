import { classNameGetter } from '../../../lib/utils'
import { Checkbox } from '../../atoms'
import {
  StyledCheckboxGroupContainer,
  StyledCheckboxGroupLabel,
  StyledCheckboxGroupOptions,
} from './styled'
import type { CheckboxGroupProps } from './types'

const css = classNameGetter('checkboxGroup')

export const CheckboxGroup = ({
  className,
  classnames,
  disabled,
  label,
  onChange,
  options,
  value,
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
    <StyledCheckboxGroupContainer
      {...rest}
      className={css('container', className, classnames?.container)}
    >
      {label && (
        <StyledCheckboxGroupLabel className={css('label', classnames?.label)}>
          {label}
        </StyledCheckboxGroupLabel>
      )}
      <StyledCheckboxGroupOptions className={css('options', classnames?.options)}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            className={classnames?.checkbox}
            checked={value.includes(option.value)}
            label={option.label}
            disabled={disabled}
            onChange={(e) => handleChange(option.value, e.target.checked)}
          />
        ))}
      </StyledCheckboxGroupOptions>
    </StyledCheckboxGroupContainer>
  )
}
