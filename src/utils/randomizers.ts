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

const FOUR_YEARS = 126144000000

const padTo =
  (length = 2) =>
  (n: number) =>
    `${n}`.padStart(length, '0')

export function randomDate(format: string) {
  const padTo2 = padTo()
  const start = Date.now()
  const end = start + Math.floor(Math.random() * FOUR_YEARS)
  const date = new Date(start + end)

  const y = date.getFullYear()
  const d = padTo2(date.getDate())
  const m = padTo2(date.getMonth() + 1)

  if (format === 'MM/YY') {
    return `${m}/${String(y).slice(2)}`
  } else if (format === 'YYYY-MM-DD') {
    return `${y}-${m}-${d}`
  } else if (format === 'YYYY-DD-MM') {
    return `${y}-${d}-${m}`
  }

  return date.toLocaleString()
}
