import { Browser, OperatingSystem } from '../types'

export const getOperatingSystem = (): OperatingSystem => {
  if (typeof navigator === 'undefined') {
    return 'unknown'
  }

  const ua = navigator.userAgent.toLowerCase()

  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  if (/android/.test(ua)) return 'android'
  if (/mac/.test(ua)) return 'macos'
  if (/win/.test(ua)) return 'windows'
  if (/linux/.test(ua)) return 'linux'

  return 'unknown'
}

export const getBrowser = (): Browser => {
  if (typeof navigator === 'undefined') {
    return 'unknown'
  }

  const ua = navigator.userAgent.toLowerCase()

  if (/edg/.test(ua)) return 'edge'
  if (/opr|opera/.test(ua)) return 'opera'
  if (/chrome/.test(ua)) return 'chrome'
  if (/safari/.test(ua)) return 'safari'
  if (/firefox/.test(ua)) return 'firefox'

  return 'unknown'
}
