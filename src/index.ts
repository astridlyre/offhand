import { Provider } from './providers/Provider'
import { IConfigOptions } from './utils/Config'
import { RandomGenerator } from './utils/RandomGenerator'
import { Randomizer } from './utils/Randomizer'
import { Replacer } from './utils/Replacer'

export class Offhand {
  static setup(config: IConfigOptions) {
    const randomizer = new Randomizer()
    const replacer = new Replacer(randomizer)
    const randomGenerator = new RandomGenerator(randomizer)

    return new Provider(randomizer, replacer, randomGenerator, config)
  }

  constructor() {
    throw new Error(
      'Use static class method setup() with your provided configuration ' +
        'instead of calling the class constructor directly',
    )
  }
}
