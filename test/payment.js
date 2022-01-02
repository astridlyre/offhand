/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { createPaymentCard } from '../dist/index.js'

describe('providers', function () {
  describe('createPaymentCard', function () {
    it('should create a random credit card object', function () {
      const card = createPaymentCard()
      const validTypes = [
        'Visa',
        'MasterCard',
        'American Express',
        'Discover Card',
      ]
      const numberPattern = /^[\d]{16}$/
      const datePattern = /^([\d]{2}\/[\d]{2})$/

      console.log(card)

      expect(validTypes.includes(card.type)).to.be.true
      expect(card.holder).to.equal('John Smith')
      expect(datePattern.test(card.expiration)).to.be.true
      expect(numberPattern.test(card.number)).to.be.true
    })
  })
})
