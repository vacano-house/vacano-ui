import { useMemo } from 'react'

import { ExampleSize, ExampleVariant } from './types'

export const useExample = (size: ExampleSize, variant: ExampleVariant) => {
  const fontSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return '10px'

      case 'md':
        return '14px'

      case 'lg':
        return '16px'

      default:
        return '14px'
    }
  }, [size])

  const handleClick = () => {
    alert(variant)
  }

  return {
    fontSize,
    handleClick,
  }
}
