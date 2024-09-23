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
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 *
 * @param date - The date to check.
 * @returns True if the date is a Saturday or Sunday, false otherwise.
 *
 * @example
 * isWeekend(new Date('2024-01-06')) // returns true (Saturday)
 * isWeekend(new Date('2024-01-03')) // returns false (Wednesday)
 */
export const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}
