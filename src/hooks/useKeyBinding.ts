import { useEffect, useRef } from 'react'

import { KeyboardEventKey } from '../types'

const normalizeKey = (key: string): string => {
  if (key.length === 1 && /[a-z]/i.test(key)) {
    return key.toUpperCase()
  }
  return key
}

export const useKeyBinding = (binding: KeyboardEventKey[], cb?: () => void) => {
  const pressedKeys = useRef<Set<string>>(new Set())
  const cbRef = useRef(cb)

  cbRef.current = cb

  useEffect(() => {
    const bindSet = new Set(binding)

    const checkMatch = () => {
      if (bindSet.size !== pressedKeys.current.size) {
        return false
      }

      for (const key of bindSet) {
        if (!pressedKeys.current.has(key)) {
          return false
        }
      }

      return true
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key)
      pressedKeys.current.add(key)

      if (checkMatch() && cbRef.current) {
        e.preventDefault()
        cbRef.current()
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key)
      pressedKeys.current.delete(key)
    }

    const handleBlur = () => {
      pressedKeys.current.clear()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
    }
  }, [binding])
}
