/**
 * Capitalizes the first letter of a string and makes the rest of the string lowercase.
 *
 * @param str - The string to capitalize.
 * @returns A new string with the first letter capitalized and the rest in lowercase.
 *
 * @example
 * capitalizeFirstLetter('EXAMPLE') // 'Example'
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - The string to capitalize.
 * @returns A new string with the first letter of each word capitalized.
 *
 * @example
 * capitalizeEachWord('hello world') // 'Hello World'
 */
export const capitalizeEachWord = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

/**
 * Converts a camelCase string to kebab-case.
 *
 * @param str - The camelCase string to convert.
 * @returns A kebab-case version of the input string.
 *
 * @example
 * camelToKebabCase('camelCase') // 'camel-case'
 */
export const camelToKebabCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Converts a kebab-case string to camelCase.
 *
 * @param str - The kebab-case string to convert.
 * @returns A camelCase version of the input string.
 *
 * @example
 * kebabToCamelCase('kebab-case') // 'kebabCase'
 */
export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase())
}

/**
 * Reverses the characters of a given string.
 *
 * @param value - The string to be reversed.
 * @returns The reversed string.
 *
 * @example
 * reverseString("hello") // returns "olleh"
 */
export const reverseString = (value: string): string => {
  return value.split('').reverse().join('')
}

/**
 * Counts the number of words in a given string.
 *
 * @param value - The string to count words in.
 * @returns The word count.
 *
 * @example
 * countWords("hello world") // returns 2
 */
export const countWords = (value: string): number => {
  const trimmed = value.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

/**
 * Calculates the relative time since a given date.
 *
 * @param createdAt - The date to compare against the current date.
 * @returns A string representing the time elapsed since the given date.
 *
 * @example
 * getTimestamp(new Date('2024-09-23')) // returns "1 week ago"
 */
export const getTimestamp = (createdAt: Date): string => {
  const now = new Date()
  const timeDifference = now.getTime() - createdAt.getTime()

  const intervals = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
  }

  if (timeDifference < intervals.minute) {
    const seconds = Math.floor(timeDifference / intervals.second)
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`
  } else if (timeDifference < intervals.hour) {
    const minutes = Math.floor(timeDifference / intervals.minute)
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  } else if (timeDifference < intervals.day) {
    const hours = Math.floor(timeDifference / intervals.hour)
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
  } else if (timeDifference < intervals.week) {
    const days = Math.floor(timeDifference / intervals.day)
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  } else if (timeDifference < intervals.month) {
    const weeks = Math.floor(timeDifference / intervals.week)
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
  } else if (timeDifference < intervals.year) {
    const months = Math.floor(timeDifference / intervals.month)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  } else {
    const years = Math.floor(timeDifference / intervals.year)
    return `${years} ${years === 1 ? 'year' : 'years'} ago`
  }
}

/**
 * Converts a number into a human-readable string with appropriate units (k for thousand, M for million).
 *
 * @param number - The number to format.
 * @returns A formatted string representing the number in human-readable form.
 *
 * @example
 * formatNumberToReadableString(2_500_000) // returns '2.50M'
 */
export const formatNumberToReadableString = (number: number): string => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + 'M'
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(2) + 'k'
  } else {
    return number.toString()
  }
}

/**
 * Formats a phone number into a more readable format, optionally with a country code.
 *
 * @param number - The phone number to format, can be a number or a string.
 * @param countryCode - An optional country code to include in the formatted number.
 * @returns A formatted phone number string.
 *
 * @example
 * formatPhoneNumber('123456789012', '+1') // returns '+1 123 456 789 012'
 */
export const formatPhoneNumber = (
  number: number | string,
  countryCode: string = ''
): string => {
  const cleaned = String(number).replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
  return countryCode ? `${countryCode} ${formatted}` : formatted
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The number to be formatted.
 * @param locale - The locale string (default is 'en-US').
 * @param currency - The currency code (default is 'USD').
 * @returns The formatted currency string.
 *
 * @example
 * toCurrency(1234.56) // returns "$1,234.56"
 * toCurrency(1234.56, 'de-DE', 'EUR') // returns "1.234,56 €"
 */
export const toCurrency = (
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string => {
  return value.toLocaleString(locale, { style: 'currency', currency })
}
