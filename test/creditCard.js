/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = new Offhand({ locale: 'en-US' })

describe('createPaymentCard', function () {
  it('should create a random credit card object', function () {
    const card = offhand.creditCard.paymentDetails()
    const validTypes = [
      'Visa',
      'MasterCard',
      'American Express',
      'Discover Card',
    ]
    const numberPattern = /^[\d]{16}$/
    const datePattern = /^([\d]{2}\/[\d]{2})$/

    expect(validTypes.includes(card.type)).to.be.true
    expect(card.holder).to.equal('John Smith')
    expect(datePattern.test(card.expiration)).to.be.true
    expect(numberPattern.test(card.number)).to.be.true
  })
})
