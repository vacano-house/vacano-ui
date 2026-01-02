export const toHEX = (n: number): string => {
  const clamped = Math.max(0, Math.min(100, n))
  const value = Math.round((clamped / 100) * 255)

  return value.toString(16).padStart(2, '0')
}

export const isValid = (hexColor: string): boolean => {
  return /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hexColor)
}

export const alpha = (hexColor: string, percentage: number): string => {
  if (!isValid(hexColor)) {
    return '#000000FF'
  }

  const hex = hexColor.replace('#', '').slice(0, 6)
  const alphaHex = toHEX(percentage)

  return `#${hex}${alphaHex}`
}
