export type PaginationRange = (number | 'dots')[]

export const getPaginationRange = (
  total: number,
  current: number,
  siblings: number,
  boundaries: number,
): PaginationRange => {
  const totalNumbers = siblings * 2 + 3 + boundaries * 2

  if (totalNumbers >= total) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(current - siblings, boundaries + 1)
  const rightSiblingIndex = Math.min(current + siblings, total - boundaries)

  const showLeftDots = leftSiblingIndex > boundaries + 2
  const showRightDots = rightSiblingIndex < total - boundaries - 1

  if (!showLeftDots && showRightDots) {
    const leftCount = siblings * 2 + boundaries + 2
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1)
    const rightRange = Array.from({ length: boundaries }, (_, i) => total - boundaries + i + 1)

    return [...leftRange, 'dots' as const, ...rightRange]
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = siblings * 2 + boundaries + 2
    const leftRange = Array.from({ length: boundaries }, (_, i) => i + 1)
    const rightRange = Array.from({ length: rightCount }, (_, i) => total - rightCount + i + 1)

    return [...leftRange, 'dots' as const, ...rightRange]
  }

  const leftRange = Array.from({ length: boundaries }, (_, i) => i + 1)
  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i,
  )
  const rightRange = Array.from({ length: boundaries }, (_, i) => total - boundaries + i + 1)

  return [...leftRange, 'dots' as const, ...middleRange, 'dots' as const, ...rightRange]
}
