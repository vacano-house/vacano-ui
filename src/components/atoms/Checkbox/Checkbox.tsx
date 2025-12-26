import { IconLucideCheck, IconLucideMinus } from '../../../icons/Lucide'
import { classNameGetter } from '../../../lib/utils'
import { CHECKBOX_ICON_SIZE } from './constants'
import {
  StyledCheckboxBox,
  StyledCheckboxContainer,
  StyledCheckboxIcon,
  StyledCheckboxInput,
  StyledCheckboxLabel,
} from './styled'
import type { CheckboxProps } from './types'

const css = classNameGetter('checkbox')

export const Checkbox = ({
  checked,
  className,
  classnames,
  disabled,
  indeterminate,
  label,
  onChange,
  ref,
  state,
  ...rest
}: CheckboxProps) => {
  return (
    <StyledCheckboxContainer
      className={css('container', className, classnames?.container)}
      $disabled={disabled}
      $state={state}
    >
      <StyledCheckboxInput
        {...rest}
        ref={ref}
        type="checkbox"
        className={css('input', classnames?.input)}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckboxBox
        className={css('box', classnames?.box)}
        $checked={checked}
        $indeterminate={indeterminate}
        $state={state}
      >
        <StyledCheckboxIcon
          className={css('icon', classnames?.icon)}
          $visible={indeterminate || checked}
        >
          {indeterminate ? (
            <IconLucideMinus size={CHECKBOX_ICON_SIZE} />
          ) : (
            <IconLucideCheck size={CHECKBOX_ICON_SIZE} />
          )}
        </StyledCheckboxIcon>
      </StyledCheckboxBox>
      {label && (
        <StyledCheckboxLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledCheckboxLabel>
      )}
    </StyledCheckboxContainer>
  )
}
