import { StyledCardFooter } from './styled'
import { CardFooterProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('card')

export const CardFooter = ({
  blurred = false,
  children,
  className,
  ref,
  ...rest
}: CardFooterProps) => (
  <StyledCardFooter {...rest} ref={ref} className={css('footer', className)} $blurred={blurred}>
    {children}
  </StyledCardFooter>
)
