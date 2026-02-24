import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { createShuffledQueue, getBoardWidth, getInterval, getPhrases, padPhrase } from './helpers'
import {
  StyledContainer,
  StyledDescription,
  StyledIndicator,
  StyledOrbitDot,
  StyledScreenReaderOnly,
} from './styled'
import type { PendingScreenProps } from './types'
import { SplitFlapText } from '../SplitFlapText'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('pending-screen')

export const PendingScreen = ({
  className,
  classnames,
  description,
  interval,
  phrases: phrasesProp,
  ref,
  ...rest
}: PendingScreenProps) => {
  const resolvedPhrases = useMemo(() => getPhrases(phrasesProp), [phrasesProp])
  const resolvedInterval = useMemo(() => getInterval(interval), [interval])
  const boardWidth = useMemo(() => getBoardWidth(resolvedPhrases), [resolvedPhrases])

  const queueRef = useRef<number[]>([])
  const queuePosRef = useRef(0)

  const getNextIndex = useCallback(
    (currentIndex: number) => {
      if (queuePosRef.current >= queueRef.current.length) {
        queueRef.current = createShuffledQueue(resolvedPhrases.length, currentIndex)
        queuePosRef.current = 0
      }
      return queueRef.current[queuePosRef.current++]!
    },
    [resolvedPhrases.length],
  )

  const [currentIndex, setCurrentIndex] = useState(() => {
    queueRef.current = createShuffledQueue(resolvedPhrases.length)
    const first = queueRef.current[0]!
    queuePosRef.current = 1
    return first
  })

  const phraseTimerRef = useRef<ReturnType<typeof setInterval>>(null)

  const advance = useCallback(() => {
    setCurrentIndex((prev) => getNextIndex(prev))
  }, [getNextIndex])

  useEffect(() => {
    phraseTimerRef.current = setInterval(advance, resolvedInterval)
    return () => {
      if (phraseTimerRef.current) clearInterval(phraseTimerRef.current)
    }
  }, [advance, resolvedInterval])

  const currentPhrase = resolvedPhrases[currentIndex]!
  const paddedText = padPhrase(currentPhrase, boardWidth)

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} role="status">
      <StyledIndicator className={css('indicator', classnames?.indicator)}>
        <StyledOrbitDot $index={0} />
        <StyledOrbitDot $index={1} />
        <StyledOrbitDot $index={2} />
      </StyledIndicator>

      <SplitFlapText text={paddedText} className={css('board', classnames?.board)} />

      <StyledScreenReaderOnly>{currentPhrase}</StyledScreenReaderOnly>

      {description && (
        <StyledDescription className={css('description', classnames?.description)}>
          {description}
        </StyledDescription>
      )}
    </StyledContainer>
  )
}
