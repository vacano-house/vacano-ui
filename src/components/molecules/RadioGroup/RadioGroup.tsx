import { classNameGetter } from '../../../lib/utils'
import { Radio } from '../../atoms'
import { StyledRadioGroupContainer, StyledRadioGroupLabel, StyledRadioGroupOptions } from './styled'
import type { RadioGroupProps } from './types'

const css = classNameGetter('radioGroup')

export const RadioGroup = ({
  className,
  classnames,
  disabled,
  label,
  name,
  onChange,
  options,
  value,
  ...rest
}: RadioGroupProps) => {
  return (
    <StyledRadioGroupContainer
      {...rest}
      className={css('container', className, classnames?.container)}
    >
      {label && (
        <StyledRadioGroupLabel className={css('label', classnames?.label)}>
          {label}
        </StyledRadioGroupLabel>
      )}
      <StyledRadioGroupOptions className={css('options', classnames?.options)}>
        {options.map((option) => (
          <Radio
            key={option.value}
            className={classnames?.radio}
            name={name}
            checked={value === option.value}
            label={option.label}
            disabled={disabled}
            onChange={() => onChange(option.value)}
          />
        ))}
      </StyledRadioGroupOptions>
    </StyledRadioGroupContainer>
  )
}
