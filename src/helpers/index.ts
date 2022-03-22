export const currency = (
  amount: string | number,
  prefix = '',
  fixed = 2
): string => {
  return (
    prefix +
    Number(parseFloat(amount.toString()))
      .toFixed(fixed)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  )
}

export const asPercentage = (number: number): string =>
  `${(number * 100).toFixed(0)}%`

export const kCurrency = (amount: string | number, fixed = 0): string =>
  `${(parseFloat(amount.toString()) / 1000).toFixed(fixed)}k`

export const formattedCurrency = (value: number, currency = 'pt'): string => {
  try {
    return Intl.NumberFormat(currency, {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'symbol',
      maximumFractionDigits: 0
    }).format(Math.trunc(value))
  } catch (_error) {
    // IE-compatible code
    const formattedValue = value
      .toFixed(0)
      .split('')
      .reduce(
        (a, b, i) =>
          a + (i && !((value.toFixed(0).length - i) % 3) ? '.' : '') + b,
        ''
      )

    return `R$ ${formattedValue}`
  }
}

export const titleize = (text: string): string => {
  let upper = true
  let newStr = ''

  for (let i = 0, l = text.length; i < l; i++) {
    if (text[i] === ' ') {
      upper = true
      newStr += text[i]
      continue
    }

    newStr += upper ? text[i].toUpperCase() : text[i].toLowerCase()
    upper = false
  }

  return newStr
}

export function truncatedText(text?: string | null, cut = 40): string | null {
  if (!text) return null

  if (text.length > cut) {
    return `${text.substring(0, cut - 3).trimEnd()}...`
  }

  return text
}

/**
 * https://stackoverflow.com/a/65148504/10416161
 *
 * Groups an array of objects by a key and returns an object or array grouped by provided key
 *
 * @param {Record<string, any>[]} array - array to group objects by key.
 * @param {string} key - key to group array objects by.
 * @param {boolean} removeKey - remove the key and it's value from the resulting object.
 * @param {any} outputType - type of structure the output should be contained in.
 */
export function groupBy<T extends Record<string, any>>(
  inputArray: T[],
  key: string,
  removeKey = false,
  outputType = {} as T
): Record<keyof T, T[]> {
  return inputArray.reduce((previous: Record<keyof T, T[]>, current) => {
    const currentCopy = current
    const { [key]: keyValue } = currentCopy

    if (removeKey && keyValue) {
      delete currentCopy[key]
    }

    const { [keyValue]: reducedValue = [] } = previous

    return Object.assign(previous, {
      [keyValue]: reducedValue.concat(currentCopy)
    })
  }, outputType)
}
