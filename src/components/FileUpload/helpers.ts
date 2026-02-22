export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'

  const units = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = bytes / Math.pow(1024, i)

  return `${size % 1 === 0 ? size : size.toFixed(1)} ${units[i]}`
}

export const isFileTypeAccepted = (file: File, accept: string): boolean => {
  const acceptedTypes = accept.split(',').map((t) => t.trim())

  return acceptedTypes.some((type) => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type.toLowerCase())
    }

    if (type.endsWith('/*')) {
      return file.type.startsWith(type.replace('/*', '/'))
    }

    return file.type === type
  })
}
