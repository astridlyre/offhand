import { randomDigit, randomLetter } from './randomizers'

export function letterify(str: string) {
  return str.replaceAll('X', randomLetter)
}

export function numberify(str: string) {
  return str.replaceAll('#', () => `${randomDigit()}`)
}

export function join(...tokens: string[]) {
  return tokens.filter(Boolean).join(' ')
}
