export const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)

  if (parts.length >= 2) {
    const first = parts[0]?.[0] ?? ''
    const last = parts[parts.length - 1]?.[0] ?? ''

    return (first + last).toUpperCase()
  }

  return name.slice(0, 2).toUpperCase()
}
