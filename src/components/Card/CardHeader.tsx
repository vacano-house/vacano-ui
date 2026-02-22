import { StyledCardHeader } from './styled'
import { CardHeaderProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('card')

export const CardHeader = ({ children, className, ref, ...rest }: CardHeaderProps) => (
  <StyledCardHeader {...rest} ref={ref} className={css('header', className)}>
    {children}
  </StyledCardHeader>
)
