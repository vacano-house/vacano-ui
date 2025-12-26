import type { PropsWithChildren } from 'react'

import { classNameGetter } from '../../../lib/utils'
import { StyledChipContainer, StyledChipText } from './styled'
import type { ChipProps } from './types'

const css = classNameGetter('chip')

export const Chip = ({
  children,
  className,
  classnames,
  fullWidth,
  status,
  ...rest
}: PropsWithChildren<ChipProps>) => {
  return (
    <StyledChipContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
      $status={status}
    >
      <StyledChipText className={css('text', classnames?.text)}>{children}</StyledChipText>
    </StyledChipContainer>
  )
}
