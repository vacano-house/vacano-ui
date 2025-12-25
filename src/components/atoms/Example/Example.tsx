import { PropsWithChildren } from 'react'

import { classNameGetter } from '../../../utils'
import { DEFAULT_EXAMPLE_PROP_VARIANT } from './constants'
import { StyledExampleContainer, StyledExampleTItle } from './styled'
import { ExampleProps } from './types'
import { useExample } from './useExample'

const css = classNameGetter('example')

export const Example = ({
  classnames,
  className,
  children,
  size,
  variant = DEFAULT_EXAMPLE_PROP_VARIANT,
  ...rest
}: PropsWithChildren<ExampleProps>) => {
  const { fontSize, handleClick } = useExample(size, variant)

  return (
    <StyledExampleContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      role="alert"
      $fontSize={fontSize}
      $variant={variant}
      onClick={handleClick}
    >
      <StyledExampleTItle className={css('title', classnames?.title)}>
        {children}
      </StyledExampleTItle>
    </StyledExampleContainer>
  )
}
