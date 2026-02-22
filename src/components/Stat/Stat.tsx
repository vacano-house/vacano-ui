import { StyledContainer, StyledLabel, StyledValue } from './styled'
import { StatProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('stat')

export const Stat = ({ className, classnames, label, ref, value, ...rest }: StatProps) => (
  <StyledContainer {...rest} ref={ref} className={css('container', className)}>
    <StyledValue className={css('value', classnames?.value)}>{value}</StyledValue>
    <StyledLabel className={css('label', classnames?.label)}>{label}</StyledLabel>
  </StyledContainer>
)
