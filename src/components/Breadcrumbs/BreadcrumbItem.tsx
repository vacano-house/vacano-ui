import { BreadcrumbItemProps } from './types'

export const BreadcrumbItem = ({ children, ...rest }: BreadcrumbItemProps) => {
  return <li {...rest}>{children}</li>
}
