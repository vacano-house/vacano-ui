import { classNameGetter } from '../../../lib/utils'
import { Checkbox } from '../../atoms/Checkbox'
import {
  StyledCheckboxCardContainer,
  StyledCheckboxCardContent,
  StyledCheckboxCardDescription,
  StyledCheckboxCardInput,
  StyledCheckboxCardLabel,
} from './styled'
import type { CheckboxCardProps } from './types'

const css = classNameGetter('checkboxCard')

export const CheckboxCard = ({
  checked,
  className,
  classnames,
  description,
  disabled,
  fullWidth,
  label,
  onChange,
  ref,
  state,
  ...rest
}: CheckboxCardProps) => {
  return (
    <StyledCheckboxCardContainer
      className={css('container', className, classnames?.container)}
      $checked={checked}
      $disabled={disabled}
      $fullWidth={fullWidth}
      $state={state}
      data-disabled={disabled}
    >
      <StyledCheckboxCardInput
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
        state={state}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden
      />
      <StyledCheckboxCardContent className={css('content', classnames?.content)}>
        <StyledCheckboxCardLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledCheckboxCardLabel>
        {description && (
          <StyledCheckboxCardDescription
            className={css('description', classnames?.description)}
            $state={state}
          >
            {description}
          </StyledCheckboxCardDescription>
        )}
      </StyledCheckboxCardContent>
    </StyledCheckboxCardContainer>
  )
}
