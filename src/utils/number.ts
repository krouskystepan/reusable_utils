// Usage: Generates a random integer between a specified min and max value.
// getRandomNumber(1, 10) can return any number between 1 and 10, such as 3 or 10.
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Usage: Converts a number into a human-readable string with appropriate units (k for thousand, M for million).
// formatNumberToReadableString(2500000) becomes '2.50M'.
export const formatNumberToReadableString = (number: number): string => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + 'M'
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(2) + 'k'
  } else {
    return number.toString()
  }
}

// Usage: Converts a human-readable string with units (k or M) back to a number.
// parseReadableStringToNumber('2.50M') becomes 2500000.
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

// Usage: Formats a phone number into a more readable format, optionally with a country code.
// formatPhoneNumber(1234567890, '+1') becomes '+1 123 456 789'.
export const formatPhoneNumber = (
  number: number,
  countryCode: string = ''
): string => {
  const cleaned = String(number).replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
  return countryCode ? `${countryCode} ${formatted}` : formatted
}

// Usage: Clamps a number between 1 and 10, e.g.,
// clamp(15, 1, 10) becomes 10, clamp(-5, 1, 10) becomes 1.
export const clamp = (num: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, num))
}
