/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import type { Randomizer } from '../../utils/Randomizer'
import { IConfigOptions } from '../../utils/Config'
import { IProviderProps } from '../Provider'

const registry: Set<typeof LocaleProvider> = new Set()

export class LocaleProvider {
  randomizer: Randomizer
  config: IConfigOptions

  constructor(randomizer: Randomizer, config: IConfigOptions) {
    this.randomizer = randomizer
    this.config = config
  }

  stateAbbr() {
    return 'Must be implemented in subclass'
  }

  static canHandle(_config: IConfigOptions) {
    return false
  }

  static for(props: IProviderProps) {
    const { config, randomizer } = props

    if (!config || !randomizer) {
      throw new Error(
        'Unable to initialize LocaleProvider, config or randomizer was undefined',
      )
    }

    for (const provider of registry) {
      if (provider.canHandle(config)) {
        return new provider(randomizer, config)
      }
    }

    throw new Error(`No providers for config locale ${config.locale}`)
  }

  static register(provider: typeof LocaleProvider) {
    registry.add(provider)
    return provider
  }
}
