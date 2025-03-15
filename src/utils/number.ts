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

  if (!/^[-]?[0-9.]+[BMK]?$/.test(normalizedString)) {
    return NaN
  }

  if (normalizedString.endsWith('M')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000_000
  } else if (normalizedString.endsWith('K')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000
  } else {
    return parseFloat(readableString)
  }
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

/**
 * Calculates the number of days between two dates.
 *
 * @param startDate - The starting date.
 * @param endDate - The ending date.
 * @returns The number of days between the two dates.
 *
 * @example
 * getDaysBetweenDates(new Date('2024-09-01'), new Date('2024-09-23')) // returns 22
 */
export const getDaysBetweenDates = (startDate: Date, endDate: Date): number => {
  const msPerDay = 24 * 60 * 60 * 1000
  return Math.round((endDate.getTime() - startDate.getTime()) / msPerDay)
}
