import { FloatingPortal } from '@floating-ui/react'

import { TOOLTIP_DEFAULT_DELAY, TOOLTIP_DEFAULT_PLACEMENT } from './constants'
import { StyledContainer, StyledContent, StyledTrigger } from './styled'
import { TooltipProps } from './types'
import { useTooltip } from './useTooltip'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('tooltip')

export const Tooltip = ({
  children,
  className,
  classnames,
  content,
  delay = TOOLTIP_DEFAULT_DELAY,
  disabled = false,
  placement = TOOLTIP_DEFAULT_PLACEMENT,
  ...rest
}: TooltipProps) => {
  const { isOpen, refs, floatingStyles, getReferenceProps, getFloatingProps } = useTooltip(
    placement,
    delay,
    disabled,
  )

  return (
    <StyledContainer {...rest} className={css('container', className, classnames?.container)}>
      <StyledTrigger
        ref={refs.setReference}
        className={css('trigger', classnames?.trigger)}
        {...getReferenceProps()}
      >
        {children}
      </StyledTrigger>
      <FloatingPortal>
        <StyledContent
          ref={refs.setFloating}
          className={css('content', classnames?.content)}
          style={floatingStyles}
          $isOpen={isOpen}
          {...getFloatingProps()}
        >
          {content}
        </StyledContent>
      </FloatingPortal>
    </StyledContainer>
  )
}
