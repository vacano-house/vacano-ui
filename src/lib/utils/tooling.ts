import clsx from 'clsx'

const COMPONENTS_PREFIX = 'vacano'

export class Tooling {
  public static newClassNameGetter =
    (name: string) =>
    (element: string, ...classNames: Array<string | undefined>) => {
      return clsx(`${COMPONENTS_PREFIX}_${name}_${element}`, ...classNames)
    }
}
