import { IConfigOptions } from '../../../utils/Config'
import { LocaleProvider } from '../LocaleProvider'
import { STATE_ABBRS, STATES } from './data'

export class enUSProvider extends LocaleProvider {
  stateAbbr() {
    return this.randomizer.randomIndex(STATE_ABBRS)
  }

  state() {
    return this.randomizer.randomIndex(STATES)
  }

  static canHandle(config: IConfigOptions) {
    return config.locale === 'en-US'
  }
}
