/* eslint-disable no-magic-numbers */
export function padTo(length = 2) {
  return (n: number | string) => `${n}`.padStart(length, '0')
}

export const randomNumber = (start = 0, end = 100) =>
  Math.floor(Math.random() * (end - start)) + start

export const add = (x: number, y: number) => x + y
export const subtract = (x: number, y: number) => x - y

export const reify = (context: any, formats: (string | (() => string))[]) =>
  formats
    .map((format) =>
      typeof format === 'function' ? format.call(context) : format,
    )
    .join('')
