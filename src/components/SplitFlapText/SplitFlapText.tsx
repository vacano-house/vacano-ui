import { useCallback, useEffect, useRef, useState } from 'react'

import { getCycleTick, getSettleTime, randomChar } from './helpers'
import { StyledChar, StyledContainer } from './styled'
import type { SplitFlapTextProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('split-flap-text')

export const SplitFlapText = ({ className, ref, text, ...rest }: SplitFlapTextProps) => {
  const [displayChars, setDisplayChars] = useState<string[]>(() => text.split(''))
  const prevTextRef = useRef(text)

  const settledRef = useRef<boolean[]>([])
  const cycleTimerRef = useRef<ReturnType<typeof setInterval>>(null)
  const settleTimersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const targetCharsRef = useRef<string[]>(text.split(''))

  const clearTimers = useCallback(() => {
    if (cycleTimerRef.current) {
      clearInterval(cycleTimerRef.current)
      cycleTimerRef.current = null
    }
    for (const t of settleTimersRef.current) {
      clearTimeout(t)
    }
    settleTimersRef.current = []
  }, [])

  const startFlip = useCallback(
    (targetText: string[]) => {
      clearTimers()

      targetCharsRef.current = targetText
      settledRef.current = targetText.map((ch) => ch === ' ')

      cycleTimerRef.current = setInterval(() => {
        setDisplayChars((prev) =>
          prev.map((_, i) => {
            if (settledRef.current[i]) return targetCharsRef.current[i]!
            return randomChar()
          }),
        )
      }, getCycleTick())

      settleTimersRef.current = targetText.map((_, i) => {
        return setTimeout(() => {
          settledRef.current[i] = true

          if (settledRef.current.every(Boolean)) {
            if (cycleTimerRef.current) {
              clearInterval(cycleTimerRef.current)
              cycleTimerRef.current = null
            }
            setDisplayChars([...targetCharsRef.current])
          }
        }, getSettleTime(i))
      })
    },
    [clearTimers],
  )

  useEffect(() => {
    if (text !== prevTextRef.current) {
      prevTextRef.current = text
      startFlip(text.split(''))
    }
  }, [text, startFlip])

  useEffect(() => {
    return clearTimers
  }, [clearTimers])

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} aria-hidden="true">
      {displayChars.map((char, i) => (
        <StyledChar key={i}>{char === ' ' ? '\u00A0' : char}</StyledChar>
      ))}
    </StyledContainer>
  )
}
