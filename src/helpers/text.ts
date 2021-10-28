/**
 * Just copies text passed to clipboard
 */
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
}
