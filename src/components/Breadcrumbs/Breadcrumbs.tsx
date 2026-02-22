import { Children, isValidElement, ReactElement } from 'react'

import {
  StyledContainer,
  StyledEllipsis,
  StyledItem,
  StyledLink,
  StyledList,
  StyledSeparator,
} from './styled'
import { BreadcrumbItemProps, BreadcrumbsProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('breadcrumbs')

const DefaultSeparator = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export const Breadcrumbs = ({
  children,
  className,
  classnames,
  disabled = false,
  itemsAfterCollapse = 1,
  itemsBeforeCollapse = 1,
  maxItems,
  ref,
  separator,
  size = 'md',
  variant = 'light',
  ...rest
}: BreadcrumbsProps) => {
  const items = Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as ReactElement<BreadcrumbItemProps>[]

  const totalItems = items.length
  const shouldCollapse = maxItems !== undefined && totalItems > maxItems

  const renderSeparator = (key: string) => (
    <StyledSeparator className={css('separator', classnames?.separator)} $size={size} key={key}>
      {separator || <DefaultSeparator />}
    </StyledSeparator>
  )

  const renderItem = (child: ReactElement<BreadcrumbItemProps>, index: number, isLast: boolean) => {
    const { current, disabled: itemDisabled, href, startContent, endContent } = child.props
    const isCurrent = current || isLast
    const isDisabled = disabled || (itemDisabled && !isCurrent)

    return (
      <StyledItem key={index} $size={size} $current={isCurrent} $disabled={!!isDisabled}>
        <StyledLink
          as={href && !isCurrent ? 'a' : 'span'}
          href={href && !isCurrent ? href : undefined}
          $current={isCurrent}
          $disabled={!!isDisabled}
        >
          {startContent}
          {child.props.children}
          {endContent}
        </StyledLink>
        {!isLast && renderSeparator(`sep-${index}`)}
      </StyledItem>
    )
  }

  const renderItems = () => {
    if (shouldCollapse) {
      const before = items.slice(0, itemsBeforeCollapse)
      const after = items.slice(totalItems - itemsAfterCollapse)

      return (
        <>
          {before.map((child, i) => renderItem(child, i, false))}
          <StyledItem $size={size} $current={false} $disabled={false}>
            <StyledEllipsis
              className={css('ellipsis', classnames?.ellipsis)}
              aria-label="Show more"
            >
              ...
            </StyledEllipsis>
            {renderSeparator('sep-ellipsis')}
          </StyledItem>
          {after.map((child, i) => {
            const originalIndex = totalItems - itemsAfterCollapse + i

            return renderItem(child, originalIndex, originalIndex === totalItems - 1)
          })}
        </>
      )
    }

    return items.map((child, i) => renderItem(child, i, i === totalItems - 1))
  }

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $variant={variant}
      $size={size}
      aria-label="Breadcrumbs"
    >
      <StyledList className={css('list', classnames?.list)} $size={size}>
        {renderItems()}
      </StyledList>
    </StyledContainer>
  )
}
