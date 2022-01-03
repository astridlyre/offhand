/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = Offhand.setup({ locale: 'en-US' })

describe('color', function () {
  describe('name', function () {
    it('should generate a random color name', function () {
      const colorNames = offhand.color.COLOR_NAMES
      const actual = offhand.color.name()

      expect(colorNames.includes(actual)).to.be.true
      expect(actual).to.be.a('string')
    })
  })

  describe('safeName', function () {
    it('should generate safe colors', function () {
      const colorNames = offhand.color.SAFE_COLORS
      const actual = offhand.color.safeName()

      expect(colorNames.includes(actual)).to.be.true
      expect(actual).to.be.a('string')
    })
  })

  describe('value', function () {
    it('should generate a color value', function () {
      const min = 0
      const max = 255
      const actual = offhand.color.value()

      expect(actual >= min).to.be.true
      expect(actual <= max).to.be.true
    })
  })

  describe('opacity', function () {
    it('should generate an opacity value', function () {
      const min = 0
      const max = 1
      const actual = offhand.color.opacity()

      expect(actual >= min).to.be.true
      expect(actual <= max).to.be.true
    })
  })

  describe('rgbArray', function () {
    it('should generate an rgbArray', function () {
      const actual = offhand.color.rgbArray()
      const isWithinRange = (n) => n >= 0 && n <= 255

      expect(actual.length).to.equal(3)

      for (const value of actual) {
        expect(isWithinRange(value)).to.be.true
      }
    })
  })

  describe('rgbaArray', function () {
    it('should generate an rgbaArray', function () {
      const actual = offhand.color.rgbaArray()
      const isWithinRange = (n) => n >= 0 && n <= 255
      const isWithinRangeOpacity = (n) => n >= 0 && n <= 1

      expect(actual.length).to.equal(4)
      expect(isWithinRangeOpacity(actual[3])).to.be.true

      for (const value of actual.slice(-1)) {
        expect(isWithinRange(value)).to.be.true
      }
    })
  })

  describe('rgb', function () {
    it('should generate an rgb value', function () {
      const value = offhand.color.rgb()

      // Pattern to match 'rgb(0-255, 0-255, 0-255)'
      const pattern =
        /^rgb\([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5], [01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5], [01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]\)$/

      expect(pattern.test(value)).to.be.true
    })
  })

  describe('rgba', function () {
    it('should generate an rgba value', function () {
      const value = offhand.color.rgba()

      // Pattern to match 'rgba(0-255, 0-255, 0-255, 0-1)'
      const pattern =
        /^rgba\([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5], [01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5], [01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5], [01]\.[0-9][0-9]\)$/

      expect(pattern.test(value)).to.be.true
    })
  })

  describe('hex', function () {
    it('should generate a hex value', function () {
      const value = offhand.color.hex()
      const pattern = /^(#[0-9a-fA-F]{6})$/

      expect(pattern.test(value)).to.be.true
    })
  })
})
