import { CYCLE_TICK_MS, SETTLE_BASE_MS, SETTLE_STAGGER_MS, SHUFFLE_ALPHABET } from './constants'

export const randomChar = () => {
  return SHUFFLE_ALPHABET[Math.floor(Math.random() * SHUFFLE_ALPHABET.length)]!
}

export const getSettleTime = (index: number) => {
  return SETTLE_BASE_MS + index * SETTLE_STAGGER_MS
}

export const getCycleTick = () => CYCLE_TICK_MS
