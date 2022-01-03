import { Randomizer } from './Randomizer'

export class Replacer {
  randomizer

  constructor(randomizer: Randomizer) {
    this.randomizer = randomizer
  }

  letterify(str: string) {
    return str.replaceAll('X', () => this.randomizer.randomLetter())
  }

  numberify(str: string) {
    return str.replaceAll('#', () => `${this.randomizer.randomDigit()}`)
  }

  join(...tokens: string[]) {
    return tokens.filter(Boolean).join(' ')
  }
}
