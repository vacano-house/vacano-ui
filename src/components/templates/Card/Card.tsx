import { PropsWithChildren } from 'react'

import { StyledCard } from './styled'
import { CardProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('card')
export const Card = ({
  children,
  className,
  ref,
  border = false,
  shadow = false,
  ...rest
}: PropsWithChildren<CardProps>) => (
  <StyledCard
    {...rest}
    ref={ref}
    className={css('container', className)}
    $border={border}
    $shadow={shadow}
  >
    {children}
  </StyledCard>
)
