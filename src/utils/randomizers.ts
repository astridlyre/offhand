/* eslint-disable no-magic-numbers */
export const randomIndex = <T>(source: T[]): T => {
  const index: number = Math.floor(Math.random() * source.length)
  return source[index]
}

export const randomKey = (object: Record<PropertyKey, any>): string => {
  const keys = Object.keys(object)
  return randomIndex(keys)
}

export const randomDigit = (): number => Math.floor(Math.random() * 10)

export const LOWERCASE = [...'abcdefghijklmnopqrstuvwxyz']
export const UPPERCASE = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
export const LOWERCASE_AND_UPPERCASE = LOWERCASE.concat(UPPERCASE)

export const randomLowerCase = () => randomIndex(LOWERCASE)
export const randomUpperCase = () => randomIndex(UPPERCASE)
export const randomLetter = () => randomIndex(LOWERCASE_AND_UPPERCASE)
