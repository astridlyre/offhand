import { Replacer } from '../utils/Replacer'
import { Randomizer } from '../utils/Randomizer'
import { DateProvider } from './DateProvider'

type TCreditCardVendorName =
  | 'MasterCard'
  | 'Visa'
  | 'American Express'
  | 'Discover Card'

interface ICreditCardVendor {
  name: TCreditCardVendorName
  formats: string[]
}

const MASTERCARD: ICreditCardVendor = {
  name: 'MasterCard',
  formats: [
    '51##############',
    '52##############',
    '53##############',
    '54##############',
    '55##############',
  ],
}

const VISA: ICreditCardVendor = {
  name: 'Visa',
  formats: [
    '4539############',
    '4556############',
    '4916############',
    '4532############',
    '4929############',
    '40240071########',
    '4485############',
    '4716############',
    '4###############',
  ],
}

const AMEX: ICreditCardVendor = {
  name: 'American Express',
  formats: ['34##############', '37##############'],
}

const DISCOVER: ICreditCardVendor = {
  name: 'Discover Card',
  formats: ['6011############'],
}

export const CARD_VENDORS: ICreditCardVendor[] = [
  MASTERCARD,
  VISA,
  AMEX,
  DISCOVER,
]

interface ICreditCardDetails {
  type: TCreditCardVendorName
  number: string
  expiration: string
  holder: string
}

export class CreditCardProvider {
  #randomizer
  #replacer
  #date

  constructor(randomizer: Randomizer, replacer: Replacer, date: DateProvider) {
    this.#randomizer = randomizer
    this.#replacer = replacer
    this.#date = date
  }

  paymentDetails(): ICreditCardDetails {
    const vendor = this.#randomizer.randomIndex(CARD_VENDORS)
    const number = this.#replacer.numberify(
      this.#randomizer.randomIndex(vendor.formats),
    )
    const expiration = this.#date.random('MM/YY') as string
    const holder = 'John Smith'

    return {
      type: vendor.name,
      number,
      expiration,
      holder,
    }
  }
}
