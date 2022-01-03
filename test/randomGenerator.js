/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = Offhand.setup({ locale: 'en-US' })

describe('RandomGenerator', function () {
  describe('from(Array)', function () {
    it('should create a random generator from an array', function () {
      const array = [1, 2, 3, 4, 5]
      const generator = offhand.randomGenerator.from(array)
      const results = Array.from({ length: 5 }, () => generator())

      expect(array).to.not.deep.equal(results)

      for (const value of results) {
        expect(array.includes(value)).to.be.true
      }
    })
  })

  describe('toArray', function () {
    it('should create a random array from a generator', function () {
      const array = [1, 2, 3, 4, 5]
      const generator = offhand.randomGenerator.from(array)
      const results = generator.toArray(10)

      expect(array).to.not.deep.equal(results)
      expect(results.length).to.equal(10)

      for (const value of results) {
        expect(array.includes(value)).to.be.true
      }
    })
  })

  describe('from(Object)', function () {
    it('should create a random generator from an object', function () {
      const object = {
        name: 'Tim',
        age: 15,
        height: 154,
      }
      const generator = offhand.randomGenerator.from(object)
      const results = generator.toArray(5)

      expect(results.length).to.equal(5)

      const values = Object.values(object)

      for (const value of values) {
        expect(values.includes(value)).to.be.true
      }
    })
  })
})
