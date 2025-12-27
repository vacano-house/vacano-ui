import { createPortal } from 'react-dom'

import { classNameGetter } from '../../../lib/utils'
import {
  DEFAULT_DROPDOWN_PROP_ALIGN,
  DEFAULT_DROPDOWN_PROP_OFFSET,
  DEFAULT_DROPDOWN_PROP_PLACEMENT,
} from './constants'
import { StyledDropdownContainer, StyledDropdownContent, StyledDropdownTrigger } from './styled'
import type { DropdownProps } from './types'
import { useDropdown } from './useDropdown'

const css = classNameGetter('dropdown')

export const Dropdown = ({
  trigger,
  children,
  placement = DEFAULT_DROPDOWN_PROP_PLACEMENT,
  align = DEFAULT_DROPDOWN_PROP_ALIGN,
  offset = DEFAULT_DROPDOWN_PROP_OFFSET,
  open,
  onOpenChange,
  portalRenderNode,
  classnames,
  className,
  fullWidth,
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
      <StyledDropdownContent
        ref={refs.setFloating}
        className={css('content', classnames?.content)}
        style={floatingStyles}
        $isOpen={isOpen}
        {...getFloatingProps()}
      >
        {children}
      </StyledDropdownContent>
    )

    if (portalRenderNode) {
      return createPortal(content, portalRenderNode)
    }

    return content
  }

  return (
    <StyledDropdownContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
    >
      <StyledDropdownTrigger
        ref={refs.setReference}
        className={css('trigger', classnames?.trigger)}
        $fullWidth={fullWidth}
        {...getReferenceProps()}
      >
        {trigger}
      </StyledDropdownTrigger>
      {renderContent()}
    </StyledDropdownContainer>
  )
}
