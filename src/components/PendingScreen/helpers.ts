import { DEFAULT_INTERVAL, DEFAULT_PHRASES } from './constants'

export const getPhrases = (phrases?: string[]) => {
  return phrases && phrases.length > 0 ? phrases : DEFAULT_PHRASES
}

export const getInterval = (interval?: number) => {
  return interval && interval > 0 ? interval : DEFAULT_INTERVAL
}

export const getBoardWidth = (phrases: string[]) => {
  return Math.max(...phrases.map((p) => p.length))
}

export const padPhrase = (phrase: string, width: number) => {
  const padding = Math.floor((width - phrase.length) / 2)
  return phrase.padStart(phrase.length + padding).padEnd(width)
}

export const createShuffledQueue = (length: number, excludeIndex?: number): number[] => {
  const indices = Array.from({ length }, (_, i) => i)

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j]!, indices[i]!]
  }

  if (excludeIndex !== undefined && indices[0] === excludeIndex) {
    const swapWith = 1 + Math.floor(Math.random() * (indices.length - 1))
    ;[indices[0], indices[swapWith]] = [indices[swapWith]!, indices[0]!]
  }

  return indices
}
