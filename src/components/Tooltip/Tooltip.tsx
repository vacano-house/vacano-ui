import { useState } from 'react'

import { StyledContent, StyledWrapper } from './styled'
import { TooltipProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('tooltip')

export const Tooltip = ({
  children,
  className,
  classnames,
  content,
  delay = 200,
  placement = 'top',
  ref,
  variant = 'dark',
  ...rest
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setVisible(true)
    }, delay)
    setTimeoutId(id)
  }

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setVisible(false)
  }

  return (
    <StyledWrapper
      {...rest}
      ref={ref}
      className={css('wrapper', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <StyledContent
        className={css('content', classnames?.content)}
        $placement={placement}
        $variant={variant}
        $visible={visible}
      >
        {content}
      </StyledContent>
    </StyledWrapper>
  )
}
