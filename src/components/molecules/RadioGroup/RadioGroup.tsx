import { StyledContainer, StyledLabel, StyledOptions } from './styled'
import { RadioGroupProps } from './types'
import { Radio } from '../../atoms/Radio'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('radio-group')

export const RadioGroup = ({
  className,
  classnames,
  disabled,
  label,
  name,
  onChange,
  options,
  ref,
  value,
  ...rest
}: RadioGroupProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <StyledLabel className={css('label', classnames?.label)} $disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledOptions className={css('options', classnames?.options)}>
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
      </StyledOptions>
    </StyledContainer>
  )
}
