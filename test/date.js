/* eslint-disable no-magic-numbers, func-names, @typescript-eslint/no-empty-function */
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Offhand } from '../dist/index.js'

const offhand = new Offhand({ locale: 'en-US' })

describe('date', function () {
  describe('century', function () {
    it('should return a century', function () {
      const actual = offhand.date.century()

      expect(offhand.date.CENTURIES.includes(actual)).to.be.true
    })
  })

  describe('ampm', function () {
    it('should return am/pm', function () {
      const actual = offhand.date.ampm()

      expect(['am', 'pm'].includes(actual)).to.be.true
    })
  })

  describe('dayOfYear', function () {
    it('should return a number between 1 and 365', function () {
      const actual = offhand.date.dayOfYear()

      expect(actual >= 1).to.be.true
      expect(actual <= 365).to.be.true
    })
  })

  describe('dayOfMonth', function () {
    it('should return a number between 1 and 31', function () {
      const actual = offhand.date.dayOfMonth()

      expect(actual >= 1).to.be.true
      expect(actual <= 31).to.be.true
    })
  })

  describe('dayOfWeek', function () {
    it('should return a weekday', function () {
      const actual = offhand.date.dayOfWeek()
      const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]

      expect(days.includes(actual)).to.be.true
    })
  })

  describe('monthNumber', function () {
    it('should return a number btween 1 and 12', function () {
      const actual = offhand.date.monthNumber()

      expect(actual >= 1).to.be.true
      expect(actual <= 12).to.be.true
    })
  })

  describe('monthName', function () {
    it('should return a month name', function () {
      const actual = offhand.date.monthName()
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      expect(months.includes(actual)).to.be.true
    })
  })

  describe('year', function () {
    it('should return a number between 1960 and 2060', function () {
      const actual = offhand.date.year()

      expect(actual >= 1960).to.be.true
      expect(actual <= 2060).to.be.true
    })
  })

  describe('timezone', function () {
    const actual = offhand.date.timezone()

    expect(offhand.date.TIMEZONES.includes(actual)).to.be.true
  })

  describe('unix', function () {
    it('should return a random unix time', function () {
      const actual = offhand.date.unix()
      const now = Date.now()

      expect(actual <= now).to.be.true
      expect(actual >= 0).to.be.true
    })
  })

  describe('time', function () {
    it('should return a random time', function () {
      const actual = offhand.date.time()
      const pattern = /^[0-2][0-9]:[0-6][0-9]:[0-6][0-9]$/

      console.log(actual)
      expect(pattern.test(actual)).to.be.true
    })
  })

  describe('random', function () {
    it('should return a random date MM/YY', function () {
      const actual = offhand.date.random('MM/YY')
      const pattern = /^[01][1-9]\/[0-9]{2}$/

      expect(pattern.test(actual)).to.be.true
    })

    it('should return a random date YYYY-MM-DD', function () {
      const actual = offhand.date.random('YYYY-MM-DD')
      const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/

      expect(pattern.test(actual)).to.be.true
    })
  })
})
