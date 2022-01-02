/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = new Offhand({ locale: 'en-US' })

describe('replacers', function () {
  describe('letterify', function () {
    it('should fill placeholders with random letters', function () {
      const initial = 'XXXX-XXXX-XXXX'
      const actual = offhand.replacer.letterify(initial)
      const expectedPattern = /^([a-zA-Z]{4}-[a-zA-Z]{4}-[a-zA-Z]{4})$/

      expect(expectedPattern.test(actual)).to.be.true
    })
  })

  describe('numberify', function () {
    it('should fill placeholders with random numbers', function () {
      const initial = '####-####-####-####'
      const actual = offhand.replacer.numberify(initial)
      const expectedPattern = /^([\d]{4}-[\d]{4}-[\d]{4}-[\d]{4})$/

      expect(expectedPattern.test(actual)).to.be.true
    })
  })

  describe('join', function () {
    it('should join an array of strings, filtering possibly null or undefined values', function () {
      const initial = ['hello', undefined, null, 'world']
      const expected = 'hello world'
      const actual = offhand.replacer.join(...initial)

      expect(actual).to.equal(expected)
    })
  })
})
