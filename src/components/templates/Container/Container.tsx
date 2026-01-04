import { PropsWithChildren } from 'react'

import { StyledContainer } from './styled'
import { ContainerProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('container')
export const Container = ({
  children,
  className,
  ref,
  ...rest
}: PropsWithChildren<ContainerProps>) => (
  <StyledContainer {...rest} ref={ref} className={css('container', className)}>
    {children}
  </StyledContainer>
)
