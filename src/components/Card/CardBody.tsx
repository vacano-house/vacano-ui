import { StyledCardBody } from './styled'
import { CardBodyProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('card')

export const CardBody = ({ children, className, ref, ...rest }: CardBodyProps) => (
  <StyledCardBody {...rest} ref={ref} className={css('body', className)}>
    {children}
  </StyledCardBody>
)
