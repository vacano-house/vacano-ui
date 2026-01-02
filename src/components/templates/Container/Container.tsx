import { PropsWithChildren, useImperativeHandle, useRef } from 'react'

import { StyledContainer } from './styled'
import { ContainerProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('container')
export const Container = ({
  children,
  className,
  ref = null,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => containerRef.current!, [])

  return (
    <StyledContainer {...rest} ref={containerRef} className={css('container', className)}>
      {children}
    </StyledContainer>
  )
}
