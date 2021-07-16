declare module 'javascript-color-gradient' {
  class Gradient {
    setGradient(startColor: string, endColor: string): void

    setMidpoint(midpoint: number): void

    getArray(): string[]

    getColor(num: number): string
  }

  export = Gradient
}
