/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = Offhand.setup({ locale: 'en-US' })
const { address } = offhand

describe('address', function () {
  describe('cityPrefix', function () {
    it('should return a random city prefix', function () {
      const actual = address.cityPrefix()

      expect(address.CITY_PREFIXES.includes(actual)).to.be.true
    })
  })

  describe('citySuffix', function () {
    it('should return a random city suffix', function () {
      const actual = address.citySuffix()

      expect(address.CITY_SUFFIXES.includes(actual)).to.be.true
    })
  })

  describe('streetSuffix', function () {
    it('should return a random street suffix', function () {
      const actual = address.streetSuffix()

      expect(address.STREET_SUFFIXES.includes(actual)).to.be.true
    })
  })

  describe('country', function () {
    it('should return a random country', function () {
      const actual = address.country()

      expect(address.COUNTRIES.includes(actual)).to.be.true
    })
  })

  describe('buildingNumber', function () {
    it('should return a random buildingNumber', function () {
      const actual = address.buildingNumber()
      const pattern = /^[0-9][0-9][0-9]?[0-9]?$/

      expect(pattern.test(actual)).to.be.true
    })
  })

  describe('zip', function () {
    it('should return a random 5 digit zip', function () {
      const actual = address.zip(5)
      const pattern = /^[0-9]{5}$/

      expect(pattern.test(actual)).to.be.true
    })

    it('should return a random 9 digit zip', function () {
      const actual = address.zip(9)
      const pattern = /^[0-9]{5}-[0-9]{4}$/

      expect(pattern.test(actual)).to.be.true
    })

    it('should return a random 5 or 9 digit zip', function () {
      const actual = address.zip()
      const pattern = /^([0-9]{5}-[0-9]{4})|([0-9]{5})$/

      expect(pattern.test(actual)).to.be.true
    })
  })
})
