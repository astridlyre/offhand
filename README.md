# offhand

Generate random values in JavaScript programs.

## Install

```bash
npm install @ebflat9/offhand
```

## Usage

Generate a random generator function from an Array or an Object.

```javascript
import { RandomGenerator } from '@ebflat9/offhand'

const randomNumbers = RandomGenerator.from([1, 2, 3, 4, 5])

// randomNumbers() => 2
// randomNumbers() => 1
// randomNumbers() => 5 ... etc
```

Fill placeholders with values.

```javascript
import { letterify, numberify } from '@ebflat9/offhand'

letterify('XXXX-XXXX') // => aFeLk-UPoi
numberify('####-####') // => 3549-9883
```
