/* eslint-disable no-magic-numbers */
import { IProviderProps } from './Provider'
import { randomNumber, reify } from '../utils/functions'
import {
  CITY_PREFIXES,
  CITY_SUFFIXES,
  STREET_SUFFIXES,
  COUNTRIES,
} from './Address/Address'

const ZIP_FORMATS = ['#####', '#####-####']
const BUILDING_NUMBER_FORMATS = ['##', '###', '####']

export class AddressProvider {
  #randomizer
  #replacer
  #locale

  CITY_PREFIXES = CITY_PREFIXES
  CITY_SUFFIXES = CITY_SUFFIXES
  STREET_SUFFIXES = STREET_SUFFIXES
  COUNTRIES = COUNTRIES

  constructor(props: IProviderProps) {
    const { randomizer, replacer, locale } = props

    if (!randomizer || !replacer || !locale) {
      throw new Error(
        'Unable to initialize AddressProvider ' +
          'randomizer, replacer, or locale is undefined',
      )
    }

    this.#randomizer = randomizer
    this.#replacer = replacer
    this.#locale = locale
  }

  cityPrefix() {
    return this.#randomizer.randomIndex(CITY_PREFIXES)
  }

  citySuffix() {
    return this.#randomizer.randomIndex(CITY_SUFFIXES)
  }

  streetSuffix() {
    return this.#randomizer.randomIndex(STREET_SUFFIXES)
  }

  country() {
    return this.#randomizer.randomIndex(COUNTRIES)
  }

  buildingNumber() {
    return this.#replacer.numberify(
      this.#randomizer.randomIndex(BUILDING_NUMBER_FORMATS),
    )
  }

  zip(digits?: number) {
    if (digits === 5) {
      return this.#replacer.numberify(ZIP_FORMATS[0])
    } else if (digits === 9) {
      return this.#replacer.numberify(ZIP_FORMATS[1])
    }
    return this.#replacer.numberify(this.#randomizer.randomIndex(ZIP_FORMATS))
  }

  street() {
    return reify(this, this.#randomizer.randomIndex(this.#STREET_FORMATS))
  }

  city() {
    return reify(this, this.#randomizer.randomIndex(this.#CITY_FORMATS))
  }

  address1() {
    return reify(this, this.#randomizer.randomIndex(this.#ADDRESS1_FORMATS))
  }

  address2() {
    return this.#replacer.numberify(
      this.#randomizer.randomIndex(this.#ADDRESS2_FORMATS),
    )
  }

  address() {
    return `${this.address1()}\n${this.city()}, ${this.#locale.stateAbbr()} ${this.zip()}`
  }

  latitude() {
    return ((randomNumber(0, 180) * 10000) / 10000.0 - 90.0).toFixed(4)
  }

  longitude() {
    return ((randomNumber(0, 360) * 10000) / 10000.0 - 180.0).toFixed(4)
  }

  #CITY_FORMATS = [
    [this.cityPrefix, ' ', this.citySuffix],
    [this.cityPrefix, ' '],
    [this.citySuffix],
    [this.citySuffix],
  ]

  #STREET_FORMATS = [
    [' ', this.streetSuffix],
    [' ', this.streetSuffix],
  ]

  #ADDRESS1_FORMATS = [
    [this.buildingNumber, ' ', this.street],
    [this.buildingNumber, ' ', this.street, ' ', this.address2],
  ]

  #ADDRESS2_FORMATS = ['Apt. ###', 'Apt #', 'Suite ###', 'Suite #']
}
