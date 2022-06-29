export const loadAsset = (asset: string) => {
  try {
    if (asset.includes('static')) return asset

    return require(`./${asset}`)
  } catch (error) {
    try {
      return require(`asset`)
    } catch (error2) {
      return asset
    }
  }
}
