/* eslint-disable no-unused-vars */
import { randomKey, randomIndex } from './randomizers'

interface GeneratorGetterType {
  <T>(generator: Generator<T, any, T>): T
}

function createGeneratorGetter<T>(
  generator: Generator<T, any, T>,
): GeneratorGetterType {
  function innerGenerator() {
    return generator.next().value
  }

  innerGenerator.toArray = function toArray<T>(
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

  return innerGenerator
}

function* generatorFromCallback(callback: () => any) {
  while (true) {
    yield callback()
  }
}

function randomGeneratorArray<T>(array: T[]): GeneratorGetterType {
  const generator = generatorFromCallback(() => randomIndex(array))
  return createGeneratorGetter(generator)
}

function randomGeneratorObject<T>(
  object: Record<PropertyKey, T>,
): GeneratorGetterType {
  const keys = Object.keys(object)
  const generator = generatorFromCallback(() => object[randomKey(keys)])

  return createGeneratorGetter(generator)
}

export const RandomGenerator = {
  from<T>(iterable: Iterable<T>) {
    if (Array.isArray(iterable)) {
      return randomGeneratorArray(iterable)
    }
    return randomGeneratorObject(iterable as Record<PropertyKey, any>)
  },
}
