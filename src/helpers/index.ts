export const currency = (amount: string | number, prefix = ''): string => {
  return (
    prefix +
    Number(parseFloat(amount.toString()))
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  )
}

export const kCurrency = (amount: string | number): string =>
  (parseFloat(amount.toString()) / 1000).toFixed(0) + 'k'

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

/**
 * https://stackoverflow.com/a/65148504/10416161
 *
 * Groups an array of objects by a key an returns an object or array grouped by provided key
 *
 * @param {Record<string, any>[]} array - array to group objects by key.
 * @param {string} key - key to group array objects by.
 * @param {boolean} removeKey - remove the key and it's value from the resulting object.
 * @param {any} outputType - type of structure the output should be contained in.
 */
export const groupBy = (
  inputArray: Record<string, any>[],
  key: string,
  removeKey = false,
  outputType = {}
) => {
  return inputArray.reduce((previous, current) => {
    const { [key]: keyValue } = current

    removeKey && keyValue && delete current[key]

    const { [keyValue]: reducedValue = [] } = previous

    return Object.assign(previous, {
      [keyValue]: reducedValue.concat(current)
    })
  }, outputType)
}
