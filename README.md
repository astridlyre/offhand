# offhand

Generate random values in JavaScript programs.

## Install

```bash
npm install @ebflat9/offhand
```

## Usage

```javascript
import { Offhand } from '@ebflat9/offhand'

const offhand = new Offhand({ locale: 'en-US' })

// Generate a random generator function from an Array or an Object.
const randomNumbers = offhand.randomGenerator.from([1, 2, 3, 4, 5])

// randomNumbers() => 2
// randomNumbers() => 1
// randomNumbers() => 5 ... etc

// Fill placeholders with values.
offhand.replacer.letterify('XXXX-XXXX') // => aFeLk-UPoi
offhand.replacer.numberify('####-####') // => 3549-9883

// Generate random dates
offhand.date.random('YYYY-MM-DD') // => 2005-05-02

// Generate random times
offhand.date.time() // => 14:34:22

// Generate random credit card information
offhand.creditCard.paymentDetails()
/*
{
  "type": "MasterCard",
  "number": "5345568597860043",
  "expiration": "05/23",
  "holder": "John Smith"
}
*/
```
