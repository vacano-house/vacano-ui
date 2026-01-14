export type SaveProgressContextValue = {
  isVisible: boolean
  show: (message?: string) => void
  hide: () => void
}

export type SaveProgressProviderProps = {
  children: React.ReactNode
  defaultMessage?: string
}
