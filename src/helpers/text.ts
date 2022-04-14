/**
 * https://github.com/sudodoki/copy-to-clipboard/blob/02033decb3affef184672221904d2961f4efc5d9/LICENSE
 * Just copies text passed to clipboard
 */
export const copyToClipboard = (
  text: string,
  format: 'text/html' | 'text/plain' = 'text/plain',
  onError?: () => void,
  onSuccess?: () => void
): void => {
  const range = document.createRange()
  const selection = document.getSelection()

  const mark = document.createElement('span')
  mark.textContent = text
  // reset user styles for span element
  mark.style.all = 'unset'
  // prevents scrolling to the end of the page
  mark.style.position = 'fixed'
  mark.style.top = '0'
  // used to preserve spaces and line breaks
  mark.style.whiteSpace = 'pre'
  // do not inherit user-select (it may be `none`)
  mark.style.userSelect = 'text'

  mark.addEventListener('copy', (e) => {
    e.stopPropagation()
    if (format === 'text/html') {
      e.preventDefault()
      e.clipboardData?.clearData()
      e.clipboardData?.setData(format, text)
    }
  })
  document.body.appendChild(mark)

  range.selectNodeContents(mark)
  selection?.addRange(range)

  document.execCommand('copy')
  const successful = document.execCommand('copy')
  if (successful) {
    onSuccess?.()
  } else {
    onError?.()
  }

  selection?.removeAllRanges()
  document.body.removeChild(mark)
}
