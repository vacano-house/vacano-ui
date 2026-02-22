import { useCallback, useEffect, useRef, useState } from 'react'

import { getPaginationRange } from './helpers'
import { StyledContainer, StyledControl, StyledCursor, StyledEllipsis, StyledItem } from './styled'
import { PaginationProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('pagination')

export const Pagination = ({
  boundaries = 1,
  className,
  classnames,
  disabled = false,
  initialPage = 1,
  loop = false,
  onChange,
  page: controlledPage,
  ref,
  showControls = false,
  siblings = 1,
  total,
  variant = 'flat',
  ...rest
}: PaginationProps) => {
  const isControlled = controlledPage !== undefined
  const [internalPage, setInternalPage] = useState(initialPage)
  const currentPage = isControlled ? controlledPage : internalPage

  const itemsRef = useRef<Map<number, HTMLButtonElement>>(new Map())
  const containerRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  const range = getPaginationRange(total, currentPage, siblings, boundaries)

  const setPage = useCallback(
    (newPage: number) => {
      if (!isControlled) {
        setInternalPage(newPage)
      }

      onChange?.(newPage)
    },
    [isControlled, onChange],
  )

  const handlePageClick = useCallback(
    (page: number) => {
      if (page < 1 || page > total || page === currentPage) return
      setPage(page)
    },
    [currentPage, setPage, total],
  )

  const handlePrev = useCallback(() => {
    if (currentPage <= 1) {
      if (loop) setPage(total)
      return
    }

    setPage(currentPage - 1)
  }, [currentPage, loop, setPage, total])

  const handleNext = useCallback(() => {
    if (currentPage >= total) {
      if (loop) setPage(1)
      return
    }

    setPage(currentPage + 1)
  }, [currentPage, loop, setPage, total])

  useEffect(() => {
    const cursor = cursorRef.current
    const container = containerRef.current
    const itemEl = itemsRef.current.get(currentPage)

    if (!cursor || !container || !itemEl) return

    const containerRect = container.getBoundingClientRect()
    const itemRect = itemEl.getBoundingClientRect()
    const x = itemRect.left - containerRect.left

    cursor.style.transform = `translateX(${x}px)`
  }, [currentPage, range])

  return (
    <StyledContainer {...rest} ref={ref || containerRef} className={css('container', className)}>
      <StyledCursor ref={cursorRef} className={css('cursor', classnames?.cursor)} />
      {showControls && (
        <StyledControl
          className={css('controls', classnames?.controls)}
          $disabled={disabled || (!loop && currentPage <= 1)}
          onClick={handlePrev}
          aria-label="Previous page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </StyledControl>
      )}
      {range.map((item, index) =>
        item === 'dots' ? (
          <StyledEllipsis key={`dots-${index}`} className={css('ellipsis', classnames?.ellipsis)}>
            ...
          </StyledEllipsis>
        ) : (
          <StyledItem
            key={item}
            ref={(el) => {
              if (el) {
                itemsRef.current.set(item, el)
              } else {
                itemsRef.current.delete(item)
              }
            }}
            className={css('item', classnames?.item)}
            $active={item === currentPage}
            $variant={variant}
            $disabled={disabled}
            onClick={() => handlePageClick(item)}
            aria-label={`Page ${item}`}
            aria-current={item === currentPage ? 'page' : undefined}
          >
            {item}
          </StyledItem>
        ),
      )}
      {showControls && (
        <StyledControl
          className={css('controls', classnames?.controls)}
          $disabled={disabled || (!loop && currentPage >= total)}
          onClick={handleNext}
          aria-label="Next page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </StyledControl>
      )}
    </StyledContainer>
  )
}
