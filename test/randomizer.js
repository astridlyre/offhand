/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = Offhand.setup({ locale: 'en-US' })

describe('randomizers', function () {
  describe('randomDigit', function () {
    it('should create random digits', function () {
      const array1 = Array.from({ length: 25 }, () =>
        offhand.randomizer.randomDigit(),
      )
      const array2 = Array.from({ length: 25 }, () =>
        offhand.randomizer.randomDigit(),
      )

      // possible that they are equal, but unlikely
      expect(array1).to.not.deep.equal(array2)

      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      for (const value of array1.concat(array2)) {
        expect(numbers.includes(value)).to.be.true
      }
    })
  })

  describe('randomLetter', function () {
    for (const [generator, characterSet] of [
      [
        () => offhand.randomizer.randomLowerCase(),
        offhand.randomizer.LOWERCASE,
      ],
      [
        () => offhand.randomizer.randomUpperCase(),
        offhand.randomizer.UPPERCASE,
      ],
      [
        () => offhand.randomizer.randomLetter(),
        offhand.randomizer.LOWERCASE_AND_UPPERCASE,
      ],
    ]) {
      it('should create random letters', function () {
        const array1 = Array.from({ length: 25 }, generator)
        const array2 = Array.from({ length: 25 }, generator)

        expect(array1).to.not.deep.equal(array2)

        for (const value of array1.concat(array2)) {
          expect(characterSet.includes(value)).to.be.true
        }
      })
    }
  })
})
