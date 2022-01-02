import { Randomizer } from './Randomizer'

/* eslint-disable no-unused-vars */
interface GeneratorGetterType {
  <T>(generator: Generator<T, any, T>): T
}

function createGeneratorGetter<T>(
  generator: Generator<T, any, T>,
): GeneratorGetterType {
  function RandomGenerator() {
    return generator.next().value
  }

  RandomGenerator.toArray = function toArray<T>(
    this: Generator<T, any, T>,
    length: number,
  ): T[] {
    if (length === 0) return []

    if (!length) {
      throw new Error('Length must be provided, to avoid infinite loop')
    }

    const result: T[] = []

    for (let i = 0; i < length; i++) {
      result.push(generator.next().value)
    }

    return result
  }

  return RandomGenerator
}

function* generatorFromCallback(callback: () => any) {
  while (true) {
    yield callback()
  }
}

export class RandomGenerator {
  #randomizer

  from<T>(target: Iterable<T> | (() => any)) {
    if (Array.isArray(target)) {
      return this.randomGeneratorArray(target)
    } else if (typeof target === 'function') {
      return createGeneratorGetter(generatorFromCallback(target))
    }
    return this.randomGeneratorObject(target as Record<PropertyKey, any>)
  }

  constructor(randomizer: Randomizer) {
    this.#randomizer = randomizer
  }

  randomGeneratorArray<T>(array: T[]): GeneratorGetterType {
    const generator = generatorFromCallback(() =>
      this.#randomizer.randomIndex(array),
    )
    return createGeneratorGetter(generator)
  }

  randomGeneratorObject<T>(
    object: Record<PropertyKey, T>,
  ): GeneratorGetterType {
    const keys = Object.keys(object)
    const generator = generatorFromCallback(
      () => object[this.#randomizer.randomKey(keys)],
    )

    return createGeneratorGetter(generator)
  }
}
