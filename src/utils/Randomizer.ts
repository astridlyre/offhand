/* eslint-disable no-magic-numbers */

export class Randomizer {
  LOWERCASE = [...'abcdefghijklmnopqrstuvwxyz']
  UPPERCASE = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  LOWERCASE_AND_UPPERCASE = this.LOWERCASE.concat(this.UPPERCASE)

  randomDigit = (): number => Math.floor(Math.random() * 10)
  randomLowerCase = () => this.randomIndex(this.LOWERCASE)
  randomUpperCase = () => this.randomIndex(this.UPPERCASE)
  randomLetter = () => this.randomIndex(this.LOWERCASE_AND_UPPERCASE)

  randomIndex<T>(source: T[]): T {
    const index: number = Math.floor(Math.random() * source.length)
    return source[index]
  }

  randomKey(object: Record<PropertyKey, any>): string {
    const keys = Object.keys(object)
    return this.randomIndex(keys)
  }
}
