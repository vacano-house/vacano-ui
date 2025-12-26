import clsx from 'clsx'

const COMPONENTS_PREFIX = 'vacano'

export const classNameGetter =
  (name: string) =>
  (element: string, ...classNames: Array<string | undefined>) => {
    return clsx(`${COMPONENTS_PREFIX}_${name}_${element}`, ...classNames)
  }
