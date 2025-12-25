import clsx from 'clsx'

import { COMPONENTS_PREFIX } from '../constants'

export const classNameGetter =
  (name: string) =>
  (element: string, ...classNames: (string | undefined)[]) => {
    return clsx(`${COMPONENTS_PREFIX}_${name}_${element}`, ...classNames)
  }
