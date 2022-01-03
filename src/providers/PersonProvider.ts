import { reify } from '../utils/functions'
import {
  PREFIXES,
  COMPANY_SUFFIXES,
  CATCH_PHRASE_WORDS,
  FIRST_NAMES,
  LAST_NAMES,
  PHONE_FORMATS,
} from './Person/Person'
import { IProviderProps } from './Provider'

export class PersonProvider {
  #randomizer
  #replacer

  constructor(props: IProviderProps) {
    const { randomizer, replacer } = props

    if (!randomizer || !replacer) {
      throw new Error(
        'Unable to initialize PersonProvider ' +
          'randomizer or replacer was undefined',
      )
    }

    this.#randomizer = randomizer
    this.#replacer = replacer
  }

  name() {
    return `${this.#randomizer.randomIndex(PREFIXES)} ${this.lastName()}`
  }

  firstName() {
    return this.#randomizer.randomIndex(FIRST_NAMES)
  }

  lastName() {
    return this.#randomizer.randomIndex(LAST_NAMES)
  }

  fullName() {
    return `${this.firstName()} ${this.lastName()}`
  }

  userName() {
    return reify(this, this.#randomizer.randomIndex(this.#USERNAME_FORMATS))
  }

  companyName() {
    return `${this.lastName()} ${this.#randomizer.randomIndex(
      COMPANY_SUFFIXES,
    )}`
  }

  companyPhrase() {
    return CATCH_PHRASE_WORDS.map((list) =>
      this.#randomizer.randomIndex(list),
    ).join(' ')
  }

  phoneNumber() {
    return this.#replacer.numberify(this.#randomizer.randomIndex(PHONE_FORMATS))
  }

  #USERNAME_FORMATS = [
    [this.firstName, '.', this.lastName],
    [this.lastName, '.', this.firstName],
    [this.firstName, '_', this.lastName],
    [this.lastName, '_', this.firstName],
  ]
}
