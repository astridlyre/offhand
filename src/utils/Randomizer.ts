/* eslint-disable no-magic-numbers */
const LOWERCASE = [...'abcdefghijklmnopqrstuvwxyz']
const UPPERCASE = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const LOWERCASE_AND_UPPERCASE = LOWERCASE.concat(UPPERCASE)

export class Randomizer {
  LOWERCASE = LOWERCASE
  UPPERCASE = UPPERCASE
  LOWERCASE_AND_UPPERCASE = LOWERCASE_AND_UPPERCASE

  randomDigit() {
    return Math.floor(Math.random() * 10)
  }

  randomLowerCase() {
    return this.randomIndex(this.LOWERCASE)
  }

  randomUpperCase() {
    return this.randomIndex(this.UPPERCASE)
  }

  randomLetter() {
    return this.randomIndex(this.LOWERCASE_AND_UPPERCASE)
  }

  randomIndex<T>(source: T[]): T {
    const index: number = Math.floor(Math.random() * source.length)
    return source[index]
  }

  randomKey(object: Record<PropertyKey, any>): string {
    const keys = Object.keys(object)
    return this.randomIndex(keys)
  }
}
