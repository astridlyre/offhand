import { IConfigOptions } from './utils/Config'
import { Randomizer } from './utils/Randomizer'
import { Replacer } from './utils/Replacer'
import { RandomGenerator } from './utils/RandomGenerator'
import { CreditCardProvider } from './providers/CreditCardProvider'
import { ColorProvider } from './providers/ColorProvider'
import { DateProvider } from './providers/DateProvider'

export class Offhand {
  randomizer: Randomizer
  replacer: Replacer
  randomGenerator: RandomGenerator
  date: DateProvider
  creditCard: CreditCardProvider
  color: ColorProvider

  constructor(config: IConfigOptions) {
    this.randomizer = new Randomizer()
    this.replacer = new Replacer(this.randomizer)
    this.randomGenerator = new RandomGenerator(this.randomizer)
    this.date = new DateProvider(this.randomizer, config)
    this.creditCard = new CreditCardProvider(
      this.randomizer,
      this.replacer,
      this.date,
    )
    this.color = new ColorProvider(this.randomizer)
  }
}
