export function getSafeStorage(): Storage | null {
  try { return window.localStorage } catch { return null }
}

export function downloadMarkdown(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  try {
    document.body.appendChild(anchor)
    anchor.click()
  } finally {
    anchor.remove()
    URL.revokeObjectURL(url)
  }
}
