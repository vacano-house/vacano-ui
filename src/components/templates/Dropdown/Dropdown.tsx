import { createPortal } from 'react-dom'

import {
  DROPDOWN_DEFAULT_ALIGN,
  DROPDOWN_DEFAULT_OFFSET,
  DROPDOWN_DEFAULT_PLACEMENT,
} from './constants'
import { StyledContainer, StyledContent, StyledTrigger } from './styled'
import { DropdownProps } from './types'
import { useDropdown } from './useDropdown'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('dropdown')

export const Dropdown = ({
  align = DROPDOWN_DEFAULT_ALIGN,
  children,
  className,
  classnames,
  fullWidth,
  offset = DROPDOWN_DEFAULT_OFFSET,
  onOpenChange,
  open,
  placement = DROPDOWN_DEFAULT_PLACEMENT,
  portalRenderNode,
  trigger,
  ...rest
}: DropdownProps) => {
  const { isOpen, refs, floatingStyles, getReferenceProps, getFloatingProps } = useDropdown(
    placement,
    align,
    offset,
    open,
    onOpenChange,
  )

  const renderContent = () => {
    const content = (
      <StyledContent
        ref={refs.setFloating}
        className={css('content', classnames?.content)}
        style={floatingStyles}
        $isOpen={isOpen}
        {...getFloatingProps()}
      >
        {children}
      </StyledContent>
    )

    if (portalRenderNode) {
      return createPortal(content, portalRenderNode)
    }

    return content
  }

  return (
    <StyledContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
    >
      <StyledTrigger
        ref={refs.setReference}
        className={css('trigger', classnames?.trigger)}
        $fullWidth={fullWidth}
        {...getReferenceProps()}
      >
        {trigger}
      </StyledTrigger>
      {renderContent()}
    </StyledContainer>
  )
}
