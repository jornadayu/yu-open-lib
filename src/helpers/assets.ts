export const loadAsset = (asset: string) => {
  try {
    if (asset.includes('static')) return asset

    return require(`./${asset}`)
  } catch (error) {
    console.log(error)
    try {
      return require(`asset`)
    } catch (error2) {
      console.log(error2)
      console.log('nope', asset)
      return asset
    }
  }
}
