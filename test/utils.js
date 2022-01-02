/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-empty-function */
import { strict as assert } from 'assert'
import { describe, it } from 'mocha'
import {
  join,
  letterify,
  LOWERCASE,
  LOWERCASE_AND_UPPERCASE,
  numberify,
  randomDigit,
  RandomGenerator,
  randomLetter,
  randomLowerCase,
  randomUpperCase,
  UPPERCASE,
} from '../dist/index.js'

describe('RandomGenerator', function () {
  describe('from(Array)', function () {
    it('should create a random generator from an array', function () {
      const array = [1, 2, 3, 4, 5]
      const generator = RandomGenerator.from(array)
      const results = Array.from({ length: 5 }, () => generator())

      assert.notDeepEqual(array, results)

      for (const value of results) {
        assert.equal(
          array.some((v) => v === value),
          true,
        )
      }
    })
  })

  describe('toArray', function () {
    it('should create a random array from a generator', function () {
      const array = [1, 2, 3, 4, 5]
      const generator = RandomGenerator.from(array)
      const results = generator.toArray(10)

      assert.notDeepEqual(array, results)
      assert.equal(results.length, 10)

      for (const value of results) {
        assert.equal(
          array.some((v) => v === value),
          true,
        )
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
      const generator = RandomGenerator.from(object)
      const results = generator.toArray(5)

      assert.equal(results.length, 5)

      const values = Object.values(object)

      for (const value of values) {
        assert.equal(
          values.some((v) => v === value),
          true,
        )
      }
    })
  })
})

describe('randomizers', function () {
  describe('randomDigit', function () {
    it('should create random digits', function () {
      const array1 = Array.from({ length: 25 }, randomDigit)
      const array2 = Array.from({ length: 25 }, randomDigit)

      // possible that they are equal, but unlikely
      assert.notDeepEqual(array1, array2)

      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      for (const value of array1.concat(array2)) {
        assert.equal(
          numbers.some((n) => n === value),
          true,
        )
      }
    })
  })

  describe('randomLetter', function () {
    for (const sets of [
      [randomLowerCase, LOWERCASE],
      [randomUpperCase, UPPERCASE],
      [randomLetter, LOWERCASE_AND_UPPERCASE],
    ]) {
      it('should create random letters', function () {
        const [generator, characterSet] = sets
        const array1 = Array.from({ length: 25 }, generator)
        const array2 = Array.from({ length: 25 }, generator)

        assert.notDeepEqual(array1, array2)

        for (const value of array1.concat(array2)) {
          assert.equal(
            characterSet.some((l) => l === value),
            true,
          )
        }
      })
    }
  })
})

describe('replacers', function () {
  describe('letterify', function () {
    it('should fill placeholders with random letters', function () {
      const initial = 'XXXX-XXXX-XXXX'
      const actual = letterify(initial)
      const expectedPattern = /^([a-zA-Z]{4}-[a-zA-Z]{4}-[a-zA-Z]{4})$/

      assert.equal(expectedPattern.test(actual), true)
    })
  })

  describe('numberify', function () {
    it('should fill placeholders with random numbers', function () {
      const initial = '####-####-####-####'
      const actual = numberify(initial)
      const expectedPattern = /^([\d]{4}-[\d]{4}-[\d]{4}-[\d]{4})$/

      assert.equal(expectedPattern.test(actual), true)
    })
  })

  describe('join', function () {
    it('should join an array of strings, filtering possibly null or undefined values', function () {
      const initial = ['hello', undefined, null, 'world']
      const expected = 'hello world'
      const actual = join(...initial)

      assert.equal(actual, expected)
    })
  })
})
