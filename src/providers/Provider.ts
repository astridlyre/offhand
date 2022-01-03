import { Randomizer } from '../utils/Randomizer'
import { Replacer } from '../utils/Replacer'
import { PersonProvider } from './PersonProvider'
import { LocaleProvider } from './LocaleProvider'
import { DateProvider } from './DateProvider'
import { CreditCardProvider } from './CreditCardProvider'
import { ColorProvider } from './ColorProvider'
import { AddressProvider } from './AddressProvider'
import { IConfigOptions } from '../utils/Config'
import { RandomGenerator } from '../utils/RandomGenerator'

export interface IProviderProps {
  config?: IConfigOptions
  randomizer?: Randomizer
  replacer?: Replacer
  randomGenerator?: RandomGenerator
  address?: AddressProvider
  color?: ColorProvider
  creditCard?: CreditCardProvider
  date?: DateProvider
  locale?: LocaleProvider
  person?: PersonProvider
}

export class Provider {
  randomizer: Randomizer
  replacer: Replacer
  randomGenerator: RandomGenerator
  address: AddressProvider
  color: ColorProvider
  creditCard: CreditCardProvider
  date: DateProvider
  locale: LocaleProvider
  person: PersonProvider

  constructor(
    randomizer: Randomizer,
    replacer: Replacer,
    randomGenerator: RandomGenerator,
    config: IConfigOptions,
  ) {
    this.randomizer = randomizer
    this.replacer = replacer
    this.randomGenerator = randomGenerator
    this.locale = LocaleProvider.for({ randomizer, config })
    this.date = new DateProvider({ randomizer, config })
    this.creditCard = new CreditCardProvider({
      randomizer,
      replacer,
      date: this.date,
    })
    this.color = new ColorProvider({ randomizer })
    this.address = new AddressProvider({
      randomizer,
      replacer,
      locale: this.locale,
    })
    this.person = new PersonProvider({ randomizer, replacer })
  }
}
