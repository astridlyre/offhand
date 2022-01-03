/* eslint-disable no-magic-numbers, no-unused-vars */
import { padTo, randomNumber, add, subtract } from '../utils/functions'
import { TIMEZONES, CENTURIES } from './Date/Date'
import { IProviderProps } from './Provider'

const pad2 = padTo(2)
const FOUR_YEARS = 126144000000

export class DateProvider {
  #config
  #randomizer

  constructor(props: IProviderProps) {
    const { config, randomizer } = props

    if (!config || !randomizer) {
      throw new Error(
        'Unable to initialize DateProvider, config or randomizer was undefined',
      )
    }

    this.#config = config
    this.#randomizer = randomizer
  }

  #randomFunction(...fns: ((x: number, y: number) => number)[]) {
    return this.#randomizer.randomIndex(fns)
  }

  #randomLocaleDate(options: Intl.DateTimeFormatOptions) {
    return (this.random() as Date).toLocaleDateString(
      this.#config.locale,
      options,
    )
  }

  century() {
    return this.#randomizer.randomIndex(CENTURIES)
  }

  ampm() {
    return this.#randomizer.randomIndex(['am', 'pm'])
  }

  dayOfYear() {
    return randomNumber(1, 365)
  }

  dayOfMonth() {
    return this.#randomLocaleDate({ day: 'numeric' })
  }

  dayOfWeek() {
    return this.#randomLocaleDate({ weekday: 'long' })
  }

  monthNumber() {
    return randomNumber(1, 12)
  }

  monthName() {
    return this.#randomLocaleDate({ month: 'long' })
  }

  year() {
    return randomNumber(1960, 2060)
  }

  timezone() {
    return this.#randomizer.randomIndex(TIMEZONES)
  }

  unix() {
    return Math.round(Math.random() * Date.now())
  }

  time() {
    return `${pad2(randomNumber(0, 24))}:${pad2(randomNumber(0, 60))}:${pad2(
      randomNumber(0, 60),
    )}`
  }

  random(format?: string): string | Date {
    const padTo2 = padTo()
    const start = Date.now()
    const end = start + Math.floor(Math.random() * FOUR_YEARS)
    const date = new Date(this.#randomFunction(add, subtract)(start, end))

    if (!format) {
      return date
    }

    const y = date.getFullYear()
    const d = padTo2(date.getDate())
    const m = padTo2(date.getMonth() + 1)

    if (format === 'MM/YY') {
      return `${m}/${String(y).slice(2)}`
    } else if (format === 'YYYY-MM-DD') {
      return `${y}-${m}-${d}`
    } else if (format === 'YYYY-DD-MM') {
      return `${y}-${d}-${m}`
    }
    return date.toLocaleString(this.#config.locale)
  }

  get CENTURIES() {
    return CENTURIES
  }

  get TIMEZONES() {
    return TIMEZONES
  }
}
