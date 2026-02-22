import { StyledContainer, StyledDescription, StyledLabel } from './styled'
import { OverlineProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('overline')

export const Overline = ({
  children,
  className,
  classnames,
  description,
  ref,
  ...rest
}: OverlineProps) => (
  <StyledContainer {...rest} ref={ref} className={css('container', className)}>
    <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
    {description && (
      <StyledDescription className={css('description', classnames?.description)}>
        {description}
      </StyledDescription>
    )}
  </StyledContainer>
)
