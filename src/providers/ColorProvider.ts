/* eslint-disable no-magic-numbers */
import { COLOR_NAMES, SAFE_COLORS } from './Colors/Colors'
import { Randomizer } from '../utils/Randomizer'
import { padTo } from '../utils/functions'

export class ColorProvider {
  #randomizer

  constructor(randomizer: Randomizer) {
    this.#randomizer = randomizer
  }

  opacity = () => Math.round(Math.random() * 100) / 100
  value = () => Math.floor(Math.random() * 256)
  safeName = () => this.#randomizer.randomIndex(SAFE_COLORS)
  name = () => this.#randomizer.randomIndex(COLOR_NAMES)
  rgbArray = () => [this.value(), this.value(), this.value()]
  rgbaArray = () => this.rgbArray().concat(this.opacity())
  rgba = () => `rgba(${this.rgbaArray().join(', ')})`
  rgb = () => `rgb(${this.rgbArray().join(', ')})`
  hex = () =>
    `#${this.rgbArray()
      .map((n) => padTo(2)(n.toString(16)))
      .join('')}`

  get COLOR_NAMES() {
    return COLOR_NAMES
  }

  get SAFE_COLORS() {
    return SAFE_COLORS
  }
}
