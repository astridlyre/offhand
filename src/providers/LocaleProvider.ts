import { LocaleProvider } from './LocaleProviders/LocaleProvider'
import { enUSProvider } from './LocaleProviders/enUS/Provider'

LocaleProvider.register(enUSProvider)

export { LocaleProvider }
