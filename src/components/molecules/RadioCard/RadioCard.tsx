import { classNameGetter } from '../../../lib/utils'
import { Radio } from '../../atoms/Radio'
import {
  StyledRadioCardContainer,
  StyledRadioCardContent,
  StyledRadioCardDescription,
  StyledRadioCardInput,
  StyledRadioCardLabel,
} from './styled'
import type { RadioCardProps } from './types'

const css = classNameGetter('radioCard')

export const RadioCard = ({
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
}: RadioCardProps) => {
  return (
    <StyledRadioCardContainer
      className={css('container', className, classnames?.container)}
      $checked={checked}
      $disabled={disabled}
      $fullWidth={fullWidth}
      $state={state}
      data-disabled={disabled}
    >
      <StyledRadioCardInput
        {...rest}
        ref={ref}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Radio
        className={classnames?.radio}
        checked={checked}
        disabled={disabled}
        state={state}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden
      />
      <StyledRadioCardContent className={css('content', classnames?.content)}>
        <StyledRadioCardLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledRadioCardLabel>
        {description && (
          <StyledRadioCardDescription
            className={css('description', classnames?.description)}
            $state={state}
          >
            {description}
          </StyledRadioCardDescription>
        )}
      </StyledRadioCardContent>
    </StyledRadioCardContainer>
  )
}
