export type ExampleSize = 'sm' | 'md' | 'lg'
export type ExampleVariant = 'one' | 'two'

export type ExampleClassnames = {
  container: string
  title: string
}

export type StyledExampleContainerProps = {
  $fontSize: string
  $variant: ExampleVariant
}

export type ExampleProps = {
  size: ExampleSize
  classnames?: ExampleClassnames
  className?: string
  variant?: ExampleVariant
  'data-test-id'?: string
}
