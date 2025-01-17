/**
 * Generates a random integer between a specified min and max value.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 *
 * @example
 * getRandomNumber(1, 10) // can return any number between 1 and 10, such as 3 or 10
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
 * Converts a human-readable string with units (k or M) back to a number.
 *
 * @param readableString - The formatted string to convert back to a number.
 * @returns The corresponding number.
 *
 * @example
 * parseReadableStringToNumber('2.50M') // returns 2500000
 */
export const parseReadableStringToNumber = (readableString: string): number => {
  const normalizedString = readableString.toUpperCase()
  if (normalizedString.endsWith('M')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000_000
  } else if (normalizedString.endsWith('K')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000
  } else {
    return parseFloat(readableString)
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
 * Clamps a number between specified minimum and maximum values.
 *
 * @param num - The number to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 *
 * @example
 * clamp(15, 1, 10) // returns 10
 * clamp(-5, 1, 10) // returns 1
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, num))
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

/**
 * Parses a time string into the total number of seconds.
 *
 * @param time - A string representing a time duration (e.g., "5s", "2m", "7h", or "90d").
 * @returns The total duration in seconds.
 *
 * @throws Will throw an error if the input string format is invalid or contains unknown time units.
 *
 * @example
 * parseTimeToSeconds("5s") // returns 5
 * parseTimeToSeconds("2m") // returns 120
 * parseTimeToSeconds("1h 30m") // returns 5400
 */
export const parseTimeToSeconds = (time: string): number => {
  const regex = /(\d+)([smhd])/gi
  let totalSeconds = 0

  const sanitizedTime = time.replace(/\s+/g, '')

  const matches = sanitizedTime.match(regex)

  if (!matches) {
    throw new Error(
      'Invalid format. Use a format like "5s", "2m", "7h", or "90d".'
    )
  }

  matches.forEach((match) => {
    const value = parseInt(match.slice(0, -1), 10)
    const unit = match.slice(-1).toLowerCase()

    switch (unit) {
      case 's':
        totalSeconds += value
        break
      case 'm':
        totalSeconds += value * 60
        break
      case 'h':
        totalSeconds += value * 3600
        break
      case 'd':
        totalSeconds += value * 86400
        break
    }
  })

  return totalSeconds
}
