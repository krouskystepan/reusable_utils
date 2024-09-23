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
