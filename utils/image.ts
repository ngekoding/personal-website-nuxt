export function getMinifiedImg(url: string): string {
  const parts = url.split('/')
  const filename = parts.pop()
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${parts.join('/')}/min/${filename}`
}
