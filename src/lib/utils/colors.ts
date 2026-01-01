export class Colors {
  public static alpha = (hexColor: string, percentage: number): string => {
    if (!Colors.isValid(hexColor)) {
      return '#000000FF'
    }

    const hex = hexColor.replace('#', '').slice(0, 6)
    const alphaHex = Colors.toHEX(percentage)

    return `#${hex}${alphaHex}`
  }

  private static isValid = (hexColor: string): boolean => {
    return /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hexColor)
  }

  private static toHEX = (n: number): string => {
    const clamped = Math.max(0, Math.min(100, n))
    const value = Math.round((clamped / 100) * 255)

    return value.toString(16).padStart(2, '0')
  }
}
