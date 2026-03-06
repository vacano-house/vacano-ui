import { useEffect, useRef } from 'react'

import { KeyboardEventKey } from '../types'

const MODIFIER_KEYS = new Set(['Meta', 'Control', 'Alt', 'Shift'])

const normalizeKey = (key: string): string => {
  if (key.length === 1 && /[a-z]/i.test(key)) {
    return key.toUpperCase()
  }
  return key
}

const getModifiersFromEvent = (e: KeyboardEvent): Set<string> => {
  const modifiers = new Set<string>()
  if (e.metaKey) modifiers.add('Meta')
  if (e.ctrlKey) modifiers.add('Control')
  if (e.altKey) modifiers.add('Alt')
  if (e.shiftKey) modifiers.add('Shift')
  return modifiers
}

export const useKeyBinding = (keys: KeyboardEventKey[], cb?: () => void) => {
  const cbRef = useRef(cb)

  cbRef.current = cb

  useEffect(() => {
    if (keys.length === 0) return

    const keysSet = new Set(keys)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return

      const key = normalizeKey(e.key)
      const activeModifiers = getModifiersFromEvent(e)

      if (MODIFIER_KEYS.has(key)) return

      for (const k of keysSet) {
        if (MODIFIER_KEYS.has(k)) {
          if (!activeModifiers.has(k)) return
        } else if (k !== key) {
          return
        }
      }

      const expectedModifiers = new Set([...keysSet].filter((k) => MODIFIER_KEYS.has(k)))
      if (activeModifiers.size !== expectedModifiers.size) return

      if (cbRef.current) {
        e.preventDefault()
        cbRef.current()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keys])
}
