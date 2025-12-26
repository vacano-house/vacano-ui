import { classNameGetter } from '../../../lib/utils'
import {
  StyledRadioCircle,
  StyledRadioContainer,
  StyledRadioDot,
  StyledRadioInput,
  StyledRadioLabel,
} from './styled'
import type { RadioProps } from './types'

const css = classNameGetter('radio')

export const Radio = ({
  checked,
  className,
  classnames,
  disabled,
  label,
  onChange,
  ref,
  state,
  ...rest
}: RadioProps) => {
  return (
    <StyledRadioContainer
      className={css('container', className, classnames?.container)}
      $disabled={disabled}
      $state={state}
    >
      <StyledRadioInput
        {...rest}
        ref={ref}
        type="radio"
        className={css('input', classnames?.input)}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledRadioCircle
        className={css('circle', classnames?.circle)}
        $checked={checked}
        $state={state}
      >
        <StyledRadioDot className={css('dot', classnames?.dot)} $visible={checked} $state={state} />
      </StyledRadioCircle>
      {label && (
        <StyledRadioLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledRadioLabel>
      )}
    </StyledRadioContainer>
  )
}
