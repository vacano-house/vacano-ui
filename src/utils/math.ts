export class MathUtils {
  public static toHEX = (n: number): string => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)))

    return clamped.toString(16).padStart(2, '0')
  }
}
