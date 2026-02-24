import { useCallback, useState } from 'react'

import {
  StyledContainer,
  StyledContent,
  StyledContentInner,
  StyledContentWrapper,
  StyledIcon,
  StyledItem,
  StyledTrigger,
} from './styled'
import { type AccordionProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('accordion')

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const Accordion = ({
  className,
  classnames,
  defaultValue = [],
  items,
  multiple = false,
  onChange,
  ref,
  value: controlledValue,
  variant = 'outlined',
  ...rest
}: AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue)

  const isControlled = controlledValue !== undefined
  const expanded = isControlled ? controlledValue : internalValue

  const toggle = useCallback(
    (itemValue: string) => {
      const isExpanded = expanded.includes(itemValue)

      let next: string[]

      if (multiple) {
        next = isExpanded ? expanded.filter((v) => v !== itemValue) : [...expanded, itemValue]
      } else {
        next = isExpanded ? [] : [itemValue]
      }

      if (!isControlled) {
        setInternalValue(next)
      }

      onChange?.(next)
    },
    [expanded, isControlled, multiple, onChange],
  )

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      $variant={variant}
      className={css('container', className)}
      role="region"
    >
      {items.map((item) => {
        const isExpanded = expanded.includes(item.value)

        return (
          <StyledItem
            key={item.value}
            $variant={variant}
            $disabled={Boolean(item.disabled)}
            className={css('item', classnames?.item)}
          >
            <StyledTrigger
              type="button"
              aria-expanded={isExpanded}
              $disabled={Boolean(item.disabled)}
              $expanded={isExpanded}
              disabled={item.disabled}
              onClick={() => toggle(item.value)}
              className={css('trigger', classnames?.trigger)}
            >
              {item.title}
              <StyledIcon $expanded={isExpanded} className={css('icon', classnames?.icon)}>
                <ChevronIcon />
              </StyledIcon>
            </StyledTrigger>

            <StyledContentWrapper $expanded={isExpanded}>
              <StyledContentInner>
                <StyledContent className={css('content', classnames?.content)}>
                  {item.content}
                </StyledContent>
              </StyledContentInner>
            </StyledContentWrapper>
          </StyledItem>
        )
      })}
    </StyledContainer>
  )
}
